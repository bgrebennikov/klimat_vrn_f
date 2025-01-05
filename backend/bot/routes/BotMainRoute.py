from aiogram import Router, Bot
from aiogram.filters import CommandStart
from aiogram.types import Message, MenuButtonWebApp, WebAppInfo

from Constants import WEBAPP_URL

router = Router()


@router.message(CommandStart())
async def on_start(message: Message, bot: Bot):
    await bot.set_chat_menu_button(
        chat_id=message.chat.id,
        menu_button=MenuButtonWebApp(
            text="Admin CP",
            web_app=WebAppInfo(
                url=WEBAPP_URL
            ),
        )

    )
    await message.answer("В этот диалог будут приходить уведомления о заявках с сайта")
