from fastapi import APIRouter,status, Depends, Query
from sqlalchemy.orm import Session
from database import get_db
from schemas import CreateUserRequest,LoginUserRequest
from services import create_user_account,login_user_account
from fastapi.responses import JSONResponse
from model import UserModel



router = APIRouter(
    prefix="/users",
    tags=["Users"],
    responses={404: {"description": "Not found"}},
)

#create route to register by post method
@router.post('/register',status_code=status.HTTP_201_CREATED)
async def create_user(data: CreateUserRequest, db: Session = Depends(get_db)):
    await create_user_account(data=data, db=db)
    payload = {"message":"Successfully Register"}
    return JSONResponse(content=payload)

#create route to login by post method 
@router.post('/login',status_code=status.HTTP_200_OK)
async def login_user(data: LoginUserRequest, db: Session = Depends(get_db)):
    user = await login_user_account(data.email, data.password, db)
    return user

# ------ Get user data based on input email---------
@router.get("/accounts")
async def get_account_by_email(email: str = Query(...), db: Session = Depends(get_db)):
    # Query the database to fetch the account based on the provided email
    account = db.query(UserModel).filter(UserModel.email == email).first()
    if account:
        return account
    else:
        return {"message": "Account not found"}