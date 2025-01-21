"use client";
import Container from "@/shared/Container";
import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Image1 from "@/images/TopCategoryImg1.png";
import Image2 from "@/images/TopCategoryImg2.png";
import Image3 from "@/images/TopCategoryImg3.png";
import Image4 from "@/images/TopCategoryImg4.png";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/productSlice";
import { addToWishlist } from "@/redux/wishlistSlice";
import Link from "next/link";
import { addToSingleProduct } from "@/redux/singleProduct";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const categories = [
  { id: 115, image: Image1, title: "Modern LCW Chair", price: 120 },
  { id: 116, image: Image2, title: "Vintage LCW Chair", price: 150 },
  { id: 117, image: Image3, title: "Eco LCW Chair", price: 99 },
  { id: 118, image: Image4, title: "Premium LCW Chair", price: 180 },
];

const TopCategories = () => {
  const dispatch = useDispatch();
  return (
    <Container className="py-32 sm:py-16 flex justify-center flex-col w-full item-center">
      <h2
        className={`${josefinFont.className} text-center text-[42px] leading-[49px] text-[#151875]`}
      >
        Top Categories
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-[25px] mt-8">
          {categories.map(({ id, image, title, price }) => (
            <div key={id} className="w-[269px] h-[345px]">
              <div className="relative group">
                <div className="w-[100px]  z-50 h-[30px] absolute top-6 right-12 hidden group-hover:flex justify-between items-center">
                  <span
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: id,
                          price: price,
                          quantity: 1,
                          image: image,
                          title: title,
                        })
                      )
                    }
                    className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer"
                  >
                    <BsCart size={19} />
                  </span>
                  <span
                    onClick={() =>
                      dispatch(
                        addToWishlist({
                          id: id,
                          price: price,
                          quantity: 1,
                          img: image,
                          title: title,
                        })
                      )
                    }
                    className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer"
                  >
                    <CiHeart size={20} />
                  </span>
                  <Link
                    href="/productsDetails"
                    onClick={() =>
                      dispatch(
                        addToSingleProduct({
                          id: id,
                          title: title,
                          newPrice: price,
                          image: image,
                          quantity: 1,
                        })
                      )
                    }
                    className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer"
                  >
                    <IoSearch size={19} />
                  </Link>
                </div>
                <div className="flex items-center justify-center h-[269px] relative w-[269px] bg-[#F6F7FB] rounded-full group">
                  <Image
                    src={image}
                    alt={title}
                    className="h-[300px] absolute bottom-3"
                  />
                  <div className="h-[269px] w-[269px] bg-[#9877E7] hidden group-hover:block absolute right-2 top-2 -z-10 rounded-full" />
                </div>
              </div>

              <div className="h-[50px] w-full flex flex-col items-center gap-1 mt-5">
                <p
                  className={`${josefinFont.className} text-[#151875] font-normal text-[20px] leading-[20px]`}
                >
                  {title}
                </p>
                <p
                  className={`${josefinFont.className} text-[#151875] font-normal text-[16px] leading-[16px]`}
                >
                  ${price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TopCategories;
