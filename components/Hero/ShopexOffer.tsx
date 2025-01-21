import Container from "@/shared/Container";
import { Josefin_Sans, Lato } from "next/font/google";
import React from "react";
import ShopexOfferItem from "./ShopexOffersItem";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ShopexOffer = () => {
  return (
    <Container className="py-12  flex flex-col items-center">
      <h2
        className={`${josefinFont.className} text-[#151875] text-[32px] md:text-[42px] leading-[49.2px]`}
      >
        What Shopex Offer!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lgl:grid-cols-4 gap-[22px] py-6 ">
        {ShopexOfferItem.map((item) => (
          <div
            key={item.id}
            className="w-[270px] h-[320px] py-12  flex flex-col justify-between items-center"
          >
            {item.svg}
            <p
              className={`${josefinFont.className} text-[22px] text-[25.87] text-[#151875]`}
            >
              24/7 Support
            </p>
            <p
              className={`${lato.className} font-bold text-center text-[16px] leading-[25.6px] text-[#1A0B5B4D]/30`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ShopexOffer;
