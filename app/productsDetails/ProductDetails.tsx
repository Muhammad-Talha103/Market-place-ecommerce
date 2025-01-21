"use client";
import Container from "@/shared/Container";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { addToWishlist, removeFromWishlist } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/productSlice";
import {urlFor} from "../../sanity/lib/image"

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductsDetails = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const products = useSelector((state: RootState) => state.singleProduct.Product);
  const dispatch = useDispatch();

  return (
    <Container className="py-14">
      {products.length > 0 ? (
        products.map((item) => (
          <div className="h-auto mdl:h-[509px] w-full " key={item.id}>
            <div className="grid grid-cols-1 mdl:grid-cols-2 gap-3">
              <div className="grid grid-cols-1 xsm:grid-cols-3 gap-9 mdl:h-[509px] h-auto">
                <div className="hidden xsm:flex flex-col gap-3 items-center justify-between py-3">
                  <div className="w-[151px] h-[155px] flex mt-0 items-center justify-center bg-[#FAFAFA]">
                    <Image
                      src={urlFor(item.image).width(178).height(178).url()}
                      alt="Image1"
                      className="w-[140px] h-[140px] rounded-[3px]"
                      width={140}
                      height={140}
                    />
                  </div>
                  <div className="w-[151px] h-[155px] flex mt-2 items-center justify-center bg-[#FAFAFA]">
                    <Image
                      src={urlFor(item.image).width(178).height(178).url()}
                      alt="Image1"
                      className="w-[140px] h-[140px] rounded-[3px]"
                      width={140}
                      height={140}
                    />
                  </div>
                  <div className="w-[151px] h-[155px] flex mt-2 items-center justify-center bg-[#FAFAFA]">
                    <Image
                      src={urlFor(item.image).width(178).height(178).url()}
                      alt="Image1"
                      className="w-[140px] h-[140px] rounded-[3px]"
                      width={140}
                      height={140}
                    />
                  </div>
                </div>

                <div className="col-span-2 mdl:h-[509px] h-auto flex items-center justify-center">
                  <div className="h-[487px] w-[375px] bg-[#FAFAFA] border">
                    <Image
                      src={urlFor(item.image).width(178).height(178).url()}
                      alt="Image1"
                      className="h-full w-full"
                      width={375}
                      height={487}
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 py-12">
                <h2
                  className={`${josefinFont.className} text-[36px] leading-[41px] text-[#0D134E]`}
                >
                  {item.name}
                </h2>
                <div className="flex gap-4 items-center mt-4">
                  <div className="flex gap-2">
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
                          fill="#FFAD33"
                        />
                      </svg>
                    ))}
                  </div>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#151875]`}
                  >
                    (22)
                  </p>
                </div>
                <div className="flex gap-4 items-center mt-4">
                  <p
                    className={`${josefinFont.className} text-[16px] text-[#151875] `}
                  >
                    ${item.newPrice}
                  </p>
                  <p
                    className={`${josefinFont.className} text-[16px] text-accent line-through `}
                  >
                    ${item.newPrice !== undefined
                      ? (item.newPrice * 1.3).toFixed(2)
                      : 0}
                  </p>
                </div>
                <p
                  className={`${josefinFont.className} text-[16px] text-[#151875] mt-4`}
                >
                  Color
                </p>
                <p
                  className={`${josefinFont.className} text-[16px] text-[#A9ACC6] leading-[29px] mt-4`}
                >
                {item.description}
                </p>
                <div className="flex gap-5 items-center">
                  <p
                    onClick={() => dispatch(
                                      addToCart({
                                        id: item.id,
                                        title: item.name,
                                        price: item.newPrice,
                                        image: item.image,
                                        quantity: 1,
                                      })
                                    )} 
                    className={`${josefinFont.className} cursor-pointer text-[16px] text-[#151875] mt-4 hover:underline`}
                  >
                    Add To cart
                  </p>
                  {isInWishlist ? (
                    <MdFavorite
                      color="red"
                      className="cursor-pointer"
                      size={32}
                      onClick={() => {
                        toggleWishlist();
                        dispatch(
                          removeFromWishlist({
                            id: item.id,
                          })
                        );
                      }}
                    />
                  ) : (
                    <MdFavoriteBorder
                      size={32}
                      className="cursor-pointer"
                      onClick={() => {
                        toggleWishlist();
                        dispatch(
                          addToWishlist({
                            id: item.id,
                            title: item.name,
                            price: item.newPrice,
                            img: item.image,
                            previousPrice: item.oldPrice,
                            quantity: 1,
                          })
                        );
                      }}
                    />
                  )}
                </div>
                <p
                  className={`${josefinFont.className} text-[16px] text-[#151875] mt-4`}
                >
                  Categories: {item.category}
                </p>
                {/* <p
                  className={`${josefinFont.className} text-[16px] text-[#151875] mt-4`}
                >
                  Tags
                </p> */}
                <div className="flex gap-5 items-center mt-4">
                  {/* <p
                    className={`${josefinFont.className} text-[16px] text-[#151875] mt-4`}
                  >
                    Share
                  </p> */}
                  <div className="w-[56px] h-[12px] flex justify-between items-center mt-4">
                    {/* Social media icons here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className={`${josefinFont.className} text-[30px] text-center text-[#151875]`}>No items to show</p>
      )}
    </Container>
  );
};

export default ProductsDetails;
