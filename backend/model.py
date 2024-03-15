from sqlalchemy import Boolean, Column, Integer, String, DateTime, func
from datetime import datetime

from database import Base

# Create Usermodel
class UserModel(Base):
    __tablename__ = "accounts"
    id = Column(Integer, primary_key=True, index=True)
    username =Column(String(100))
    email = Column(String(255), unique=True, index=True)
    password = Column(String(100))

