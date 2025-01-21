"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { deleteItem } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/productSlice";
import { MdDelete } from "react-icons/md";
import Container from "@/shared/Container";
import { urlFor } from "@/sanity/lib/image";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Wishlist = () => {
  const products = useSelector((state: RootState) => state.wishList.WishList);
  const dispatch = useDispatch();

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center">
        <div className="h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lgll:grid-cols-4 gap-[30px] justify-items-center">
          {products.length > 0 ? (
            products.map((item, index) => (
              <div
                key={index}
                className="w-[270px] h-[322px] gap-4  flex flex-col relative justify-between group"
              >
                <div className="h-[250px] w-full bg-[#FAFAFA] group flex items-center justify-center  relative">
                  <Image
                    src={urlFor(item.img).width(180).height(150).url()}
                    alt="Products"
                    className="w-[180px] h-[150px]"
                    width={180}
                    height={150}
                  />
                  {item.discount && (
                    <span
                      className={`${josefinFont.className} text-[12px] leading-[18px] text-primary font-normal w-[55px] h-[26px] rounded-[4px] py-1 px-3 bg-carminePink absolute top-3 left-3`}
                    >
                      {item.discount}%
                    </span>
                  )}
                  <div
                    onClick={() => dispatch(deleteItem(item.id))}
                    className="h-[34px] w-[34px] flex items-center justify-center bg-white hover:text-white hover:bg-accent  rounded-full absolute top-[10px] cursor-pointer right-[12px]"
                  >
                    <span className="w-[25px] h-[25px]">
                      <MdDelete size={25} />
                    </span>
                  </div>
                </div>
                <div
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.img,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-[270px] h-[41px] bg-black rounded-br-[4px] absolute top-[209px] cursor-pointer group-hover:flex hidden items-center justify-center rounded-bl-[4px]"
                >
                  <div className="flex gap-2 items-center h-[24px] w-[120px]">
                    <span>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.75 3.75H5.75L8 16.5H20"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <button
                      className={`${josefinFont.className} text-[12px] leading-[18px] font-normal text-white`}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <h2
                  className={`${josefinFont.className} text-[16px] font-medium leading-[24px] text-black`}
                >
                  {item.title}
                </h2>
                <div className="w-[100px] h-[24px] flex justify-between items-center ">
                  <p
                    className={`${josefinFont.className} text-[16px] font-medium leading-[24px] text-carminePink`}
                  >
                    ${item.price}
                  </p>
                  {item.previousPrice && (
                    <p
                      className={`${josefinFont.className} text-[16px] font-medium leading-[24px] text-black opacity-50 line-through`}
                    >
                      ${item.previousPrice}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div
              className={`${josefinFont.className} text-[25px] w-full font-medium  text-black opacity-50 tracking-[4px] leading-[25px]`}
            >
              No items in your wishlist.
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Wishlist;
