'use client'

import TelegramIcon from "@/components/icons/TelegramIcon";
import IconButton from "@/components/buttons/IconButton";
import PhoneIcon from "@/components/icons/PhoneIcon";
import BurgerMenuIcon from "@/components/icons/BurgerMenuIcon";
import React, {useEffect, useRef, useState} from "react";
import MobileNav from "@/components/MobileNav";
import ClickableIcon from "@/components/buttons/ClickableIcon";
import {WhatsAppIcon} from "@/components/icons/WhatsAppIcon";
import {useRouter} from "next/navigation";

interface NavBarProps {
    smoothScroll?: boolean,
    activeClass?: string
}

export default function NavBar(props: NavBarProps) {

    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);
    const menuItems = [
        {
            title: "Главная",
            href: "#main"
        },
        {
            title: "Услуги",
            href: "#service"
        },
        {
            title: "Цены",
            href: "#price"
        },
        {
            title: "Наши работы",
            href: "#portfolio"
        },
        {
            title: "Отзывы",
            href: "#reviews"
        },
        {
            title: "Контакты",
            href: "#contacts"
        },


    ]

    const router = useRouter();

    function handleMobileMenuClick() {
        setMenuOpen((prevState) => !prevState);
    }

    function handleNavItemClick(e: any) {
        e.preventDefault();
        const hash = e.currentTarget.hash;
        scrollToElement(hash)
    }

    const scrollToElement = (hash: string, offset?: number) => {
        const element = document.getElementById(hash?.replace("#", ""));

        if (!element) return;
        const defaultOffset = offset ?? navbarRef?.current?.offsetHeight ?? 0;

        window.scrollTo(
            {
                top: element.offsetTop - defaultOffset,
                behavior: "smooth",
            }
        );
    };


    useEffect(() => {

        if (!props.smoothScroll) return;
        const {hash} = window.location;

        scrollToElement(hash);

        window.addEventListener("hashchange", (e: any) => {
            scrollToElement(e.currentTarget.hash);
        });

        return () => window.removeEventListener("hashchange", (e: any) => {
            scrollToElement(e.currentTarget.hash)
        });

    }, [props.smoothScroll])


    return (
        <>
            <nav className={"w-full bg-gray-150"} ref={navbarRef}>

                <div className="p-4 lg:px-0 flex items-center justify-between">
                    <div className="text-2xl lg:text-2xl">
                        KlimatVRN
                    </div>
                    <ul
                        className={
                            "flex-nowrap gap-12 font-medium hidden lg:flex"
                        }>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    className={
                                        item.href === `#${props.activeClass}` ?
                                        "text-green-600" : ""
                                    }
                                    href={item.href}
                                    onClick={handleNavItemClick}
                                >{item.title}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="items-center gap-5 lg:flex hidden">
                        <ClickableIcon icon={<WhatsAppIcon/>} onClick={
                            () => {
                                router.push("https://wa.me/+79092145728")
                            }
                        }/>
                        <ClickableIcon icon={<TelegramIcon/>}
                        onClick={() => {
                            router.push("https://t.me/+79092145728")
                        }}
                        />
                        <IconButton
                            className={"bg-green-600"}
                            text={"+7 (909)-214-57-28"}
                            icon={
                                <PhoneIcon/>
                            }
                            onClick={
                                () => {
                                    router.push("tel://+79092145728")
                                }
                            }
                        />
                    </div>


                    <div className={"lg:hidden"}>
                        <IconButton
                            icon={<BurgerMenuIcon/>}
                            onClick={handleMobileMenuClick}
                        />
                    </div>
                </div>

                <MobileNav
                    isOpen={menuOpen}
                    onNavItemClick={(e: any) => {
                        e.preventDefault();
                        setMenuOpen(prevState => !prevState);
                        handleNavItemClick(e)
                    }}
                />

            </nav>

        </>
    )

}