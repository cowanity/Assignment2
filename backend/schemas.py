from pydantic import BaseModel, EmailStr

#User Create Request
class CreateUserRequest(BaseModel):
    username: str
    email: EmailStr
    password: str
    
#User Login request 
class LoginUserRequest(BaseModel):
    email:EmailStr
    password: str