# /services/weather-service/app/models.py

from pydantic import BaseModel
from typing import List
import datetime

class DailyForecast(BaseModel):
    date: datetime.date
    max_temp: float
    min_temp: float
    description: str
    precipitation_chance: float

class WeatherResponse(BaseModel):
    location: str
    current_temp: float
    current_condition: str
    forecast: List[DailyForecast]