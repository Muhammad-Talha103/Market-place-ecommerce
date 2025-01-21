import { StaticImageData } from "next/image";

interface GridItemsProps {
  tittle: string;
  id: number;
  text?: string;
  image?: StaticImageData;
  price?: number;
  price1?: string;
}
export default GridItemsProps;
