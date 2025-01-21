import Container from "@/shared/Container";
import { Josefin_Sans, Lato } from "next/font/google";
import React from "react";
import AboutFeture from "./AboutFeture";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Feature = () => {
  return (
    <Container className="py-20  flex flex-col items-center">
      <h2
        className={`${josefinFont.className} pb-10 text-[#151875] text-[32px] md:text-[42px] leading-[49.2px]`}
      >
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px] py-6 ">
        {AboutFeture.map((item) => (
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

export default Feature;
