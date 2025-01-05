'use client'
import {useRouter} from "next/router";

interface IconButtonProps {
    className?: string,
    text?: string,
    icon?: any,
    onClick?: (e?: any) => void,
    to?: string,
    isLoading?: boolean
}

export default function IconButton(
    props: IconButtonProps
) {

    function handleClick(e?: any) {

        if (props.text?.startsWith('+7')) {
            window.open(
                `tel://${props.text?.replace(/\s/g, "")}`,
                '_self'
            )
        }
    }

    return (
        <button
            onClick={props.onClick ?? handleClick}
            className={`flex text-sm sm:text-lg py-3 rounded-full text-white lg:px-4 items-center gap-2 
            ${props.className}`
            }>
            <div className="btn_icon w-8 lg:w-fit">
                {props.isLoading ? 'Loading' :props.icon}
            </div>
            <div>
                {props.text}
            </div>
        </button>
    )
}