from model import UserModel
from fastapi.exceptions import HTTPException
from security import get_password_hash,verify_password
import jwt
import datetime

# Secret key for JWT token signing
SECRET_KEY = "your-secret-key"

# Define the expiration time (e.g., 1 day from the current time)
expires_in = datetime.timedelta(days=1)

# Create user account
async def create_user_account(data, db):
    user = db.query(UserModel).filter(UserModel.email == data.email).first()
    if user:
        raise HTTPException(status_code=422, detail="Email is already registered with us.")

    new_user = UserModel(
        username=data.username,
        email=data.email,
        password=get_password_hash(data.password),
       
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

#user login 
async def login_user_account(email: str, password: str,db):
    user = db.query(UserModel).filter(UserModel.email == email).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    else: # Create the payload for the token
            payload = {
                "email": user.email,
                "exp": datetime.datetime.utcnow() + expires_in  # Include the expiration time
            }

            # Generate the JWT token
            token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
            # Return the token along with the response
            return {"message": "Password verified successfully", "token": token}

