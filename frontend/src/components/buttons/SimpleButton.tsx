'use client'

import {SpinnerIcon} from "@/components/icons/SpinnerIcon";

interface SimpleButtonProps {
    text: string,
    className?: string,
    onClick?: (e?: any) => void;
    isLoading?: boolean
}

export enum ButtonState {
    DEFAULT, LOADING, DONE, FAILED
}

function SimpleButton(props: SimpleButtonProps) {


    const handleClick = (e: any) => {
        e.preventDefault();
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button
            onClick={handleClick}
            disabled={props.isLoading}
            className={
                `px-4 py-3 bg-green-600 text-white rounded-full flex items-center justify-center ${props.className}`
            }>

            {props.isLoading &&
                <div>
                    <SpinnerIcon/>
                </div>
            }
            <div>
                {props.text}
            </div>
        </button>
    )
}


export default SimpleButton;