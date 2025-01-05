import {StarsRating} from "@/components/blocks/StarsRating";
import Subtitle from "@/components/elements/Subtitle";
import SubtitleSmall from "@/components/elements/SubtitleSmall";
import Text from "@/components/elements/Text";
import {TitleLarge} from "@/components/elements/TitleLarge";
import {useState} from "react";
import SimpleButton from "@/components/buttons/SimpleButton";

interface ReviewItem {
    photo_url?: string;
    name: string,
    rating: number,
    body: string
}


export const ReviewsSection = () => {

    const [formRating, setFormRating] = useState(5);

    function handleRatingSelect(value: number){
        setFormRating(value);
    }

    const reviewsList: ReviewItem[] = [
        {
            photo_url: "https://sun7-20.userapi.com/s/v1/ig2/hPzER-N8LO9Nue8ScxhFBEOFa4yct-ijiSC5iSUW3WBb-e7stLcfmEsRV3t8nSzRBbj05J7keK9Pi-8tu5WYVAi1.jpg?size=50x50&quality=95&crop=0,0,2560,2560&ava=1",
            name: "Юлия Босова",
            rating: 5,
            body: "Ребят, большое спасибо, за проделанную Вами работу Оказали услугу на высшем уровне, по очень хорошей цене. Однозначно обратимся ещё к Вам"
        },
        {
            photo_url: "https://sun7-19.userapi.com/s/v1/ig2/AdnakUp3dXRhfDWKXFMFuyqEdaBuPqrOuypu-mozwe9XS78vIvi2xtGzjSK4nw949UARlHLpF02evxmTisVQ2e0a.jpg?size=50x50&quality=95&crop=0,199,792,792&ava=1",
            name: "Евгений Лукинов",
            rating: 5,
            body: "Работают быстро и качественно, результатом остался доволен))) рекомендую"
        },
        {
            photo_url: "https://sun7-20.userapi.com/s/v1/ig2/3NLgApuFOTskUQG1w9vsF1P8vMkb2XBwy5EWO0tDd87Ye2PEkx3ylDi-c8IIE2GUtpJxwFNnI4o7ch3L6Cx_d3fX.jpg?size=50x50&quality=95&crop=1,108,827,827&ava=1",
            name: "Максим Сыров",
            rating: 5,
            body: "Отличная работа, парни делают все быстро и качественно. Оказанными услугами остался более чем доволен. Однозначно рекомендую."
        },
        {
            photo_url: "https://sun7-19.userapi.com/s/v1/ig2/RnNXfDDduIc9RuEWyCbhquzfyJYKBxf2nVHLjgQm2KZgHM5wSZ4v-Fw7jsR4iB_UvVzsJ9WR68BBSYuXCNyr7LIZ.jpg?size=50x50&quality=95&crop=3,0,1276,1276&ava=1",
            name: "Мария Кухтерина",
            rating: 5,
            body: "Очень ответственный исполнитель! Договорились с Владимиром об оказании услуги по очистке кондиционера на недавно арендованной квартире. Кондиционер был в запущенном состоянии, в нём была уже не то что пыль, а махровый ковёр, даже заслонка от грязи не открывалась. Владимир очень качественно произвёл очистку, вымыл все детали, при этом работу произвёл аккуратно, кровать и ковролин никак не пострадали 👍 однозначно рекомендую. В целом очень вежливый и приятный парень. Изначально оговорённая стоимость после работы не изменилась, как и было обещано объявлении."
        },
    ]

    return (
        <>
            <div className={
                "flex flex-col md:flex-row shrink gap-4 justify-between mt-4"
            }>
                <div
                    className="flex flex-col gap-4 bg-white rounded-2xl w-full sm:overflow-y-scroll sm:max-h-vh-80 no-scrollbar">
                    {reviewsList.map((item, index) => (
                        <div className="flex p-4 gap-4" key={index}>
                            <div>
                                <img
                                    className={"rounded-full max-w-14"}
                                    src={item.photo_url} alt={item.name}/>
                            </div>
                            <div>
                                <SubtitleSmall>{item.name}</SubtitleSmall>
                                <StarsRating
                                    className={"my-2"}
                                    rating={item.rating}
                                    interactive={false}/>
                                <Text>{item.body}</Text>
                            </div>
                        </div>
                    ))}

                    <div>
                        <a href="https://vk.com/topic-221131227_49431748" target={"_blank"}
                           className={`block bg-green-600 text-white w-fit mx-auto px-6 py-4 rounded-2xl mb-4`}
                        >
                            Смотреть все отзывы
                        </a>
                    </div>
                </div>
                <div className={"rounded-2xl bg-white p-4 w-full"}>
                    <TitleLarge>
                        Вы можете оставить о нас свой отзыв
                    </TitleLarge>
                    <form className={"mt-4"}>
                        <SubtitleSmall>Оценка работы мастера</SubtitleSmall>
                        <StarsRating className={"mt-2"} rating={formRating} interactive={true}
                                     onSelect={handleRatingSelect}
                        />

                        <div className={"flex flex-col md:flex-row justify-between gap-4"}>
                            <div className={"mt-4 w-full"}>
                                <SubtitleSmall>Как вас зовут</SubtitleSmall>
                                <input type="text" name="customer_name" id="review_customer_name"
                                       placeholder={"Ваше имя"}
                                       className={"p-3 bg-gray-150 rounded-2xl mt-2 w-full"}
                                />
                            </div>

                            <div className={"mt-4 w-full"}>
                                <SubtitleSmall>Номер телефона</SubtitleSmall>
                                <input type="number" name="customer_phone" id="review_customer_phone"
                                       placeholder={"Номер телефона"}
                                       className={"p-3 bg-gray-150 rounded-2xl mt-2 w-full"}
                                />
                            </div>

                        </div>

                        <div className={"mt-4"}>
                            <SubtitleSmall>Ваш отзыв</SubtitleSmall>
                            <textarea aria-multiline={true}
                                      placeholder={"Что вы о нас думайте..."}
                                      className={"w-full h-full min-h-52 bg-gray-150 mt-2 p-3 rounded-2xl resize-none"}
                            >

                            </textarea>
                            <SimpleButton className={`mt-2 w-full sm:w-fit`} text={"Отправить отзыв"}/>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}