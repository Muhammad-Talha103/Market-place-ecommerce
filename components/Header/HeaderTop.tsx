"use client";
import Container from "@/shared/Container";
import React from "react";
import { EmailAndPhone, HeaderTopItems } from "./HeaderTopItems";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HeaderTop = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const wishlistProducts = useSelector((state: RootState) => state.wishList.WishList);
  return (
    <div className="bg-violet h-auto md:h-[44px] flex items-center px-3">
      <Container className="w-full h-full py-4 md:py-0 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-8 items-center">
          {EmailAndPhone.map((item, index) => (
            <div key={index} className="flex gap-1.5 items-center">
              {item.icon}
              <p
                className={`${josefinFont.className} font-semibold text-[16px] leading-[16px] text-[#f1f1f1]`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden xs:flex w-full md:w-[380px] mt-4 md:mt-0 items-center justify-between ">
          {HeaderTopItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-1 items-center cursor-pointer px-1 relative"
            >
              <p
                className={`${josefinFont.className} flex gap-1 items-center font-semibold text-[16px] leading-[16px] text-[#f1f1f1]`}
              >
                {item.title === "Login" ? (
                  <Link href="/login">{item.title}</Link>
                ) : (
                  item.title
                )}
              </p>
              <div className="">
                <span className="-mt-1 "> {item.icon}</span>
                {item.cart  &&  (
                  <Link href='/cart'
                    className={`${josefinFont.className} absolute  -top-2.5 md:-top-2 ml-3 text-white bg-accent rounded-full h-6 w-6 flex items-center justify-center`}
                  >
                    {" "}
                    {products.length > 0 ? products.length : 0}
                  </Link>
                )}
                {item.title === 'Wishlist'  &&  (
                  <Link href='/wishlist'
                    className={`${josefinFont.className} absolute  -top-3 ml-2 text-white bg-accent rounded-full h-6 w-6 flex items-center justify-center`}
                  >
                    {" "}
                    {wishlistProducts.length > 0 ? wishlistProducts.length : 0}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
