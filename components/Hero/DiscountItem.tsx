import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import Container from "@/shared/Container";
import Image from "next/image";
import Image1 from "@/images/DiscountItemImg.png";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DiscountItem = () => {
  return (
    <Container className="py-12 flex justify-center flex-col w-full item-center">
      <h2
        className={`${josefinFont.className} text-center text-[42px] leading-[49px] text-[#151875]`}
      >
        Discount Item
      </h2>

      <div className="w-full flex items-center justify-center py-6">
        <div className=" w-[360px] h-[22px] hidden md:flex items-center justify-between space-x-6 sm:w-full sm:max-w-lg">
          <p
            className={`${lato.className} text-[18px] leading-[21px] font-normal text-[#151875] hover:text-accent cursor-pointer`}
          >
            Wood Chair
          </p>
          <p
            className={`${lato.className} text-[18px] leading-[21px] font-normal text-[#151875] hover:text-accent cursor-pointer`}
          >
            Plastic Chair
          </p>
          <p
            className={`${lato.className} text-[18px] leading-[21px] font-normal text-[#151875] hover:text-accent cursor-pointer`}
          >
            Sofa Collection
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  items-center justify-between space-y-6 lg:space-y-0 lg:h-[597px] lg:space-x-6">
        <div className="flex flex-col w-full lg:w-[550px] px-4">
          <h2
            className={`${josefinFont.className} text-[35px] leading-[46px] tracking-[1.5px] text-[#151875]`}
          >
            20% Discount Of All Products
          </h2>
          <p
            className={`${josefinFont.className} text-[#FB2E86] mt-5 text-[21px] leading-[27px]`}
          >
            Eams Sofa Compact
          </p>
          <p
            className={`${josefinFont.className} mt-4 text-[#B7BACB] text-[17px] mdl:leading-[30px] tracking-[2px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lgl:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col gap-5">
              <div className="flex gap-1 items-center">
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  className={`${lato.className} text-[#B8B8DC] font-normal text-[14px] xs:text-[15px] xsm:text-[16px] mdl:leading-[30px] tracking-[2px]`}
                >
                  Material expose like metals
                </p>
              </div>
              <div className="flex gap-1 items-center lgl:mt-6">
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  className={`${lato.className} text-[#B8B8DC]  font-normal text-[14px] xs:text-[15px] xsm:text-[16px] mdl:leading-[30px] tracking-[2px]`}
                >
                  Simple neutral colours
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-1 items-center">
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  className={`${lato.className} text-[#B8B8DC]  font-normal text-[14px] xs:text-[15px] xsm:text-[16px] mdl:leading-[30px] tracking-[2px]`}
                >
                  Clear lines and geomatric figures
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  className={`${lato.className} text-[#B8B8DC]  lgl:mt-6 font-normal text-[14px] xs:text-[15px] xsm:text-[16px] mdl:leading-[30px] tracking-[2px]`}
                >
                  Material expose like metals
                </p>
              </div>
            </div>
          </div>

          <button
            className={`${josefinFont.className} text-white mt-4 text-[17px] leading-[19.92px] w-[200px] h-[57px] rounded-[2px] bg-accent`}
          >
            Shop Now
          </button>
        </div>

        <div className="h-[400px] sm:h-[500px] lg:h-[597px]  w-full lg:w-[699px] px-3 xsm:px-4 xsm:pt-20 relative flex items-center justify-center">
          <svg
            width="472"
            height="472"
            viewBox="0 0 472 472"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="236" cy="236" r="236" fill="#FCECF1" />
          </svg>
          <Image
            src={Image1}
            alt="Image1"
            className="absolute h-full max-h-[500px] object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default DiscountItem;
