'use client'

import NavBar from "@/components/NavBar";
import MainSection from "@/components/sections/MainSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricesSection from "@/components/sections/PricesSection";
import SectionLayout from "@/app/SectionLayout";
import {PriceItemModel, TableItem} from "@/components/blocks/PriceItemModel";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FormSection from "@/app/FormSection";
import React, {useState} from "react";
import {ReviewsSection} from "@/components/sections/ReviewsSection";
import {ContactsSection} from "@/components/sections/ContactsSection";
import {CallMasterModalContent} from "@/components/blocks/Modals/CallMasterModalContent";
import {MainModalWindow} from "@/components/blocks/MainModalWindow";
import ServiceItemModel from "@/components/blocks/ServiceItemModel";
import {Footer} from "@/components/blocks/Footer";

export default function Home() {


    const prices: TableItem<PriceItemModel[]> = {
        head: ["Услуга", "Стоимость"],
        items: [
            {
                "title": "Установка и подсоединение декоративной панели",
                "amount": "от 780 ₽"
            },
            {
                "title": "Восстановление управляющей платы",
                "amount": "от 1500 ₽"
            },
            {
                "title": "Перевальцовка трассы фреоновой системы",
                "amount": "от 350 ₽"
            },
            {
                "title": "Чистка с применением особой мойки",
                "amount": "от 2100 ₽"
            },
            {
                "title": "Установка решетки от вандалов (без расходов на исходные материалы)",
                "amount": "от 2800 ₽"
            },
            {
                "title": "Проверка системы",
                "amount": "от 1500 ₽"
            },
            {
                "title": "Ремонт изоляции трассы подачи фреона",
                "amount": "от 350 ₽"
            },
            {
                "title": "Прокладка кабеля",
                "amount": "от 420 ₽"
            },
            {
                "title": "Создание вакуума холодильного контура",
                "amount": "от 1200 ₽"
            },
            {
                "title": "Замена междублочного кабеля (без затрат на материал)",
                "amount": "от 130 ₽"
            },
            {
                "title": "Замена электромоторчика вентилятора",
                "amount": "от 1730 ₽"
            },
            {
                "title": "Замена управляющей платы",
                "amount": "от 700 ₽"
            },
            {
                "title": "Замена температурного датчика",
                "amount": "от 600 ₽"
            },
            {
                "title": "Замена электромагнитного пускателя",
                "amount": "от 1560 ₽"
            }
        ]
    }

    return (
        <>
            <div className={"md:px-16 bg-gray-150"}>
                <header className={"sticky top-0 left-0 z-30"}
                >
                    <NavBar smoothScroll={true}
                    />
                </header>
                <div className={"py-4 px-4 lg:px-0"}>

                    <MainSection/>

                    <SectionLayout title={"Наши услуги"} id={"service"}>
                        <ServicesSection/>
                    </SectionLayout>
                    <SectionLayout title={"Цены"} id={"price"}>
                        <PricesSection items={prices}/>
                    </SectionLayout>
                    <SectionLayout title={"Наши работы"} id={"portfolio"}>
                        <PortfolioSection/>
                    </SectionLayout>
                    <SectionLayout className={"!mt-6"}>
                        <FormSection/>
                    </SectionLayout>
                    <SectionLayout
                        title={"Отзывы"}
                        id={"reviews"}>
                        <ReviewsSection/>
                    </SectionLayout>
                    <SectionLayout
                        title={"Контакты"}
                        id={"contacts"}
                    >
                        <ContactsSection/>
                    </SectionLayout>
                </div>
            </div>
            <Footer/>
        </>

    );
}
