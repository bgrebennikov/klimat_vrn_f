import {ReactNode} from "react";


const TitleSmall = (props: {children?: ReactNode, className?: string}) => {
    return(
        <p className={`font-manrope-bold text-xl ${props.className}`}>
            {props.children}
        </p>
    )
};

export default TitleSmall;