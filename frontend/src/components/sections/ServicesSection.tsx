import ServiceItem from "@/components/blocks/ServiceItem";
import ServiceItemModel from "@/components/blocks/ServiceItemModel";
import React from "react";


export default function ServicesSection() {

    const serviceItems: ServiceItemModel[] = [
        {
            title: "Ремонт кондиционера",
            subtitle: "Ремонт внутреннего и внешнего блока",
            body: "Не включается\n" +
                "Не охлаждает\n" +
                "Неприятный запах\n" +
                "Посторонние звуки\n" +
                "Наросты льда\n" +
                "Ремонт любой сложности",
            imageUrl: "/images/service/service_repair.png",
            price: "От 2500₽"
        },
        {
            title: "Установка кондиционера",
            subtitle: "Базовый монтаж",
            body: "Установка внутреннего блока\n" +
                "Установка внешнего блока\n" +
                "Прокладка фреоновых коммуникаций\n" +
                "Прокладка дренажа (гофрированный шланг)",
            imageUrl: "/images/service/service_install.png",
            price: "От 4 900₽"
        },
        {
            title: "Чистка и обслуживание",
            subtitle: "Профилактическое обслуживание кондиционера",
            body: "Диагностика оборудования\n" +
                "Чистка кондиционера  (теплообменников, вентиляторов, фильтров)\n" +
                "Проверка рабочего давления хладагента (фреона)\n" +
                "Чистка испарителя.",
            imageUrl: "/images/service/service_cleaning.png",
            price: "От 2500₽"
        },
        {
            title: "Заправка кондиционера",
            subtitle: "Заправка кондиционера фреоном",
            body: "Поиск и устранение утечки фреона\n" +
                "Заправка кондиционера фреоном",
            imageUrl: "/images/service/service_refill.png",
            price: "От 990₽"
        }
    ]

    return (

        <div className={`flex flex-col sm:flex-row my-6 gap-6 flex-wrap
                        lg:justify-between
            `}>
            {serviceItems.map((item, index) => {
                return (
                    <ServiceItem item={item} key={index}/>
                )
            })}
        </div>
    )
}