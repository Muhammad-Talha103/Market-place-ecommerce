import React from "react";
import { heroProps } from "@/types/HeroComponentsTypes";
import Container from "../shared/Container";
import { Josefin_Sans, Lato } from "next/font/google";
const Josefin_San = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Latos = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const HeroShared = ({ heading, tittle, text }: heroProps) => {
  return (
    <div className="bg-[#F6F5FF] ">
      <Container className="py-[96px]">
        <h1 className={`text-[36px] font-bold ${Josefin_San.className} `}>
          {heading}
        </h1>
        <p className={`text-[16px] font-medium ${Latos.className}`}>
          {tittle} <span className="text-[#FB2E86]">{text}</span>
        </p>
      </Container>
    </div>
  );
};

export default HeroShared;
