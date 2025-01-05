from sqlalchemy import Column, BigInteger

from database import Base


class FeedbackChannelsEntity(Base):

    __tablename__ = 'feedback_channels'
    id = Column(BigInteger, primary_key=True)
    telegram_id = Column(BigInteger)

