# /services/market-service/app/models.py

from pydantic import BaseModel
from sqlalchemy import Column, String, Integer, Float, DateTime
from .database import Base
import datetime

# SQLAlchemy model for the 'market_prices' table
class MarketPrice(Base):
    __tablename__ = "market_prices"
    id = Column(Integer, primary_key=True, index=True)
    market_name = Column(String, index=True)
    commodity = Column(String, index=True)
    min_price = Column(Float)
    max_price = Column(Float)
    modal_price = Column(Float)
    last_updated = Column(DateTime, default=datetime.datetime.utcnow)

# Pydantic model for API responses
class MarketPriceResponse(BaseModel):
    market_name: str
    commodity: str
    modal_price: float

    class Config:
        orm_mode = True