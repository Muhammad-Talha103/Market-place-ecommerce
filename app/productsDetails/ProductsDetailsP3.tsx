import Container from "@/shared/Container";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Items from "./ProductsDetailsItemList";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductsDetailsP3 = () => {
  return (
    <Container className="py-12">
      <h2 className={`${josefinFont.className} text-[36px] py-2`}>
        Related Products
      </h2>
      <div className="flex items-center justify-center">

      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-5 ">
        {Items.map((item, index) => (
          <>
            <div
              key={index}
              className="w-[270px] h-[380px]  flex flex-col "
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[340px] "
              />
              <div className="flex items-center w-[270px] justify-between h-[22px]">
                <p
                  className={`${josefinFont.className} text-[#151875] text-[16px] `}
                >
                  {item.title}
                </p>
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                      fill={index < item.stars ? "#FFAD33" : "#FFFFFF"}
                    />
                  </svg>
                ))}
              </div>


              <p className={`${josefinFont.className} text-[#151875] text-[13px] leading-[15.32px]`}>$43.00</p>

            </div>
          </>
        ))}
      </div>
      </div>
    </Container>
  );
};

export default ProductsDetailsP3;
