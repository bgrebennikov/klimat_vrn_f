'use client'
import {ReactNode} from "react";
import {store} from "@/libs/store/store";
import {Provider} from "react-redux";
import ModalWindowProvider from "@/components/providers/ModalWindowProvider";


export default function Providers({children}: { children: Readonly<ReactNode> }) {


    return (
        <>
            <Provider store={store}>
                <ModalWindowProvider>
                    {children}
                </ModalWindowProvider>
            </Provider>
        </>
    )
}