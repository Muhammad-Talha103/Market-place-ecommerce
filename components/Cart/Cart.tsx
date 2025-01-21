"use client";
import Container from "@/shared/Container";
import CartPart1 from "./CartPart1";
import CartPart2 from "./CartPart2";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Josefin_Sans } from "next/font/google";


const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const Cart = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <>
      {products.length > 0 ? (
        <Container className="py-16 flex flex-col lgl:flex-row justify-between">
          <CartPart1 />
          <CartPart2 />
        </Container>
      ) : (
        <p className={`${josefinFont.className} py-20 text-[25px] text-[#1D3178] flex items-center justify-center text-center`}>Your cart is empty. Add some products!</p> 
      )}
    </>
  );
};

export default Cart;
