import { StaticImageData } from "next/image";
export interface ProductsTypes {
    id: number;
    title: string;
    price: number | undefined;
    price1?: string; // Optional
    image:string | StaticImageData;
    quantity: number;
    newPrice?: number; // Optional for the single product
  }
  