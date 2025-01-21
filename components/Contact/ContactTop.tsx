import Container from "@/shared/Container";
import { Josefin_Sans, Lato } from "next/font/google";
import React from "react";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const ContactTop = () => {
  return (
    <Container className="py-12 h-auto">
      <section className="w-full h-auto lg:h-[390px]  flex flex-col px-2 md:px-8 lgll:px-0 lg:flex-row justify-between">
        <div className="w-full lg:w-[550px]  py-5 px-2 lg:px-0">
          <h2
            className={`${josefinFont.className} text-[#151875] text-[36px] leading-[48px] text-center sml:text-start`}
          >
            Information About us
          </h2>
          <p
            className={`${lato.className} text-[#8A8FB9] text-center sml:text-start px-1 md:pr-32 lg:pr-0 text-[16px] font-semibold leading-[25.6px] mt-2`}
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="justify-center flex sml:justify-start">
            <div className="w-[103px]  h-[25px] flex items-center justify-between mt-7">
              <span className="rounded-full h-[25px] w-[25px] bg-[#5625DF]" />
              <span className="rounded-full h-[25px] w-[25px] bg-[#FF27B7]" />
              <span className="rounded-full h-[25px] w-[25px] bg-[#37DAF3]" />
            </div>
          </div>
        </div>
        <div className="w-full mt-5 lg:mt-0 lg:w-[500px]  py-5">
          <h2
            className={`${josefinFont.className} text-[#151875] text-[36px] text-center sml:text-start leading-[48px]`}
          >
            Contact Way
          </h2>
          <div className="grid grid-cols-1 ssm:grid-cols-2 mt-2 gap-10 px-2 lg:px-0">
            <div className="w-[240px] h-[53px] flex gap-2 items-center">
              <span className="bg-[#5726DF] h-[45px] w-[45px] rounded-full" />
              <div className="flex flex-col gap-1">
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  Tel: 877-67-88-99
                </p>
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  E-Mail: shop@store.com
                </p>
              </div>
            </div>
            <div className="w-[180px] h-[53px] flex gap-2 items-center">
              <span className="bg-[#FB2E86] h-[45px] w-[45px] rounded-full" />
              <div className="flex flex-col gap-1">
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  Support Forum
                </p>
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  For over 24hr
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[53px] flex gap-2 items-center">
              <span className="bg-[#FFB265] h-[45px] w-[45px] rounded-full" />
              <div className="flex flex-col gap-1">
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  20 Margaret st, London
                </p>
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  Great britain, 3NM98-LK
                </p>
              </div>
            </div>
            <div className="w-[220px] h-[53px] flex gap-2 items-center">
              <span className="bg-[#1BE982] h-[45px] w-[45px] rounded-full" />
              <div className="flex flex-col gap-1">
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  Free standard shipping
                </p>
                <p
                  className={`${lato.className} font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]`}
                >
                  on all orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ContactTop