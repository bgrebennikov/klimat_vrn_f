import Text from "@/components/elements/Text";
import {PortfolioItemModel} from "@/components/blocks/PortfolioItemModel";
import {PortfolioItem} from "@/components/blocks/PortfolioItem";
import {TitleLarge} from "@/components/elements/TitleLarge";
import {VideoPlayer} from "@/components/media/VideoPlayer";
import Link from "next/link";
import SubtitleSmall from "@/components/elements/SubtitleSmall";
import TelegramIcon from "@/components/icons/TelegramIcon";
import React from "react";
import {WhatsAppIcon} from "@/components/icons/WhatsAppIcon";
import TitleSmall from "@/components/elements/TitleSmall";


export default function PortfolioSection() {

    const portfolioItems: PortfolioItemModel[] = [
        {
            imageUrl: 'images/portfolio/portfolio1.png',
            title: 'Плановое обслуживание кондиционера в студии танцев',
            body: 'Обслуживание желательно производить ежегодно, так как внутри кондиционера влажная среда, что способствует образованию грибка, после вы им дышите. Чистку внутреннего блока проведи с использованием противогрибковой химии, антисептика, чтобы ликвидировать очаг грибка.'
        },
        {
            imageUrl: 'images/portfolio/portfolio2.jpg',
            title: 'Чистка и заправка сплит - системы',
            body: 'Заправка кондиционера фреоном - одна их самых важных процедур, которая влияет на надежность, долговечность и хорошую работу при использовании.'
        },
        {
            imageUrl: 'images/portfolio/portfolio3.jpg',
            title: 'Ремонт внутреннего блока',
            body: 'Был выполнен ремонт платы управления внутренним блоком'
        },

    ]

    return (
        <>
            <Text
                className={"font-manrope my-4"}
            >
                Довольные клиенты - Это визитная карточка нашей компании. <br/>
                В этом разделе мы публикуем лишь небольшую часть выполненных работ.
            </Text>

            <div className={`flex flex-col lg:flex-row gap-4`}>
                <div className={"flex flex-col w-full gap-4"}>
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem item={item} key={index}/>
                    ))}
                </div>
                <div className={"w-full bg-white rounded-2xl p-4"}>
                    <TitleLarge>
                        Работаем без посредников
                    </TitleLarge>
                    <Text>
                        Вы можете напрямую связаться с мастерами
                        по телефону и в мессенджерах
                    </Text>

                    <VideoPlayer src={"video/master.mp4"}
                                 className={"mt-4"}
                    />

                    <TitleSmall className={"mt-2"}>
                        Контакты мастера
                    </TitleSmall>

                    <div className={"mt-2 flex flex-wrap gap-2 justify-between"}>
                        <div className={" border border-gray-200 p-4 rounded-2xl w-full md:w-fit grow"}>
                            <SubtitleSmall>Телефон</SubtitleSmall>
                            <div className={"flex items-center gap-4 mt-2"}>
                                <WhatsAppIcon id={'phone-icon'}/>
                                <Link
                                    className={"text-xl font-gilroy-bold"}
                                    href={"tel://+79092145728"}>7 909 214 57 28</Link>
                            </div>
                        </div>

                        <div className={" border border-gray-200 p-4 rounded-2xl w-full sm:w-fit grow"}>
                            <SubtitleSmall>WhatsApp</SubtitleSmall>
                            <div className={"flex items-center gap-4 mt-2"}>
                                <WhatsAppIcon id={"whatsapp-icon"}/>
                                <Link
                                    className={"text-xl font-gilroy-bold"}
                                    href={"https://wa.me/+79092145728"}>7 909 214 57 28</Link>
                            </div>
                        </div>

                        <div className={" border border-gray-200 p-4 rounded-2xl w-full sm:w-fit grow"}>
                            <SubtitleSmall>Telegram</SubtitleSmall>
                            <div className={"flex items-center gap-4 mt-2"}>
                                <TelegramIcon id={'tg-icon'}/>
                                <Link
                                    className={"text-xl font-gilroy-bold"}
                                    href={"https://t.me/+79092145728"}>@79092145728</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}