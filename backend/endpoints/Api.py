from fastapi import APIRouter

from endpoints.api import FeedbackApiRouter

router = APIRouter(prefix="/api")


router.include_router(
    FeedbackApiRouter.router
)

