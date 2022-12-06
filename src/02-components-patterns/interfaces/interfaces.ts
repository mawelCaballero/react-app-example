import { ReactElement } from 'react';



export interface ProductCardProps {
    id: number;
    name: string;
    img?: string;
    description: string;
    price: number;
}

export interface ProductButtonsProps {
    count: number;
    increaseBy: (value: number) => void;
}


export interface ProductContextProps {
    count: number;  
    increaseBy: (value: number) => void;
    product: ProductCardProps;
}
