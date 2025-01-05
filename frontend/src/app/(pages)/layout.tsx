import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import '../globalHome.css';
import React, {Suspense} from "react";
import {MetrikaCounter} from "@/components/yandex/MetrikaCounter";
import Providers from "@/components/providers/Providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Ремонт кондиционеров в Воронеже",
    description: "Ремонт, чистка и заправка кондиционеров от 990 рублей в Воронеже и области",
    keywords: ["ремонт", "чистка","кондиционер", "сплит система", "обслуживание", "монтаж", "сервисное обслуживание",
    "мастер", "чистка", "заправка", "установка", "диагностика"]
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        {/*<Suspense>*/}
        {/*    <MetrikaCounter/>*/}
        {/*</Suspense>*/}
        </body>
        </html>
    );
}
