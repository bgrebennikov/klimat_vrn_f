import {TitleLarge} from "@/components/elements/TitleLarge";
import Subtitle from "@/components/elements/Subtitle";
import SimpleButton from "@/components/buttons/SimpleButton";
import {useState} from "react";
import {useFeedback} from "@/app/api/ServerApi";
import phoneHasError from "@/components/validation/phoneHasError";
import {useSendFeedbackMutation} from "@/libs/store/api/backendApi";
import {useRouter} from "next/navigation";

export default function FormSection() {

    const [name, setName] = useState<string>();
    const [phone, setPhone] = useState<string>();

    const [sendFeedback, {isLoading, isSuccess}] = useSendFeedbackMutation();
    const [formError, setFormError] = useState<string | null>(null);

    const router = useRouter();


    function handleSubmit() {

        const err = phoneHasError(phone);

        if (phone != null && !err) {
            sendFeedback({
                phone: phone,
                name: name,
                category: 'Кондиционеры',
                source_url: location.origin,
                section_name: "Расчет стоимости ремонта",
            }).finally(() => {
                router.push("/thanks");
            })
        } else {
            setFormError(err)
        }

    }

    return (
        <>
            <div className={"py-14 bg-white rounded-2xl p-4 mt-10 flex justify-center items-center"}>
                <div className={"text-center"}>
                    <TitleLarge
                        className={""}
                    >Узнайте стоимость ремонта Вашего кондиционера</TitleLarge>
                    <Subtitle className={"mt-2"}>Оставьте заявку прямо сейчас и мастер перезвонит вам в течении
                        минуты</Subtitle>

                    <form className={"my-4 flex flex-col lg:flex-row gap-4 justify-center"}>
                        <input type="text" name="customer_name" id="customer_name"
                               className={" px-4 sm:py-4 py-4 bg-gray-150 rounded-full block w-full lg:w-80"}
                               placeholder={"Введите Ваше имя"}
                               onChange={(e) => {
                                   setName(e.currentTarget.value)
                               }}
                        />

                        <input type="number" name="customer_phone" id="customer_phone"
                               className={`px-4 sm:py-4 py-4 bg-gray-150 rounded-full block w-full lg:w-80 ${formError && 'border-2 border-red-500'}`}
                               placeholder={"Контактный телефон"}
                               onChange={(e) => {
                                   setFormError(null)
                                   setPhone(e.currentTarget.value)
                               }}
                        />

                        <SimpleButton
                            className={" py-4 px-8"}
                            text={"Вызвать мастера"}
                            onClick={handleSubmit}
                            isLoading={isLoading}
                        />
                    </form>

                </div>
            </div>
        </>
    )
}