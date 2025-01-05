from fastapi import APIRouter, Request
from fastapi.params import Depends

from data.schemas.feedback.FeedbackSchema import FeedbackRequestSchema
from service.FeedbackService import get_feedback_service, FeedbackService
from service.TelegramNotificationService import TelegramNotificationService, get_telegram_notification_service

router = APIRouter(prefix="/feedback")


@router.post('/')
async def feedback(
        request: Request,
        feedback_data: FeedbackRequestSchema,
        feedback_service: FeedbackService = Depends(get_feedback_service),
        notification_service: TelegramNotificationService = Depends(get_telegram_notification_service)
):
    channels = await feedback_service.get_channels()
    _feedback = await feedback_service.save_feedback(request, feedback_data)
    await notification_service.send_feedback(_feedback, channels)

    return "OK"
