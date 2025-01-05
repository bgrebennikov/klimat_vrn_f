interface ServiceItemModel {
    title: string;
    subtitle?: string;
    body: string;
    imageUrl: string;
    price?: string;
    onClick?: () => void;
}

export default ServiceItemModel;