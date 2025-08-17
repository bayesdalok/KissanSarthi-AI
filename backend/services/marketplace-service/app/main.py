# /services/marketplace-service/app/main.py

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, database
from typing import List

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Kisan-Sarthi Marketplace Service")

# --- CORS Middleware ---
origins = ["http://localhost", "http://localhost:8000", "null"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/listings/", response_model=models.ListingResponse)
def create_listing(listing: models.ListingCreate, db: Session = Depends(get_db)):
    """
    Creates a new produce listing in the database.
    """
    new_listing = models.ProduceListing(**listing.dict())
    db.add(new_listing)
    db.commit()
    db.refresh(new_listing)
    return new_listing

@app.get("/listings/", response_model=List[models.ListingResponse])
def get_all_listings(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Retrieves all produce listings from the database.
    """
    listings = db.query(models.ProduceListing).offset(skip).limit(limit).all()
    return listings
