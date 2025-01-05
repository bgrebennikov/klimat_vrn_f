import {configureStore} from "@reduxjs/toolkit";
import {modalWindowSlice} from "@/libs/store/features/modalWindowSlice";
import {backendApi} from "@/libs/store/api/backendApi";


export const store = configureStore({
    reducer: {
        modalWindow: modalWindowSlice.reducer,

        [backendApi.reducerPath]: backendApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            backendApi.middleware
        )
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;