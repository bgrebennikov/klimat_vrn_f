from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import database
from endpoints import Api

database.init()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_origins=["*"],
)

app.include_router(Api.router)
