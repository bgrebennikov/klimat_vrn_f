'use client'

import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";
import {WebAppUser} from "@twa-dev/types";

export default function WebAppPage() {

    const [user, setUser] = useState<WebAppUser>()


    useEffect(() => {
        WebApp.ready();
        document.body.className = WebApp.colorScheme ?? ""
        setUser(WebApp.initDataUnsafe.user)
        WebApp.expand();

    }, [])

    return (
        <>
            <div className={`
                p-4 text-black dark:text-white relative
            `}>

                <h1 className={"text-2xl font-gilroy-bold"}>Привет {user?.first_name}!</h1>
                <p className={"font-gilroy-bold"}>
                    В этом разделе ты можешь добавить каналы уведомлений, или администраторов бота.
                </p>

                <div className={"flex flex-wrap items-start justify-between"}>
                    <button className={"p-4 mt-4 rounded-2xl bg-blue-500 text-white"}>Добавить канал</button>
                    <button className={"p-4 mt-4 rounded-2xl bg-blue-500 text-white"}>Добавить админа</button>
                </div>

            </div>
        </>
    )
}