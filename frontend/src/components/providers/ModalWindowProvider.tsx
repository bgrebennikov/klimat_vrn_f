'use client'


import {ReactNode} from "react";
import {MainModalWindow} from "@/components/blocks/MainModalWindow";
import {CallMasterModalContent} from "@/components/blocks/Modals/CallMasterModalContent";
import {useAppSelector} from "@/libs/store/hooks";

export default function ModalWindowProvider(
    {children}: { children: Readonly<ReactNode> }
) {

    const windows = useAppSelector(state => state.modalWindow)


    return (
        <>
            {children}
            <MainModalWindow
                visibleState={windows.callMasterMw.opened}
            >
                <CallMasterModalContent/>
            </MainModalWindow>
        </>
    )
}