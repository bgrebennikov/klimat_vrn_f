export default function phoneHasError(phone?: string) {

    const error = "Неверный формат номера телефона";

    if (phone === null || phone === "") return error;
    if (!phone || phone.length < 10 || phone.length > 12) {
        return error;
    }

    if (!phone.match(`(\\+7|8|7)[\\s(]*\\d{3}[)\\s]*\\d{3}[\\s-]?\\d{2}[\\s-]?\\d{2}`)) {
        return error;
    }

    return null;
}