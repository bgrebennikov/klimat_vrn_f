import {ReactNode} from "react";


const Text = (props: {children?: ReactNode, className?: string}) => {
    return(
        <p
            className={`${props.className} text-sm font-manrope-medium`}
        >{props.children}</p>
    )
};

export default Text;