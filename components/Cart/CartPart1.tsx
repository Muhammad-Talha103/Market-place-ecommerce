import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { decreaseQuantity, increaseQuantity ,deleteItem } from "@/redux/productSlice";
import { Josefin_Sans } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CartPart1 = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <div >
      <div className="hidden lg:grid grid-cols-5 gap-[110px] w-full lgll:w-[795px] ">
        <p
          className={`${josefinFont.className} col-span-2 flex justify-center  text-[20px] leading-[23.4px] text-[#1D3178]`}
        >
          Product
        </p>
        <p
          className={`${josefinFont.className} text-[20px] flex justify-center  leading-[23.4px] text-[#1D3178]`}
        >
          Price
        </p>
        <p
          className={`${josefinFont.className} text-[20px] flex justify-center  leading-[23.4px] text-[#1D3178]`}
        >
          Quantity
        </p>
        <p
          className={`${josefinFont.className} text-[20px] leading-[23.4px] text-[#1D3178]`}
        >
          Total
        </p>
      </div>
      <div className="h-auto  overflow-y-scroll lgll:h-[675px]">
      {products.map((item) => (
        <div
          key={item.id}
          className="grid justify-between grid-cols-3 px-4    xs:px-5 ssm:px-6 md:px-8  lgll:w-[795px] gap-8 ssm:grid-cols-5 md:grid-cols-5   mt-5 border-b py-3"
        >
          <div className="col-span-2">
            <div className="flex gap-2 items-center mt-5 relative ">
              <div className="w-[83px] h-[87px] bg-slate-800 rounded-md ">
                <Image
                  src={urlFor(item.image).width(83).height(87).url()}
                  alt="Products Image"
                  className="h-full w-full object-cover"
                  width={83}
                  height={87}
                />
              </div>
              <span onClick={() => dispatch(deleteItem(item.id))} className="h-5 w-5 cursor-pointer hover:bg-accent absolute left-[70px] -top-2 rounded-full bg-black border flex items-center justify-center"><RxCross1 className="text-[12px] text-white"/></span>
              <div className="flex flex-col gap-1.5">
                <h2
                  className={`${josefinFont.className} text-[#000000] text-[16px] leading-[16px]`}
                >
                  {item.title}
                </h2>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#A1A8C1]`}
                >
                  Color: Brown
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#A1A8C1]`}
                >
                  Color: Brown
                </p>
              </div>
            </div>
          </div>

          <div
            className={` flex flex-col gap-2 mt-5 ssm:mt-10 items-end ssm:items-center justify-center ssm:justify-start`}
          >
            <h3
              className={`${josefinFont.className} text-[#15245E] text-[14px] `}
            >
              ${item.price}
            </h3>
          </div>

          <div className="mt-5 ssm:mt-10 flex flex-col gap-2 lgll:items-end  items-center ssm:ml-10 lgll:ml-0">
            <div className="w-[51px] flex items-center justify-between h-[15px] border bg-[#BEBFC2]">
              <span
                onClick={() => dispatch(increaseQuantity(item.id))}
                className={`${josefinFont.className} w-[12px] flex items-center justify-center text-white cursor-pointer hover:bg-accent text-[20px] h-[15px]`}
              >
                +
              </span>
              <h4>{item.quantity}</h4>
              <span
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className={`${josefinFont.className} w-[12px] flex items-center justify-center text-white cursor-pointer hover:bg-accent text-[20px] h-[15px]`}
              >
                -
              </span>
            </div>
          </div>

          <div
            className={`${josefinFont.className} mt-5 ssm:mt-10 flex flex-col gap-2 items-end ssm:items-center lgl:items-end col-span-2 ssm:col-span-1 text-[#15245E] text-[14px] `}
          > ${item.price ? item.price * item.quantity : 0}
            <div></div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CartPart1;
