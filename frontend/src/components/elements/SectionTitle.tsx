import {ReactNode} from "react";

const SectionTitle = (props: {className?: string, children?: ReactNode }) => {
    return (
        <h1
            className={`text-4xl sm:text-5xl font-gilroy-bold ${props.className}`}
        >{props.children}</h1>
    )
};

export default SectionTitle;