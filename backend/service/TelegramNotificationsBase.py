from abc import ABC

from aiogram.utils.formatting import as_list, PhoneNumber, Code, as_section, as_key_value, Bold, Text, Pre, as_line, \
    Url, ExpandableBlockQuote, Spoiler, BlockQuote

from data.models.feedback.FeedbackEntity import FeedbackEntity


def _format_phone(phone_number: str):
    if phone_number.startswith("+7"):
        return PhoneNumber(phone_number)
    elif phone_number.startswith("79"):
        return PhoneNumber(f"+{phone_number}")
    elif phone_number.startswith("89"):
        return PhoneNumber(f"+7{phone_number[1:]}")
    else:
        return Code(phone_number)


class TelegramNotificationsBase(ABC):

    def __init__(self):
        pass

    def feedback_content(self, data: FeedbackEntity):
        content = as_section(
            Bold("Новая заявка!"),
            Bold(f"[{data.category}]\n\n") if data.category else "\n",

            as_key_value("Телефон", _format_phone(data.phone)),
            as_key_value("\nИмя клиента", data.name) if data.name else "",

            as_key_value("\nСтраница", Url(data.source_url)) if data.source_url else "",
            as_key_value("\nФорма", data.section_name) if data.section_name else "",

            as_line("\n"),

            Spoiler(
                Bold("Дополнительная инфа"),
                as_list(
                    as_key_value("IP", data.ip_address) if data.ip_address else "",
                    as_key_value("User Agent", data.user_agent) if data.user_agent else "",
                )
            )
        )
        return content
