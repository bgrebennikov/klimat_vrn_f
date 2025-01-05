import {ReactNode} from "react";

export const TitleLarge = (props: {
    children?: ReactNode;
    className?: string;
}) => {
    return(
        <h1 className={`text-4xl font-gilroy-bold ${props.className}`}>
            {props.children}
        </h1>
    )
};