from abc import ABC

from sqlalchemy.orm import Session

from data.models.feedback.FeedbackChannelsEntity import FeedbackChannelsEntity
from data.models.feedback.FeedbackEntity import FeedbackEntity


class FeedbackDataSource(ABC):

    def __init__(self, db: Session):
        self._db = db

    def fetch_channels(self):
        return self._db.query(FeedbackChannelsEntity).all()

    def insert_feedback(self, feedback: FeedbackEntity):
        self._db.add(feedback)
        self._db.commit()
        self._db.refresh(feedback)
