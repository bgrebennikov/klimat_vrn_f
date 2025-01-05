import TitleSmall from "@/components/elements/TitleSmall";
import IconButton from "@/components/buttons/IconButton";
import {CloseIcon} from "@/components/icons/CloseIcon";
import {ReactNode} from "react";

interface ModalTitleProps {
    children?: ReactNode;
    onClose?: () => void;
}

export const ModalTitle = (props: ModalTitleProps) => {
    return (
        <div
            className={`border-b-2 border-gray-150 pb-2 flex items-center justify-between`}
        >
            <TitleSmall>{props.children}</TitleSmall>
            <IconButton
                icon={<CloseIcon/>}
                onClick={props.onClose}
            />
        </div>
    )
}