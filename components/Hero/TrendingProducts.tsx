"use client";
import Container from "@/shared/Container";
import { Josefin_Sans, Lato } from "next/font/google";
import Image1 from "@/images/TrendingProducImg1.png";
import Image2 from "@/images/TrendingProductImg2.png";
import Image3 from "@/images/TrendingProductImg3.png";
import Image4 from "@/images/TrendingProductImg4.png";
import Image from "next/image";
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
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TrendingProductItems = [
  {
    id: 111,
    title: "Marquis Lounge Chair",
    image: Image1,
    price: 219.99,
    oldPrice: 250,
  },
  {
    id: 112,
    title: "Aspen Recliner",
    image: Image2,
    price: 289.99,
    oldPrice: 325,
  },
  {
    id: 113,
    title: "Polaris chair",
    image: Image3,
    price: 238,
    oldPrice: 290,
  },
  {
    id: 114,
    title: "Noble Executive Chair",
    image: Image4,
    price: 269,
    oldPrice: 300,
  },
];
const TrendingProducts = () => {
  const dispatch = useDispatch();
  return (
    <Container className="py-12 flex flex-col items-center justify-center">
      <h2
        className={`${josefinFont.className} text-center pb-6 text-[#1A0B5B] text-[42px] font-bold leading-[49.22px] tracking-[1.5px]`}
      >
        Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lgl:grid-cols-4 gap-6">
        {TrendingProductItems.map((item, index) => (
          <div
            key={index}
            className="h-[350px] w-[270px] shadow-xl  flex flex-col group relative  items-center "
          >
            <div className="h-[244px] w-[247px] flex items-center justify-center">
              <Image src={item.image} alt="Product" />
            </div>
            <div className="h-[115px] w-[247px] flex flex-col items-center justify-center ">
              <h2
                className={`${lato.className} font-bold text-[16px] leading-[25.6px] text-center text-[#151875]`}
              >
                {item.title}
              </h2>
              <div className="w-[100px] z-50 h-[30px] absolute top-[9px]  left-2 hidden group-hover:flex justify-between items-center">
                <span
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        price: item.price,
                        quantity: 1,
                        image: item.image,
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
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        img: item.image,
                        quantity: 1,
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
                        id: item.id,
                        title: item.title,
                        newPrice: item.price,
                        image: item.image,
                        quantity: 1,
                      })
                    )
                  }
                  className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer"
                >
                  <IoSearch size={19} />
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <p
                  className={`${lato.className} font-normal text-[14px] leading-[14.6px] text-center text-[#151875]`}
                >
                  ${item.price}
                </p>
                <p
                  className={`${lato.className} font-normal text-[14px] leading-[14.6px] text-center line-through text-[#1518754D]`}
                >
                  ${item.oldPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrendingProducts;
