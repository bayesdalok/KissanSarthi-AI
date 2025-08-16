# /services/chat-service/app/models.py

from pydantic import BaseModel
from sqlalchemy import Column, String, Integer, Text
from .database import Base # We will add the database.py file next

# --- Pydantic Models for API ---
class ChatQuery(BaseModel):
    query: str
    language: str = "hi"

class ChatResponse(BaseModel):
    response: str

# --- SQLAlchemy Models for Database Tables ---

# Model for Kisan Call Centre (KCC) Transcripts
class KccTranscript(Base):
    __tablename__ = "kcc_transcripts"
    id = Column(Integer, primary_key=True, index=True)
    query_text = Column(Text, index=True) # The farmer's question
    response_text = Column(Text)          # The expert's answer

# Model for Land Utilization Data
class LandUtilization(Base):
    __tablename__ = "land_utilization"
    id = Column(Integer, primary_key=True, index=True)
    state = Column(String, index=True)
    year = Column(Integer)
    land_use_category = Column(String)
    area_in_hectares = Column(Integer)


