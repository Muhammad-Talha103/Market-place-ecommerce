import Container from "@/shared/Container";
import React from "react";
import SortProps from "@/types/SortItems";
import { Josefin_Sans, Lato } from "next/font/google";
const Josefin_San = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Latos = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Sort = ({
  heading,
  about,
  tittle,
  tittle1,
  tittle2,
  icons,
}: SortProps) => {
  return (
    <div className="py-36">
      <Container>
        <div className="flex md:flex-row flex-col justify-between items-start sm:items-center px-4">
          <div className="flex flex-col items-center md:items-start">
            <h1 className={`text-[22px] font-bold ${Josefin_San.className} `}>
              {heading}
            </h1>
            <p
              className={`text-[12px] font-normal ${Latos.className} mt-1 opacity-50`}
            >
              {about}
            </p>
          </div>
          <div
            className={`flex sm:flex-row  flex-col items-start gap-4 ${Latos.className}`}
          >
            <h2 className="flex items-center  gap-1">
              {tittle}{" "}
              <span>
                <input
                  type="text"
                  className="border-[#E7E6EF] h-[25px]  outline-none w-[55px] border border-1"
                />
              </span>
            </h2>
            <h2 className="flex items-center gap-1">
              {tittle1}{" "}
              <span>
                <input
                  type="text"
                  placeholder="Best Match"
                  className="h-[28px] outline-none pl-1 text-[12px] font-normal border-[#E7E6EF] border border-1 w-[96px]"
                />
              </span>
            </h2>
            <h2 className="flex items-center gap-1">
              {tittle2}{" "}
              <span className="flex gap-1">
                {" "}
                {icons?.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </span>
              <span>
                <input
                  type="text"
                  className="border-[#E7E6EF] h-[30px] outline-none border border-1 w-[162px]"
                />
              </span>
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sort;
