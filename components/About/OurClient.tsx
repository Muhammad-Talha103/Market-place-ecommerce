import Container from "@/shared/Container";
import { Josefin_Sans, Lato } from "next/font/google";
import React from "react";
import Image1 from "@/images/AboutClient1.png";
import Image2 from "@/images/OurClient2.png";
import Image3 from "@/images/OurClient3.png";
import Image from "next/image";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const OurClient = () => {
  return (
    <Container className="bg-[#FBFBFF] h-auto lg:h-[503px]">
      <div className="py-12 flex flex-col justify-center items-center">
        <h2
          className={`${josefinFont.className} text-black text-[42px] leading-[25.6px] `}
        >
          Our Client Say!
        </h2>
        <div className="h-[265px] gap-6 w-full lg:w-[689px]  mt-8 flex flex-col  items-center">
          <div className="w-[191px] h-[64px]  mt-3 flex justify-between items-end">
            <Image src={Image1} alt="Image1" className="h-[55px] w-[55px]" />
            <Image src={Image2} alt="Image2" className="h-[62px] w-[55px]" />
            <Image src={Image3} alt="Image3" className="h-[55px] w-[55px]" />
          </div>
          <div className="flex flex-col justify-between items-center w-[136px] h-[48px] ">
            <h3
              className={`${lato.className} font-semibold text-[22px] leading-[25.5px] text-[#151875]`}
            >
              Selina Gomez
            </h3>
            <p
              className={`${lato.className} font-semibold text-[10px] leading-[25.5px] text-[#8A8FB9]`}
            >
              Ceo At Webecy Digital
            </p>
          </div>

          <p
            className={`${lato.className} px-2 lg:px-0 text-[16px] w-full h-full lg:h-[100px] md:w-[689px]  font-bold text-[#8A8FB9] text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </p>
          <div className="w-[73px] h-[3px] rounded-sm flex items-center justify-between">
            <span className="bg-[#FF75B0] w-[18px] h-[3px] rounded-[3px] cursor-pointer" />
            <span className="bg-[#FB2E86] w-[27px] h-[3px] rounded-[3px] cursor-pointer" />
            <span className="bg-[#FF75B0] w-[18px] h-[3px] rounded-[3px] cursor-pointer" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurClient;
