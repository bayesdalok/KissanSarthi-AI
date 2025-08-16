# /services/weather-service/app/main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware # <-- ADD THIS
from .models import WeatherResponse, DailyForecast
import datetime

app = FastAPI(title="Kisan-Sarthi Weather Service")

# --- ADD THIS MIDDLEWARE BLOCK ---
origins = [
    "http://localhost",
    "http://localhost:8000",
    "null",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ---------------------------------

@app.get("/weather/{location}", response_model=WeatherResponse)
def get_weather(location: str):
    """
    Returns a 5-day weather forecast for the specified location.
    NOTE: This currently returns sample data.
    """
    if location.lower() != "vadodara":
        raise HTTPException(status_code=404, detail="Weather data only available for Vadodara in this demo.")

    # Sample data for demonstration
    today = datetime.date.today()
    forecast_data = [
        DailyForecast(date=today + datetime.timedelta(days=i), max_temp=35 + i, min_temp=26 + i, description="Sunny with clouds", precipitation_chance=0.1 + (i*0.05))
        for i in range(5)
    ]

    return WeatherResponse(
        location=location,
        current_temp=36.0,
        current_condition="Mostly Sunny",
        forecast=forecast_data
    )