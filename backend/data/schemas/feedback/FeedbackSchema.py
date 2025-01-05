from typing import Optional

from pydantic import BaseModel


class FeedbackSchemaBase(BaseModel):
    pass


class FeedbackRequestSchema(FeedbackSchemaBase):
    phone: str
    name: Optional[str] = None
    source_url: Optional[str] = None
    section_name: Optional[str] = None
    category: Optional[str] = None
