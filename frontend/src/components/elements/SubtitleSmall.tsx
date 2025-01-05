import {ReactNode} from "react";


const SubtitleSmall = (props: {children?: ReactNode, className?: string}) => {
    return(
        <p className={`${props.className} font-manrope-bold text-sm`}>
            {props.children}
        </p>
    )
};

export default SubtitleSmall;