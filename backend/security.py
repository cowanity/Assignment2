from passlib.context import CryptContext

#Hash password
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#get hash password 
def get_password_hash(password):
    return pwd_context.hash(password)

#verify password 
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
