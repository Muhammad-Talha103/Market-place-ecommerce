import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  image: string | StaticImageData;
  title?: string;
  price?: number;
  discount?: number;
  quantity: number;
}

interface InitialState {
  products: Product[];
}

const initialState: InitialState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
  },
});

export const { addToCart, deleteItem, increaseQuantity, decreaseQuantity } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
