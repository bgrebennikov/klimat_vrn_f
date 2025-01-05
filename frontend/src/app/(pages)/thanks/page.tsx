import {TitleLarge} from "@/components/elements/TitleLarge";
import SubtitleSmall from "@/components/elements/SubtitleSmall";
import Subtitle from "@/components/elements/Subtitle";

export default function ThanksPage() {
    return (
        <>
            <div className={
                "flex p-4 flex-col justify-center text-center w-full h-svh items-center"
            }>
                <div>
                    <TitleLarge>
                        Спасибо!
                    </TitleLarge>
                    <Subtitle>
                        Мастер свяжется с вами в течении пары минут
                    </Subtitle>
                </div>
            </div>
        </>
    )
}