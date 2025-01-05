from sqlalchemy import Column, BigInteger, func, DateTime, String

from database import Base


class FeedbackEntity(Base):
    __tablename__ = 'feedback'
    id = Column(BigInteger, primary_key=True)
    phone = Column(String(20), nullable=False)
    name = Column(String(256), nullable=True)

    category = Column(String(256), nullable=True)
    source_url = Column(String(), nullable=True)
    section_name = Column(String(256), nullable=True)

    ip_address = Column(String(), nullable=True)
    user_agent = Column(String(), nullable=True)

    created_at = Column(DateTime(timezone=True), default=func.now())
