# /services/user-service/app/main.py

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, database
from fastapi.middleware.cors import CORSMiddleware


# Create all database tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Kisan-Sarthi User Service")

# --- Add the CORS Middleware ---
# Allow multiple origins during development
origins = [
    "https://prajanya-ai.vercel.app",
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

# Dependency to get a database session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=models.UserResponse)
def create_user(user: models.UserCreate, db: Session = Depends(get_db)):
    """
    Create a new user profile.
    This endpoint will be called after successful phone OTP verification.
    """
    db_user = db.query(models.User).filter(models.User.phone_number == user.phone_number).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Phone number already registered")
    
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.get("/users/{phone_number}", response_model=models.UserResponse)
def get_user(phone_number: str, db: Session = Depends(get_db)):
    """
    Retrieve a user's profile by their phone number.
    """
    db_user = db.query(models.User).filter(models.User.phone_number == phone_number).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user