import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface ProductsTypes {
  id: number;
  name: string;
  oldPrice?: number;
  newPrice?: number;
  description?: string;
  category?:string;
  image: string | StaticImageData;
  rated?: string;
  stock: number;
}

interface InitialState {
  Product: ProductsTypes[];
}

const initialState: InitialState = {
  Product: [],
};

export const Products = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addToSingleProduct: (state, action: PayloadAction<ProductsTypes>) => {
      if (state.Product.length > 0) {
        state.Product = [];
      }

      state.Product.push({ ...action.payload, stock: 1 });
    },
  },
});

export const { addToSingleProduct } = Products.actions;
export default Products.reducer;
