import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./productSlice";  
import wishListReducer from './wishlistSlice'
import singleProduct from './singleProduct'

export const store = configureStore({
  reducer: {
    products: productReducer, 
    wishList: wishListReducer,
    singleProduct : singleProduct
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch