export interface PriceItemModel {
    title: string,
    amount: string,
}

export interface TableItem<T>{
    head: string[];
    items: T;
}