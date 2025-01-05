import {TitleLarge} from "@/components/elements/TitleLarge";
import SubtitleSmall from "@/components/elements/SubtitleSmall";
import PhoneInput from "@/components/inp/PhoneInput";
import SimpleButton from "@/components/buttons/SimpleButton";
import {useState} from "react";
import {useSendFeedbackMutation} from "@/libs/store/api/backendApi";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/libs/store/hooks";
import {hideModal} from "@/libs/store/features/modalWindowSlice";
import phoneHasError from "@/components/validation/phoneHasError";

export const CallMasterModalContent = () => {

    const [phone, setPhone] = useState<string>();
    const [sendFeedback, {isLoading, isSuccess}] = useSendFeedbackMutation();
    const [formError, setFormError] = useState<string | null>(null);

    const router = useRouter();
    const dispatch = useAppDispatch();


    function handleFeedback() {

        const err = phoneHasError(phone);

        if (phone != null && !err) {
            sendFeedback({
                phone: phone,
                category: 'Кондиционеры',
                source_url: location.origin
            }).finally(() => {
                router.push("/thanks")
                dispatch(hideModal({modal_key: 'callMasterMw'}))
            })
        } else {
            setFormError(err)
        }
    }

    return (
        <>
            <div className={"flex flex-col md:flex-row justify-between h-full"}>
                <div className={"w-full p-6 flex flex-col h-full"}>
                    <TitleLarge>
                        Вызвать мастера
                    </TitleLarge>
                    <SubtitleSmall
                        className={"mt-6"}
                    >
                        Мастер перезвонит Вам, расчитает стоимость услуг, и согласует время выезда
                    </SubtitleSmall>
                    <SubtitleSmall className={"mt-2 !font-gilroy-bold text-xl"}>
                        На все виды работ предусмотрена гарантия до 2х лет
                    </SubtitleSmall>

                    <form
                        className={"my-4 flex flex-col  h-full"}
                    >
                        {formError && (
                            <div className={"text-sm font-gilroy-bold mb-2 text-red-500"}>
                                {formError}
                            </div>
                        )}
                        <PhoneInput
                            className={`!w-full !p-4 ${formError && 'border-2 border-red-500'}`}
                            onInputChange={(e: any) => {
                                setPhone(e?.currentTarget?.value);
                            }}/>

                        <SimpleButton
                            className={"w-full mt-4 !p-4"}
                            text={"Отправить"}
                            onClick={handleFeedback}
                            isLoading={isLoading}
                        />
                    </form>
                </div>

                <div className={"w-full hidden sm:block"}>
                    <img
                        fetchPriority={"high"}
                        className={"object-cover min-h-full"}
                        src={"/images/mw/master_mw.png"}/>
                </div>
            </div>
        </>
    )
}