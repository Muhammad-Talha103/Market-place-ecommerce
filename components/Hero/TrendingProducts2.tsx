import Container from "@/shared/Container";
import Image1 from "@/images/TrendingProductImgP2-1.png";
import Image2 from "@/images/TrendingProductImgP2-2.png";
import Image3 from "@/images/TrendingProductImgP2-3.png";
import Image4 from "@/images/TrendingProductImgP2-4.png";
import Image5 from "@/images/TrendingProductImgP2-5.png";
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

const TrendingProducts2 = () => {
  return (
    <Container className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 px-2 xsm:px-5 sm:px-8 mdl:grid-cols-3 gap-8">
        {/* First Product */}
        <div className="w-full  hover:bg-[#EEEFFB] h-[270px] relative shadow-xl">
          <Image
            src={Image1}
            alt="Image 1"
            className="w-auto lg:w-[213px] h-[207px] absolute left-[65%] transform -translate-x-[50%] top-[72px]"
          />
          <div className="flex flex-col absolute top-6 left-5">
            <h2
              className={`${josefinFont.className} text-[#151875] font-semibold text-[26px] leading-[26px]`}
            >
              23% off in all products
            </h2>
            <p
              className={`${lato.className} text-accent font-semibold text-[16px] leading-[19.2px] hover:underline cursor-pointer`}
            >
              Shop Now
            </p>
          </div>
        </div>

        {/* Second Product */}
        <div className="w-full  hover:bg-[#EEEFFB] h-[270px] relative shadow-xl">
          <Image
            src={Image2}
            alt="Image 2"
            className="w-auto lg:w-[312px] h-[207px] absolute left-[65%] transform -translate-x-[50%] top-[72px]"
          />
          <div className="flex flex-col absolute top-6 left-5">
            <h2
              className={`${josefinFont.className} text-[#151875] font-semibold text-[26px] leading-[26px]`}
            >
              23% off in all products
            </h2>
            <p
              className={`${lato.className} text-accent font-semibold text-[16px] leading-[19.2px] hover:underline cursor-pointer`}
            >
              Shop Now
            </p>
          </div>
        </div>

        {/* Third Section with Product List */}
        <div className="grid grid-cols-1  gap-3 ">
          <div className="w-full h-[74px] flex items-center">
            <div className="w-[107px] h-full flex items-center justify-center">
              <Image src={Image3} alt="Image3" className="w-[64px] h-[71px]" />
            </div>
            <div className="flex flex-col gap-2">
              <p
                className={`${josefinFont.className} text-[16px] leading-[18.65px] text-[#151875]`}
              >
                Executive Seat chair
              </p>
              <p
                className={`${josefinFont.className} text-[12px] leading-[12px] text-[#151875]`}
              >
                $32.00
              </p>
            </div>
          </div>

          <div className="w-full h-[74px] flex items-center">
            <div className="w-[107px] h-full flex items-center justify-center">
              <Image src={Image4} alt="Image4" className="w-[64px] h-[71px]" />
            </div>
            <div className="flex flex-col gap-2">
              <p
                className={`${josefinFont.className} text-[16px] leading-[18.65px] text-[#151875]`}
              >
                Executive Seat chair
              </p>
              <p
                className={`${josefinFont.className} text-[12px] leading-[12px] text-[#151875]`}
              >
                $32.00
              </p>
            </div>
          </div>

          <div className="w-full h-[74px] flex items-center">
            <div className="w-[107px] h-full flex items-center justify-center">
              <Image src={Image5} alt="Image5" className="w-[64px] h-[71px]" />
            </div>
            <div className="flex flex-col gap-2">
              <p
                className={`${josefinFont.className} text-[16px] leading-[18.65px] text-[#151875]`}
              >
                Executive Seat chair
              </p>
              <p
                className={`${josefinFont.className} text-[12px] leading-[12px] text-[#151875]`}
              >
                $32.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrendingProducts2;
