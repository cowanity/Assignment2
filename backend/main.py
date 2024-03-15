from fastapi import FastAPI
from fastapi.responses import JSONResponse
from routes import router as user_router
from fastapi.middleware.cors import CORSMiddleware

origins = ["*"] #all origins allow
app = FastAPI()
app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"], 
)


app.include_router(user_router)

@app.get('/')
def health_check():
    return JSONResponse(content={"status":"running"})