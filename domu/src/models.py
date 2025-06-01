from sqlalchemy import Column, Integer, String, Float, JSON, DateTime
from src.database import Base  # Assume Base is defined in database.py
from flask_login import UserMixin

class Listing(Base):
    __tablename__ = "listings"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    price = Column(Float)
    location = Column(String)
    size_sqm = Column(Float)
    source = Column(String)  # e.g., "immobiliare.it"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    password_hash = Column(String)
    preferences = Column(JSON)  # e.g., {"max_price": 1500, "min_size": 50}

class User(Base, UserMixin):  # Inherit from UserMixin
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    password_hash = Column(String)
    preferences = Column(JSON)

    # Required for Flask-Login to work
    def get_id(self):
        return str(self.id)  # Return the user's ID as a string