import Container from "@/shared/Container";
import { Josefin_Sans } from "next/font/google";
import React from "react";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductsDetailsP2 = () => {
  return (
    <div className="bg-[#F9F8FE] h-auto md:h-[629px]">
      <Container className="flex flex-col h-full justify-around py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <ul className="flex flex-wrap items-center gap-8 md:gap-12">
          <li
            className={`${josefinFont.className} text-[20px] sm:text-[24px] md:text-[24px] leading-[24px] sm:leading-[28px] hover:underline cursor-pointer text-[#151875]`}
          >
            Description
          </li>
          <li
            className={`${josefinFont.className} text-[20px] sm:text-[24px] md:text-[24px] leading-[24px] sm:leading-[28px] hover:underline cursor-pointer text-[#151875]`}
          >
            Additional Info
          </li>
          <li
            className={`${josefinFont.className} text-[20px] sm:text-[24px] md:text-[24px] leading-[24px] sm:leading-[28px] hover:underline cursor-pointer text-[#151875]`}
          >
            Reviews
          </li>
          <li
            className={`${josefinFont.className} text-[20px] sm:text-[24px] md:text-[24px] leading-[24px] sm:leading-[28px] hover:underline cursor-pointer text-[#151875]`}
          >
            Video
          </li>
        </ul>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <h2
            className={`${josefinFont.className} text-[18px] sm:text-[22px] md:text-[22px] leading-[24px] sm:leading-[28px] cursor-pointer text-[#151875]`}
          >
            Varius tempor.
          </h2>
          <p
            className={`${josefinFont.className} text-[14px] sm:text-[16px] md:text-[16px] leading-[26px] sm:leading-[29px] text-[#A9ACC6]`}
          >
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <h2
            className={`${josefinFont.className} text-[18px] sm:text-[22px] md:text-[22px] leading-[24px] sm:leading-[28px] cursor-pointer text-[#151875]`}
          >
            More details
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {[
              "Aliquam dis vulputate vulputate integer sagittis.",
              "Faucibus ds diam arcu, nulla lobortis justo netus dis.",
              "Eu in fringilla vulputate nunc nec. Dui, massa viverr.",
              "Additional detail to make it four times.", // Added the 4th detail
            ].map((detail, index) => (
              <div
                className="flex items-center gap-2 sm:gap-3 md:gap-4"
                key={index}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 5L20 12L13 19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p
                  className={`${josefinFont.className} text-[14px] sm:text-[16px] md:text-[16px] leading-[26px] sm:leading-[29px] text-[#A9ACC6]`}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsDetailsP2;
