# /services/market-service/app/main.py

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, database
from typing import List

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Kisan-Sarthi Market Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://kisaansarthi-ai.vercel.app"],  # frontend domain
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

@app.get("/market-prices/{market_name}", response_model=List[models.MarketPriceResponse])
def get_prices_for_market(market_name: str, db: Session = Depends(get_db)):
    """
    Retrieve all current commodity prices for a specific market.
    """
    prices = db.query(models.MarketPrice).filter(models.MarketPrice.market_name == market_name).all()
    if not prices:
        raise HTTPException(status_code=404, detail="Market not found or no data available")
    return prices