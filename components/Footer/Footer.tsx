import Container from "@/shared/Container";
import React from "react";
import { Josefin_Sans, Lato, Roboto } from "next/font/google";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <div className="bg-[#EEEFFB] py-12 relative">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 lgl:grid-cols-5 gap-8 md:gap-12">
        {/* First Column */}
        <div className="flex flex-col gap-6 px-3 lg:px-0 justify-center col-span-1 lg:col-span-2">
          <h2
            className={`${josefinFont.className} text-[32px] sm:text-[38px] text-[#000000] leading-[40px] sm:leading-[44px]`}
          >
            Hekto
          </h2>
          <div className="flex w-full sm:w-[377px] h-[44px] items-center bg-white rounded-[3px]">
            <input
              type="text"
              className={`${lato.className} w-full sm:w-[239px] h-full px-4 outline-none opacity-45 text-[#8A8FB9]`}
              placeholder="Enter Email Address"
            />
            <button
              className={`${roboto.className} text-[#EEEFFB] font-medium text-[14px] sm:text-[16px] w-[135px] h-[39px] rounded-[3px] bg-accent`}
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className={`${lato.className} font-normal text-[14px] sm:text-[16px] leading-[19px] text-[#8A8FB9]`}>
              Contact Info
            </p>
            <p className={`${lato.className} font-normal text-[14px] sm:text-[16px] leading-[19px] text-[#8A8FB9]`}>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>

        {/* Second Column - Categories */}
        <div className="flex flex-col gap-6 px-3 lg:px-0 justify-center mt-12 lg:mt-0">
          <h2
            className={`${josefinFont.className} text-[20px] sm:text-[22px] text-[#000000] leading-[24px] sm:leading-[25px]`}
          >
            Categories
          </h2>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Laptops & Computers</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Cameras & Photography</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Smart Phones & Tablets</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Video Games & Consoles</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Waterproof Headphones</p>
        </div>

        {/* Third Column - Customer Care */}
        <div className="flex flex-col gap-6 px-3 lg:px-0 justify-center mt-12 lg:mt-0">
          <h2
            className={`${josefinFont.className} text-[20px] sm:text-[22px] text-[#000000] leading-[24px] sm:leading-[25px]`}
          >
            Customer Care
          </h2>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>My Account</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Discount</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Returns</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Orders History</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Order Tracking</p>
        </div>

        {/* Fourth Column - Pages */}
        <div className="flex flex-col gap-6 px-3 lg:px-0 justify-center md:mt-[85px] mt-12 lgl:mt-[50px]">
          <h2
            className={`${josefinFont.className} text-[20px] sm:text-[22px] text-[#000000] leading-[24px] sm:leading-[25px]`}
          >
            Pages
          </h2>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Blog</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Browse the Shop</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Category</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Pre-Built Pages</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>Visual Composer Elements</p>
          <p className={`${lato.className} text-[14px] sm:text-[16px] font-normal text-[#8A8FB9]`}>WooCommerce Pages</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
