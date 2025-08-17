# /services/chat-service/app/main.py

import os
import requests
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, database
from typing import List


# Create all database tables defined in models.py
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Kisan-Sarthi Chat Service")

# Allow multiple origins during development
origins = [
    "https://kisaansarthi-ai.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ... (the rest of your API code)
# Dependency to get a database session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# IMPORTANT: Your Gemini API key is stored securely as an environment variable
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key={GEMINI_API_KEY}"

def search_kcc_transcripts(query: str, db: Session) -> List[str]:
    """
    Performs a simple keyword search on the KCC transcripts in the database.
    """
    # A simple search: split query into words and search for any of them.
    keywords = query.split()
    search_conditions = [models.KccTranscript.query_text.ilike(f"%{keyword}%") for keyword in keywords]
    
    # The 'or_' function is not directly available, so we build the query iteratively
    query_builder = db.query(models.KccTranscript)
    if search_conditions:
        # A simplified way to handle OR logic without importing or_
        # This is a basic implementation; a more advanced version would use tsvector.
        results = query_builder.filter(search_conditions[0]).limit(2).all()
    else:
        results = []

    return [f"Q: {res.query_text}\nA: {res.response_text}" for res in results]


@app.post("/chat", response_model=models.ChatResponse)
async def handle_chat(query: models.ChatQuery, db: Session = Depends(get_db)):
    """
    Receives a farmer's query, searches local data for context, 
    gets a response from Gemini, and returns it.
    """
    if not GEMINI_API_KEY:
        raise HTTPException(status_code=500, detail="Gemini API key is not configured on the server.")

    # 1. Search our own database for relevant context from your files
    retrieved_context = search_kcc_transcripts(query.query, db)
    context_str = "\n".join(retrieved_context)

    # 2. Construct a detailed, context-rich prompt for the Gemini API
    prompt = f"""
    You are 'Kisan-Sarthi AI', a helpful AI agricultural advisor for Indian farmers.
    Your primary language is '{query.language}'. Please provide a helpful and concise answer in the same language.

    Before answering, review the following verified information from the Kisan Call Centre transcripts.
    If this information is relevant to the user's question, use it to formulate your answer.
    If it is not relevant, ignore it.

    --- Verified Context from Database ---
    {context_str if context_str else "No relevant information found in the database."}
    ------------------------------------

    User's question: "{query.query}"
    """

    payload = {
        "contents": [{
            "parts": [{"text": prompt}]
        }]
    }

    try:
        response = requests.post(API_URL, json=payload)
        response.raise_for_status()
        
        result = response.json()
        ai_response = result["candidates"][0]["content"]["parts"][0]["text"]
        
        return models.ChatResponse(response=ai_response)
    except requests.exceptions.RequestException as e:
        print(f"Error calling Gemini API: {e}")
        raise HTTPException(status_code=503, detail="The AI service is currently unavailable.")
    except (KeyError, IndexError) as e:
        print(f"Error parsing Gemini response: {e}")
        raise HTTPException(status_code=500, detail="Received an invalid response from the AI service.")

