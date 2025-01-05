import IconButton from "@/components/buttons/IconButton";
import {CloseIcon} from "@/components/icons/CloseIcon";
import {ReactNode, useEffect, useRef, useState} from "react";
import {useAppDispatch} from "@/libs/store/hooks";
import {hideModal} from "@/libs/store/features/modalWindowSlice";

export interface MainModalWindowProps {
    children?: ReactNode;
    visibleState?: boolean;
    onClose?: () => void;
}


export const MainModalWindow = (props: MainModalWindowProps) => {

    const modalRef = useRef<HTMLDivElement>(null);
    const modalWrapperRef = useRef<HTMLDivElement>(null);
    const modalOverlayRef = useRef<HTMLDivElement>(null);
    const [closeIconFill, setCloseIconFill] = useState<any>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        toggleModal(props.visibleState)

        if (props.visibleState) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };

    }, [props.visibleState]);

    function toggleModal(visible: boolean | undefined) {
        if (!visible) {
            modalRef.current?.classList.replace("modal-visible", "modal-hidden");
            modalOverlayRef.current?.classList.replace("overlay-visible", "overlay-hidden");

        } else {
            modalRef.current?.classList.replace("modal-hidden", "modal-visible");
            modalOverlayRef.current?.classList.replace("overlay-hidden", "overlay-visible");

            modalWrapperRef.current?.style.setProperty("display", "block");
            setCloseIconFill(closeIconFill)
        }
    }

    function handleClose() {
        dispatch(hideModal({modal_key: 'callMasterMw'}))
    }

    function onCloseAnimEnd(e: any) {
        if (!props.visibleState && e?.nativeEvent?.animationName === "animate-modal-close") {
            modalWrapperRef.current?.style.setProperty("display", "none");
        } else {
            modalWrapperRef.current?.style.setProperty("display", "block");
        }
    }

    return (
        <div className={"modal-wrapper"} style={{display: "none"}}
             ref={modalWrapperRef}
        >
            <div
                onAnimationEnd={onCloseAnimEnd}
                ref={modalRef}
                className={`bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        z-40 min-w-96 w-full h-full sm:h-fit md:w-10/12 md:max-h-fit lg:w-7/12 
                        sm:rounded-2xl min-h-96 modal-hidden
                        overflow-hidden
            `}>

                <IconButton
                    className={"absolute right-0 top-0 mt-5"}
                    icon={<CloseIcon/>}
                    onClick={handleClose}
                />

                <div className={"h-full"}>
                    {props.children}
                </div>

            </div>

            <div
                ref={modalOverlayRef}
                onClick={handleClose}
                className={
                    `overlay-visible fixed bg-gray-600 bg-opacity-30 backdrop-blur-sm h-full w-full top-0 left-0 z-30
                `
                }></div>
        </div>
    )
}