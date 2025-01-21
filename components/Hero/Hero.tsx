import React from "react";
import Image1 from "@/images/HeroImg1.png";
import Image2 from "@/images/HeroImg2.png";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  return (
    <div className="bg-[#F2F0FF]  w-full pb-4">
      <div className="h-auto  2xl:w-[1650px] bg-[#F2F0FF] relative flex flex-col 2xl:flex-row 2xl:mx-auto">
        <div className="flex flex-col mdl:flex-row mdl:h-[724px]">
          <div className="flex items-start justify-center">
            <Image
              src={Image1}
              alt="Hero Image"
              className=" w-[387px] h-[387px] flex items-start"
            />
          </div>
          <div className="flex flex-col  items-center justify-center">
            <div className="flex flex-col items-center mdl:items-start mdl:justify-start justify-center">
              <div className="mdl:w-[644px] w-full h-auto lg:h-[248px] flex flex-col">
                <p
                  className={`${lato.className} text-[16px] px-4 lg:px-0 text-center mdl:text-start font-bold leading-[28px] text-accent`}
                >
                  Best Furniture For Your Castle....
                </p>
                <h2
                  className={`${josefinFont.className} text-[35px] xs:text-[40px] px-4 lg:px-0 text-center mdl:text-start lg:text-[53px] leading-[81.98px] tracking-[1.5px]`}
                >
                  New Furniture Collection Trends in 2020
                </h2>
                <p
                  className={`${lato.className} px-4 lg:px-0 text-center mdl:text-start text-[16px] font-bold leading-[28px] text-subTextColor`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
              </div>

              <button
                className={`${josefinFont.className} mt-8 hover:bg-transparent hover:border hover:border-accent hover:text-black   cursor-pointer w-[163px] h-[50px]  bg-accent text-[17px] text-white tracking-[2px] leading-[20px] flex items-center justify-center rounded-md`}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mdl:justify-end relative px-6 items-center mdl:-mt-52 lgl:-mt-72 2xl:-mt-0 2xl:-mb-72  ">
          <div className="mdl:w-[600px] lgl:w-[650px] lgl:h-[650px] h-full mt-12 mdl:mt-6 mdl:h-[600px] bg-[#ECd2fa]/35 rounded-full flex items-center justify-center">
            <div className="mdl:w-[500px] h-full mdl:h-[500px] lgl:w-[550px] lgl:h-[550px] bg-[#ECd2fa] rounded-full flex items-center justify-center">
              <Image src={Image2} alt="Image2" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
