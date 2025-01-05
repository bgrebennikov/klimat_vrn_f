import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import React from "react";
import {BottomNavigation, NavItem} from "@/components/webApp/BottomNavigation";
import {StarIcon} from "@/components/icons/StarIcon";
import WebAppWrapper from "@/app/webApp/WebAppWrapper";

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
    title: "WebApp"
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}


export default function WebAppLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {

    const navItems: NavItem[] = [
        {
            title: "Главная",
            path: "/",
            icon: <StarIcon/>
        }
        ,
        {
            title: "Каналы",
            path: "/channels",
            icon: <StarIcon/>
        },
        {
            title: "Пользователи",
            path: "/users",
            icon: <StarIcon/>
        }
    ]

    return (
        <>
            <WebAppWrapper>
                {children}
            </WebAppWrapper>
            <BottomNavigation
                className={"fixed bottom-0 left-0 w-full"}
                items={navItems}
            />
        </>
    );
}
