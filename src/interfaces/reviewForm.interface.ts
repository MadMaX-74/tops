import {string} from "prop-types";

export interface ReviewFormInterface {
    name: string;
    title: string;
    description: string;
    rating: number;
}
export interface ReviewSentResponse {
    message: string;
}
