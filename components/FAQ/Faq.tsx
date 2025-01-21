import Container from "@/shared/Container";
import { Josefin_Sans, Lato } from "next/font/google";
import React from "react";
import Image1 from '@/images/Partners.png'
import Image from "next/image";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FAQ = () => {
  const titles = [
    "Eu dictumst cum at sed euismood condimentum?",
    "Magna bibendum est fermentum eros.",
    " Odio muskana hak eris conseekin sceleton?",
    "Elit id blandit sabara boi velit gua mara?",
  ];
  return (
    <Container className="py-14">
      <div className="flex flex-col mdl:flex-row justify-between items-center h-auto mdl:h-[750px] w-full ">
        <div className="w-full mdl:w-[590px] h-full  py-12 px-2 sm:px-5 mdl:px-0 ">
          <h2
            className={`${josefinFont.className} text-[28px] sm:text-[36px] leading-[30px] text-[#1D3178] pt-6 pb-16`}
          >
            Generel Information
          </h2>
          <div className="flex flex-col gap-12">
            {titles.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 ">
                <h3
                  className={`${josefinFont.className} text-[17px] leading-[30px] text-[#1D3178] `}
                >
                  {item}
                </h3>
                <p
                  className={`${josefinFont.className} text-[16px] leading-[30px] text-[#A1ABCC] `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mdl:w-[566px] h-auto w-full mdl:h-[738px] bg-[#F8F8FD] py-20 px-8">
          <h2
            className={`${josefinFont.className} text-[24px] leading-[30px] text-[#1D3178] pt-8 pb-20`}
          >
            Ask a Question
          </h2>
          <div className="flex flex-col gap-12">
            <input
              type="text"
              className={`${lato.className} text-[#8990B1] leading-[30px] font-semibold text-[16px]  w-full h-[50px] border border-[#CDCEDC] outline-none bg-transparent rounded-[5px] px-3`}
              placeholder="Your Name"
            />
            <input
              type="text"
              className={`${lato.className} text-[#8990B1] leading-[30px] font-semibold text-[16px]  w-full h-[50px] border border-[#CDCEDC] outline-none bg-transparent rounded-[5px] px-3`}
              placeholder="Your Name"
            />
            <textarea
              className={`${lato.className} font-bold text-[16px] leading-[30px] border text-[#8990B1] border-[#CDCEDC] resize-none px-3 py-2 outline-none rounded-[5px] bg-transparent h-[197px] w-full `}
              placeholder="Type Your Message"
            ></textarea>
            <button
              className={`${josefinFont.className} text-white text-[16px]  w-[156px] h-[48px] bg-[#FB2E86] rounded-[3px] `}
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>
      <div className="py-28 flex items-center justify-center">
      <Image src={Image1} alt="Image1"/>
     </div>
    </Container>
  );
};

export default FAQ;
