'use client'

import SimpleButton, {ButtonState} from "@/components/buttons/SimpleButton";
import PhoneInput from "@/components/inp/PhoneInput";
import {useState} from "react";
import {useFeedback} from "@/app/api/ServerApi";
import {useSendFeedbackMutation} from "@/libs/store/api/backendApi";
import phoneHasError from "@/components/validation/phoneHasError";
import {hideModal} from "@/libs/store/features/modalWindowSlice";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/libs/store/hooks";

interface SmallFormProps {
    className?: string;
    icon: any,
    title: string,
    description: string,
    placeholder: string,
    btnText: string,
}

const SmallForm = (props: SmallFormProps) => {

    const [phone, setPhone] = useState<string>();
    const [btnState, setBtnState] = useState<ButtonState>(ButtonState.DEFAULT);

    const [sendFeedback, {isLoading, isSuccess}] = useSendFeedbackMutation();
    const [formError, setFormError] = useState<string | null>(null);

    const router = useRouter();

    function handleSubmit(e: any) {

        const err = phoneHasError(phone);

        if (phone != null && !err) {
            sendFeedback({
                phone: phone,
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
        <form
            className={
                `sm:p-6 flex bg-white rounded-2xl gap-4 items-start  ${props.className}
                    p-4 mb-4 lg:mb-0
                `
            }
        >
            <div className={"hidden sm:block"}>
                {props.icon}
            </div>
            <div className={"w-full"}>
                <h1 className={"text-2xl font-gilroy-bold leading-6 sm:leading-3"}>{props.title}</h1>
                <p className={"font-manrope-medium text-sm mt-4 whitespace-pre-line"}>{props.description}</p>

                {formError && (
                    <div className="text-red-600 font-gilroy-bold mt-4">
                        {formError}
                    </div>
                )}
                <div className="flex mt-4 justify-between flex-col md:flex-row gap-2 sm:gap-0">


                    <PhoneInput
                        className={`w-full ${formError && 'border-2 border-red-500'}`}
                        onInputChange={(e) => {
                            setFormError(null);
                            setPhone(e.currentTarget.value)
                        }}
                    />

                    <SimpleButton
                        onClick={handleSubmit}
                        text={props.btnText}
                        className={"sm:w-full xl:w-fit sm:ms-4 text-sm"}
                        isLoading={isLoading}
                    />
                </div>

            </div>
        </form>
    )
}


export default SmallForm;