import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModalWindowState} from "@/libs/store/features/IModalWindowState";



export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState: {
        callMasterMw: {
            opened: false
        }
    } as IModalWindowState,
    reducers: {

        showModal: (state, {payload: {modal_key}}: PayloadAction<{modal_key: keyof IModalWindowState}>) => {
            state[modal_key].opened = true;
        },

        hideModal: (state, {payload: {modal_key}}: PayloadAction<{modal_key: keyof IModalWindowState}>) => {
            state[modal_key].opened = false;
        }

    }
})


export const {showModal, hideModal} = modalWindowSlice.actions;
export default modalWindowSlice.reducer;