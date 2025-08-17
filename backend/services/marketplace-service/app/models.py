# /services/marketplace-service/app/models.py

from pydantic import BaseModel
from sqlalchemy import Column, String, Integer, Float, DateTime
from .database import Base
import datetime

# SQLAlchemy model for the 'produce_listings' table
class ProduceListing(Base):
    __tablename__ = "produce_listings"
    id = Column(Integer, primary_key=True, index=True)
    seller_name = Column(String, index=True)
    product = Column(String, index=True)
    quantity = Column(String)
    price = Column(String)
    location = Column(String)
    phone_number = Column(String)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

# Pydantic model for creating a new listing
class ListingCreate(BaseModel):
    seller_name: str
    product: str
    quantity: str
    price: str
    location: str
    phone_number: str

# Pydantic model for API responses
class ListingResponse(ListingCreate):
    id: int
    timestamp: datetime.datetime

    class Config:
        orm_mode = True