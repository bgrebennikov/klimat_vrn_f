import {BaseQueryArg, createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFeedbackRequest} from "@/libs/store/api/feedback/IFeedbackRequest";


export const backendApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://remont-split-vrn.ru/api',
        prepareHeaders: (headers) => {
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            return headers;
        }
    }),
    endpoints: (build) => ({
        sendFeedback: build.mutation<void, IFeedbackRequest>(
            {
                query: (body: IFeedbackRequest) => ({
                    url: '/feedback',
                    method: 'POST',
                    body
                })
            }
        )
    })
});


export const {
    useSendFeedbackMutation
} = backendApi;