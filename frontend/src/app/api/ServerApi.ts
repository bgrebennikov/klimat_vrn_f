import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";

const client = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL: 'https://remont-split-vrn.ru/api',
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
    transformResponse: [
        (data) => {
            return JSON.parse(data);
        },
    ],
});


export interface FeedbackParams {
    phone_number: string;
    category: string;
    name?: string;
    note?: string;
    source?: string;
    url?: string;

}

export const useFeedback = () => {

    const router = useRouter();

    const [formError, setFormError] = useState<string|null>();




    return {
        formError: formError
    }
}