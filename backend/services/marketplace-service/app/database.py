# /services/user-service/app/database.py
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Connection string for our PostgreSQL database
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://appuser:PJXuWQW2E6Gqlk34vi7Zq3jv8QtSGPya@dpg-d2gcbbogjchc73b0gnv0-a/kisandb")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()