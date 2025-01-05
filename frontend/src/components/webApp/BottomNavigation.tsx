'use client'

import {ReactNode, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import WebApp from "@twa-dev/sdk";

export interface NavItem {
    path: string,
    title: string,
    icon?: ReactNode
}

interface BottomNavProps {
    className?: string,
    items: NavItem[],
    onSelect?: (item: NavItem) => void
}

export function BottomNavigation(props: BottomNavProps){

    const router = useRouter();

    function handleClick(e: any, item: NavItem) {
        e.preventDefault();
        router.push(`/webApp/${item.path}`)
    }

    return (
        <>
            <ul id={"bottom_nav"} className={`${props.className} flex gap-4 justify-between text-sm items-center p-4
             bg-gray-200 dark:bg-gray-950 dark:text-white rounded-tl-2xl rounded-tr-2xl`}>
                {props.items.map((item, index) => (
                    <li key={index} className={"w-full"}>
                        <a href={item.path} onClick={(e: any) => handleClick(e, item)}
                           className={"flex flex-col items-center"}>
                            {item.icon}
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}