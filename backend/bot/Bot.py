from aiogram import Dispatcher, Bot

from Constants import BOT_TOKEN
from bot.routes import BotMainRoute

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


dp.include_routers(
    BotMainRoute.router
)
