from aiogram.utils.formatting import Code, PhoneNumber
from fastapi import Depends
from sqlalchemy.orm import Session
from starlette.requests import Request

from data.datasource.FeedbackDataSource import FeedbackDataSource
from data.models.feedback.FeedbackEntity import FeedbackEntity
from data.schemas.feedback.FeedbackSchema import FeedbackRequestSchema
from database import get_db





class FeedbackService(FeedbackDataSource):

    async def get_channels(self):
        return self.fetch_channels()

    async def save_feedback(self, request: Request, feedback_request: FeedbackRequestSchema):
        feedback = FeedbackEntity(
            phone=feedback_request.phone,
            name=feedback_request.name,
            category=feedback_request.category,
            source_url=feedback_request.source_url,
            section_name=feedback_request.section_name,
            ip_address=request.client.host,
            user_agent=request.headers.get("User-Agent"),
        )
        self.insert_feedback(feedback)
        return feedback


def get_feedback_service(db: Session = Depends(get_db)):
    return FeedbackService(db)
