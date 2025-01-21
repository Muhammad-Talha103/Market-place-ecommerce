import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Josefin_Sans, Lato } from "next/font/google";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const CartPart2 = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      const totalAmount = products.reduce((acc, item) => {
        const price = (item.price as number) || 0;
        return acc + price * item.quantity;
      }, 0);
      setTotal(totalAmount);
    }, [products]);
  return (
    <div className="flex items-center justify-center py-10 lgl:py-0">
      <div className=" w-full px-4 lg:px-0 ssm:w-[350px] h-[675px] flex flex-col justify-between  ">
        <h2
          className={`${josefinFont.className} text-[20px] text-[#1D3178] text-center`}
        >
          Cart Totals
        </h2>
        <div className="flex flex-col h-[284px] bg-[#F4F4FC] justify-center items-center">
          <div className="w-[300px] h-full justify-between flex flex-col py-4">
            <div className="flex justify-between px-2 py-3 border-b  border-b-[#E8E6F1]">
              <h2
                className={`${lato.className} font-semibold text-[18px] text-[#1D3178] `}
              >
                Subtotals:
              </h2>
              <p
                className={`${lato.className} text-[16px] font-normal text-[#15245E]`}
              >
                ${total}
              </p>
            </div>
            <div className="flex justify-between px-2 py-3 border-b border-b-[#E8E6F1]">
              <h2
                className={`${lato.className} font-semibold text-[18px] text-[#1D3178] `}
              >
                Totals:
              </h2>
              <p
                className={`${lato.className} text-[16px] font-normal text-[#15245E]`}
              >
                ${total}
              </p>
            </div>
            <div className="flex gap-2 items-center px-2">
              <span className="h-2 w-2 bg-[#19D16F] rounded-full " />
              <p
                className={`${lato.className} text-[#8A91AB] font-normal text-[14px] leading-[14.4px]`}
              >
                Shipping & taxes calculated at checkout
              </p>
            </div>
            <button
              className={`${lato.className} font-bold text-[14px] bg-[#19D16F] h-[40px] rounded-[3px] w-full text-white`}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
        <h2
          className={`${josefinFont.className} text-[20px] text-[#1D3178] text-center`}
        >
          Cart Totals
        </h2>
        <div className="flex flex-col h-[284px] w-full bg-[#f4F4Fc] justify-center items-center">
          <div className="w-[300px] h-full justify-between items-start   flex flex-col py-4">
            <input
              type="text"
              placeholder="Bangladesh"
              className={`${josefinFont.className} text-[#C5CBE3] py-2 text-[14px] w-full border-b-[#C7CEE4] outline-none px-3 border-b bg-transparent `}
            />
            <input
              type="text"
              placeholder="Mirpur Dhaka - 1200"
              className={`${josefinFont.className} text-[#C5CBE3] py-2 border-b-[#C7CEE4] text-[14px] w-full outline-none px-3 border-b bg-transparent `}
            />
            <input
              type="text"
              placeholder="Postal Code"
              className={`${josefinFont.className} text-[#C5CBE3] py-2 text-[14px] w-full border-b-[#C7CEE4] outline-none px-3 border-b bg-transparent `}
            />
            <div className="flex justify-start items-start px-3">
              <button
                className={`${josefinFont.className} text-white text-[16px]  w-[179px] h-[40px] rounded-[2px] bg-accent`}
              >
                Calculate Shiping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPart2;
