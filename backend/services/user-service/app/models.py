# /services/user-service/app/models.py

from pydantic import BaseModel
from sqlalchemy import Column, String, Integer
from .database import Base

# SQLAlchemy model for the 'users' table in PostgreSQL
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    phone_number = Column(String, unique=True, index=True)
    name = Column(String)
    location = Column(String)

# Pydantic model for creating a new user (data validation)
class UserCreate(BaseModel):
    phone_number: str
    name: str
    location: str

# Pydantic model for reading user data from the API
class UserResponse(BaseModel):
    id: int
    phone_number: str
    name: str
    location: str

    class Config:
        orm_mode = True
