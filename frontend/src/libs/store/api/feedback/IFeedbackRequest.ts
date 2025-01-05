export interface IFeedbackRequest {
    phone: string;
    category: string;
    name?: string;
    source_url?: string;
    section_name?: string
}