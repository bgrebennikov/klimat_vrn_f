import {ReactNode} from "react";
import SectionTitle from "@/components/elements/SectionTitle";

interface SectionLayoutProps {
    className?: string;
    id?: string;
    title?: string,
    children?: ReactNode,
}

export default function SectionLayout(props: SectionLayoutProps) {
    return (
        <section className={` mt-10 ${props.className}`} id={props.id}>
            <SectionTitle>{props.title}</SectionTitle>
            {props.children}
        </section>
    )
}