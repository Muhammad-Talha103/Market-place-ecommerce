import React from "react";
import image1 from "@/images/Recent1.png";
import image2 from "@/images/Recent2.png";
import image3 from "@/images/Recent3.png";
import image4 from "@/images/Recent4.png";
import image5 from "@/images/Sale1.png";
import image6 from "@/images/Sale2.png";
import image7 from "@/images/Sale3.png";
import image8 from "@/images/Offer1.png";
import image9 from "@/images/Offer2.png";
import image10 from "@/images/Offer3.png";
import image11 from "@/images/Offer4.png";

import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const BlogSidebar = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-3">
        <h1
          className={`text-[#151875] ${josefinFont.className} text-[22px] leading-[25px] `}
        >
          Search
        </h1>
        <div className="flex items-center border rounded-[2px] pr-4 pl-2">
          <input
            type="text"
            placeholder="Search For Posts"
            className="w-full h-[40px] outline-none "
          />
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="#CBCBE0"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9996 14L11.0996 11.1"
                stroke="#CBCBE0"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1
          className={`text-[#151875] ${josefinFont.className} text-[22px] leading-[25px] `}
        >
          Categories
        </h1>
        <div className="grid  grid-cols-2 gap-4">
          <p
            className={`text-[#151875] ${josefinFont.className}  flex pl-3 items-center text-[14px] font-normal hover:bg-[#F939BF] rounded-[3px] hover:text-white cursor-pointer h-[30px]`}
          >
            Hobbise (14)
          </p>
          <p
            className={`text-[#151875] ${josefinFont.className}  flex pl-3 items-center text-[14px] font-normal hover:bg-[#F939BF] rounded-[3px] hover:text-white cursor-pointer h-[30px]`}
          >
            Women (21)
          </p>
          <p
            className={`text-[#151875] ${josefinFont.className}  flex pl-3 items-center text-[14px] font-normal hover:bg-[#F939BF] rounded-[3px] hover:text-white cursor-pointer h-[30px]`}
          >
            Women (21)
          </p>
          <p
            className={`text-[#151875] ${josefinFont.className}  flex pl-3 items-center text-[14px] font-normal hover:bg-[#F939BF] rounded-[3px] hover:text-white cursor-pointer h-[30px]`}
          >
            Women (21)
          </p>
          <p
            className={`text-[#151875] ${josefinFont.className}  flex pl-3 items-center text-[14px] font-normal hover:bg-[#F939BF] rounded-[3px] hover:text-white cursor-pointer h-[30px]`}
          >
            Women (21)
          </p>
          <p
            className={`text-[#151875] ${josefinFont.className}  flex pl-3 items-center text-[14px] font-normal hover:bg-[#F939BF] rounded-[3px] hover:text-white cursor-pointer h-[30px]`}
          >
            Women (21)
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1
          className={`text-[#151875] ${josefinFont.className} text-[22px] leading-[25px] `}
        >
          Recent Post
        </h1>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex  gap-2">
              <Image src={image1} alt="post" className="w-[70px] h-[50px]" />

              <div className="flex flex-col ">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  It is a long established fact
                </p>
                <p
                  className={`text-[#8A8FB9] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  gap-2">
              <Image src={image2} alt="post" className="w-[70px] h-[50px]" />

              <div className="flex flex-col ">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  It is a long established fact
                </p>
                <p
                  className={`text-[#8A8FB9] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  gap-2">
              <Image src={image3} alt="post" className="w-[70px] h-[50px]" />

              <div className="flex flex-col ">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  It is a long established fact
                </p>
                <p
                  className={`text-[#8A8FB9] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  gap-2">
              <Image src={image4} alt="post" className="w-[70px] h-[50px]" />

              <div className="flex flex-col ">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  It is a long established fact
                </p>
                <p
                  className={`text-[#8A8FB9] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1
          className={`text-[#151875] ${josefinFont.className} text-[22px] leading-[25px] `}
        >
          Sale Product
        </h1>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex  gap-2">
              <Image src={image5} alt="post" className="w-[70px] h-[50px]" />

              <div className="flex flex-col ">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Elit ornare in enim mauris.
                </p>
                <p
                  className={`text-[#8A8FB9] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  gap-2">
              <Image src={image6} alt="post" className="w-[70px] h-[50px]" />

              <div className="flex flex-col ">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Viverra pulvinar et enim.
                </p>
                <p
                  className={`text-[#8A8FB9] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  gap-2">
              <Image src={image7} alt="post" className="w-[70px] h-[50px]" />

              <div className="flex flex-col ">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Mattis varius donec fdsfd
                </p>
                <p
                  className={`text-[#8A8FB9] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Aug 09 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1
          className={`text-[#151875] ${josefinFont.className} text-[22px] leading-[25px] `}
        >
          Offer product
        </h1>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <div className="flex  flex-col gap-2">
              <Image src={image8} alt="post" className="w-full h-[80px]" />

              <div className="flex flex-col gap-1 items-center">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Duis lectus est.
                </p>
                <p
                  className={`text-[#8A8FB9] ${lato.className} text-[12px] leading-[18px] font-semibold`}
                >
                  $12.00 - $15.00
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  flex-col gap-2">
              <Image src={image9} alt="post" className="w-full h-[80px]" />

              <div className="flex flex-col gap-1 items-center">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Sed placerat.
                </p>
                <p
                  className={`text-[#8A8FB9] ${lato.className} text-[12px] leading-[18px] font-semibold`}
                >
                  $12.00 - $15.00
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  flex-col gap-2">
              <Image src={image10} alt="post" className="w-full h-[80px]" />

              <div className="flex flex-col gap-1 items-center">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Netus proin.
                </p>
                <p
                  className={`text-[#8A8FB9] ${lato.className} text-[12px] leading-[18px] font-semibold`}
                >
                  $12.00 - $15.00
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  flex-col gap-2">
              <Image src={image11} alt="post" className="w-full h-[80px]" />

              <div className="flex flex-col gap-1 items-center">
                <p
                  className={`text-[#151875] ${josefinFont.className} text-[14px] leading-[18px] font-normal`}
                >
                  Platea in.
                </p>
                <p
                  className={`text-[#8A8FB9] ${lato.className} text-[12px] leading-[18px] font-semibold`}
                >
                  $12.00 - $15.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1
          className={`text-[#151875] ${josefinFont.className} text-[22px] leading-[25px] `}
        >
          Follow
        </h1>
        <div className="flex gap-2 p-3">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#5625DF" />
            <path
              d="M13.932 17.9981V12.5341H15.7753L16.0493 10.3948H13.932V9.03211C13.932 8.41478 14.104 7.99211 14.99 7.99211H16.1127V6.08478C15.5664 6.02624 15.0174 5.99797 14.468 6.00011C12.8387 6.00011 11.72 6.99478 11.72 8.82078V10.3908H9.88867V12.5301H11.724V17.9981H13.932Z"
              fill="white"
            />
          </svg>

          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#FF27B7" />
            <path
              d="M17.9647 9.53684C17.958 9.03192 17.8635 8.53202 17.6854 8.0595C17.5309 7.66094 17.2951 7.29897 16.9928 6.99672C16.6906 6.69448 16.3286 6.4586 15.93 6.30417C15.4636 6.12907 14.9708 6.0344 14.4727 6.02417C13.8314 5.9955 13.628 5.9875 12 5.9875C10.372 5.9875 10.1634 5.9875 9.52671 6.02417C9.02882 6.03447 8.53628 6.12915 8.07005 6.30417C7.67142 6.4585 7.30939 6.69433 7.00714 6.99659C6.70488 7.29885 6.46904 7.66088 6.31471 8.0595C6.13927 8.52559 6.0448 9.01824 6.03538 9.51617C6.00671 10.1582 5.99805 10.3615 5.99805 11.9895C5.99805 13.6175 5.99805 13.8255 6.03538 14.4628C6.04538 14.9615 6.13938 15.4535 6.31471 15.9208C6.4693 16.3193 6.70531 16.6812 7.00767 16.9834C7.31003 17.2855 7.67209 17.5212 8.07071 17.6755C8.53567 17.8576 9.0283 17.9591 9.52738 17.9755C10.1694 18.0042 10.3727 18.0128 12.0007 18.0128C13.6287 18.0128 13.8374 18.0128 14.474 17.9755C14.9721 17.9657 15.465 17.8712 15.9314 17.6962C16.3298 17.5416 16.6917 17.3056 16.9939 17.0034C17.2962 16.7012 17.5321 16.3393 17.6867 15.9408C17.862 15.4742 17.956 14.9822 17.966 14.4828C17.9947 13.8415 18.0034 13.6382 18.0034 12.0095C18.002 10.3815 18.002 10.1748 17.9647 9.53684ZM11.996 15.0682C10.2934 15.0682 8.91405 13.6888 8.91405 11.9862C8.91405 10.2835 10.2934 8.90417 11.996 8.90417C12.8134 8.90417 13.5974 9.22888 14.1754 9.80687C14.7533 10.3849 15.078 11.1688 15.078 11.9862C15.078 12.8036 14.7533 13.5875 14.1754 14.1655C13.5974 14.7435 12.8134 15.0682 11.996 15.0682ZM15.2007 9.50884C14.8027 9.50884 14.482 9.1875 14.482 8.79017C14.482 8.69584 14.5006 8.60243 14.5367 8.51528C14.5728 8.42812 14.6257 8.34893 14.6924 8.28223C14.7591 8.21553 14.8383 8.16262 14.9255 8.12652C15.0126 8.09042 15.106 8.07184 15.2004 8.07184C15.2947 8.07184 15.3881 8.09042 15.4753 8.12652C15.5624 8.16262 15.6416 8.21553 15.7083 8.28223C15.775 8.34893 15.8279 8.42812 15.864 8.51528C15.9001 8.60243 15.9187 8.69584 15.9187 8.79017C15.9187 9.1875 15.5974 9.50884 15.2007 9.50884Z"
              fill="white"
            />
            <path
              d="M11.9961 13.9878C13.1018 13.9878 13.9981 13.0915 13.9981 11.9858C13.9981 10.8801 13.1018 9.98381 11.9961 9.98381C10.8905 9.98381 9.99414 10.8801 9.99414 11.9858C9.99414 13.0915 10.8905 13.9878 11.9961 13.9878Z"
              fill="white"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#37DAF3" />
            <path
              d="M19.7623 7.29115C19.2057 7.53781 18.6077 7.70448 17.979 7.77981C18.6277 7.39167 19.113 6.78079 19.3443 6.06115C18.7349 6.42314 18.0679 6.67794 17.3723 6.81448C16.9046 6.31506 16.285 5.98403 15.6099 5.87279C14.9347 5.76156 14.2417 5.87634 13.6385 6.19931C13.0353 6.52229 12.5555 7.03539 12.2738 7.65895C11.992 8.28251 11.924 8.98165 12.0803 9.64781C10.8455 9.58581 9.63742 9.26484 8.53462 8.70575C7.43181 8.14665 6.45889 7.36192 5.679 6.40248C5.41233 6.86248 5.259 7.39581 5.259 7.96381C5.2587 8.47514 5.38462 8.97864 5.62559 9.42963C5.86655 9.88063 6.21511 10.2652 6.64033 10.5491C6.14718 10.5335 5.66492 10.4002 5.23367 10.1605V10.2005C5.23362 10.9176 5.48169 11.6127 5.93579 12.1678C6.38989 12.7229 7.02205 13.1038 7.725 13.2458C7.26752 13.3696 6.78789 13.3879 6.32233 13.2991C6.52066 13.9162 6.907 14.4558 7.42724 14.8424C7.94749 15.229 8.57561 15.4433 9.22367 15.4551C8.12356 16.3188 6.76493 16.7872 5.36633 16.7851C5.11859 16.7852 4.87105 16.7707 4.625 16.7418C6.04465 17.6546 7.69723 18.139 9.385 18.1371C15.0983 18.1371 18.2217 13.4051 18.2217 9.30115C18.2217 9.16781 18.2183 9.03315 18.2123 8.89981C18.8199 8.46046 19.3443 7.91641 19.761 7.29315L19.7623 7.29115Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1
          className={`text-[#151875] ${josefinFont.className} text-[22px] leading-[25px] `}
        >
          Tags
        </h1>
        <div className="grid grid-cols-3 gap-2 items-center justify-center">
          <p
            className={`text-[#151875] ${lato.className} underline flex pl-3 items-center text-[14px] font-normal hover:text-[#F939BF] rounded-[3px] cursor-pointer h-[30px]`}
          >
            General
          </p>
          <p
            className={`text-[#151875] ${lato.className} underline flex pl-3 items-center text-[14px] font-normal hover:text-[#F939BF] rounded-[3px] cursor-pointer h-[30px]`}
          >
            Atsanil
          </p>
          <p
            className={`text-[#151875] ${lato.className} underline flex pl-3 items-center text-[14px] font-normal hover:text-[#F939BF] rounded-[3px] cursor-pointer h-[30px]`}
          >
            Insas.
          </p>
          <p
            className={`text-[#151875] ${lato.className} underline flex pl-3 items-center text-[14px] font-normal hover:text-[#F939BF] rounded-[3px] cursor-pointer h-[30px]`}
          >
            Bibsaas.
          </p>
          <p
            className={`text-[#151875] ${lato.className} underline flex pl-3 items-center text-[14px] font-normal hover:text-[#F939BF] rounded-[3px] cursor-pointer h-[30px]`}
          >
            Nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
