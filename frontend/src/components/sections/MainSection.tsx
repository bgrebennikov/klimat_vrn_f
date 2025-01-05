import Features from "@/components/blocks/Features";
import SmallForm from "@/components/forms/SmallForm";
import ToolsIcon from "@/components/icons/ToolsIcon";
import Slider from "@/components/slider/Slider";
import IconButton from "@/components/buttons/IconButton";
import PhoneIcon from "@/components/icons/PhoneIcon";
import Subtitle from "@/components/elements/Subtitle";
import React from "react";
import {useAppDispatch} from "@/libs/store/hooks";
import {showModal} from "@/libs/store/features/modalWindowSlice";

export default function MainSection() {

    const sliderItems: SliderItem[] = [
        {
            image: '/images/portfolio/portfolio1.png',
            top_text: 'Стоимость: 4 600₽',
            title: 'Ремонт внутреннего блока',
            subtitle: 'Был выполнен ремонт платы управления внутренним блоком\n' +
                'Стоимость оказанной услуги с учетом модульщика - 4 600₽',
            button: <IconButton
                icon={<PhoneIcon/>}
                text={"Вызвать мастера"}
            />
        },
        {
            image: '/images/slide2.jpg',
            top_text: 'Стоимость: 4 300₽',
            title: 'Обслуживание фанкойла',
            subtitle: 'Было выполнено обслуживание фанкойла (с полным разбором). Выполнили диагностику, полную чистку, ',
            button: <IconButton
                icon={<PhoneIcon/>}
                text={"Вызвать мастера"}
            />
        },
        {
            image: '/images/slide3.jpg',
            top_text: 'Стоимость: 6 000₽',
            title: 'Установка сплит-системы',
            subtitle: 'Установка сплит-системы под ключ, без вреда для ремонта',
            button: <IconButton
                icon={<PhoneIcon/>}
                text={"Вызвать мастера"}
            />
        }
    ]


    const dispatch = useAppDispatch()

    return (
        <section className={"bg-gray-150"} id={"main"}>
            <div className={"flex flex-col lg:flex-row "}>
                <div className={"flex-1"}>
                    <h1 className={"text-4xl sm:text-5xl font-gilroy-bold xl:max-w-3xl"}>
                        Ремонт и обслуживание
                        Кондиционеров в Воронеже
                    </h1>
                    <h2 className={"font-gilroy-bold text-4xl sm:text-5xl text-green-500 my-6"}>
                        с гарантией до 2-х лет
                    </h2>

                    <Subtitle>
                        Бесплатный выезд по Воронежу и области от 30 мин
                    </Subtitle>

                    <Features
                        className={"my-8"}
                        titles={
                            [
                                'Бесплатно приедем \n и выявим причину поломки',
                                'Оплата только\n после ремонта',
                                'Даем гарантию\n до 2-х лет'
                            ]
                        }
                    />

                    <div className={"w-full lg:hidden"}>
                        <a
                            className={`p-4 bg-green-600 text-white rounded-2xl text-center
                             flex justify-center items-center gap-4 font-manrope-medium mb-4
                            `}
                            href={"tel://79092145728"}>
                            <span><PhoneIcon/></span>
                            <span>+7 (909)-214-57-28</span>
                        </a>
                    </div>

                    <SmallForm
                        className={"sm:mt-16 xl:max-w-3xl"}
                        icon={<ToolsIcon/>}
                        title={"Расчитаем стоимость ремонта"}
                        description={"Оставьте свой телефон и мастер бесплатно\n проконсультирует Вас по стоимости ремонта"}
                        placeholder={"+7 999 999 99 99"}
                        btnText={"Расчитать стоимость"}
                    />

                </div>


                <div className={"flex-1 lg:ms-4 xl:max-w-3xl"}>
                    <Slider items={sliderItems} button={
                        <IconButton
                            className={"bg-green-600 px-4"}
                            icon={<PhoneIcon/>}
                            text={"Вызвать мастера"}
                            onClick={() => {
                                dispatch(showModal({modal_key: 'callMasterMw'}))
                            }}
                        />
                    }/>
                </div>
            </div>

        </section>
    )
}