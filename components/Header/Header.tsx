"use client";
import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import Container from "@/shared/Container";
import { CiSearch } from "react-icons/ci";
import { Josefin_Sans, Lato } from "next/font/google";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HeaderNavItems = [
  { id: 1, title: "Pages", href: "/pages" },
  { id: 2, title: "Product", href: "/product" },
  { id: 3, title: "Blogs", href: "/blogs" },
  { id: 4, title: "Shop", href: "/shop" },
  { id: 5, title: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div className="">
      <HeaderTop />
      <div className="bg-white w-full h-[60px] -mt-2 lg:flex items-center ">
        <Container className="lg:flex-1">
          <div className="h-[40px]  flex my-2 px-2 lg:px-0 items-center justify-between">
            <div className="lg:flex lg:items-center  lg:gap-20">
              <h2
                className={`${josefinFont.className} mt-2 lg:mt-0 font-bold text-[34px] leading-[34px] text-[#0D0E43]`}
              >
                Hekto
              </h2>
              <div className="lg:flex gap-10 hidden">
                <Link href="/">
                  <div className="flex items-center gap-0.5 hover:text-[#FB2E86] cursor-pointer">
                    <p
                      className={`${lato.className} font-normal text-[16px] leading-[20px] hover:text-[#FB2E86] cursor-pointer`}
                    >
                      Home
                    </p>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4.5L6 8.5L10 4.5"
                        stroke="#0D0E43"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                {HeaderNavItems.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <p
                      className={`${lato.className} font-normal text-[16px] leading-[20px] hover:text-[#FB2E86] cursor-pointer`}
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-[317px] h-[40px] hidden md:flex items-center   border border-[#E7E6EF]">
              <input
                type="text"
                className="w-[266px] h-full outline-none bg-transparent px-2"
              />
              <button className="w-[51px] flex items-center justify-center h-full border-l hover:text-white border-[#E7E6EF] hover:bg-[#Fb2E86]">
                <CiSearch size={24} />
              </button>
            </div>
            <div className="lg:hidden">
              {isOpen ? (
                <RxCross1 size={24} onClick={toggleIsOpen} />
              ) : (
                <AiOutlineMenu size={26} onClick={toggleIsOpen} />
              )}
            </div>
            {isOpen && (
              <div className="lg:hidden flex flex-col gap-12 -mt-2  absolute top-[140px] md:top-28 right-0  bg-white z-50 w-full h-[100%] py-8 px-2">
                <Link href="/">
                  <div className="flex items-center gap-0.5 hover:text-[#FB2E86] cursor-pointer">
                    <p
                      onClick={() => setIsOpen(false)}
                      className={`${lato.className} font-normal text-[16px] leading-[20px] hover:text-[#FB2E86]`}
                    >
                      Home
                    </p>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4.5L6 8.5L10 4.5"
                        stroke="#0D0E43"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                {HeaderNavItems.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <p
                      onClick={() => setIsOpen(false)}
                      className={`${lato.className} font-normal text-[16px] leading-[20px] py-2 hover:text-[#FB2E86] cursor-pointer`}
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
