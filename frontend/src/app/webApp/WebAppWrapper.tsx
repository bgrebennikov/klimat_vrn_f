'use client'

import {ReactNode, useEffect, useState} from "react";

interface WebAppWrapperProps {
    children: ReactNode
}

export default function WebAppWrapper(props: WebAppWrapperProps) {

    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const h = document.getElementById("bottom_nav")?.clientHeight;
        setNavHeight(h ?? 0)
    }, [])

    return (
        <>
            <div className={"dark:text-white"}
                 style={
                     {
                         paddingBottom: navHeight
                     }
                 }
            >
                {props.children}
            </div>
        </>
    )
}