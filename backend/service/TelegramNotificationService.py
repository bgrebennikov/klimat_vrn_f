from bot.Bot import bot
from data.models.feedback.FeedbackChannelsEntity import FeedbackChannelsEntity
from data.models.feedback.FeedbackEntity import FeedbackEntity
from service.TelegramNotificationsBase import TelegramNotificationsBase


class TelegramNotificationService(TelegramNotificationsBase):

    def __init__(self):
        super().__init__()

    async def send_feedback(self, feedback_data: FeedbackEntity, channels: list[FeedbackChannelsEntity]):
        self.feedback_content(feedback_data)
        for ch in channels:
            await bot.send_message(
                chat_id=ch.telegram_id,
                **self.feedback_content(feedback_data).as_kwargs()
            )


def get_telegram_notification_service():
    return TelegramNotificationService()
