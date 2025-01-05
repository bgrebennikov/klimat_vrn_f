import Text from "@/components/elements/Text";
import Subtitle from "@/components/elements/Subtitle";
import {TitleLarge} from "@/components/elements/TitleLarge";

export const ContactsSection = () => {
    return (
        <>
            <div className={"flex flex-col md:flex-row shrink mt-4 gap-4"}>
                <div className={"bg-white rounded-2xl w-full p-4"}>
                    <div>
                        <Text>Звоните прямо сейчас</Text>
                        <TitleLarge>
                            <a href="tel://+79092145728">+7 909 214 57 28</a>
                        </TitleLarge>

                        <Text className={"mt-4"}>Режим работы</Text>
                        <TitleLarge>
                            <Subtitle>с 10:00 до 20:00 без выходных</Subtitle>
                        </TitleLarge>

                        <Text className={"mt-4"}>Адрес</Text>
                        <TitleLarge>
                            <Subtitle>г. Воронеж, Ул. Минская 67/1</Subtitle>
                        </TitleLarge>

                        <Text className={"mt-4"}>ИНН</Text>
                        <TitleLarge>
                            <Subtitle>616406260821</Subtitle>
                        </TitleLarge>


                    </div>
                </div>
                <div className={"bg-white rounded-2xl w-full p-4 relative"}>
                    <div className={
                        `absolute left-4 bottom-12 translate-x-4 -translate-y-12 
                        p-2 bg-white rounded-2xl backdrop-blur-sm bg-opacity-60 w-72`
                    }>
                        <Subtitle
                            className={""}
                        >Работаем во всех
                            районах Воронежа</Subtitle>
                    </div>
                    <div className={"overflow-hidden rounded-2xl"}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A97f3f9282bdc2c4a7dae37d837a065ba9a3d506009429e3794c1e24602ee3454&amp;source=constructor"
                            width="100%" height="497"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}