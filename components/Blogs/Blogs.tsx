import Container from "../../shared/Container";
import React from "react";
import Hero from "@/shared/HeroShared";
import image1 from "@/images/BlogImg1.png";
import image2 from "@/images/BlogImg2.png";
import image3 from "@/images/BlogImg3.png";
import Image from "next/image";
import Link from "next/link";
import BlogSidebar from "./BlogsSideBar";
import { Josefin_Sans, Lato } from "next/font/google";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Blogspage = () => {
  return (
    <div>
      <Hero heading="Blog Page" tittle="Home . Page . " text="Blog Page" />
      <Container className="py-24">
        <div className="grid md:grid-cols-4 gap-5 px-1 xs:px-2 ssm:px-4 sm:px-5 md:px-6">
          <div className="col-span-3 ">
            <div className="flex flex-col gap-11">
              <div className=" h-[453px]">
                <Image src={image1} alt="" className="object-cover h-[453px]" />
              </div>
              <div className="flex gap-8  h-[23px] sm:w-[360px]  px-4 md:px-0 justify-between">
                <div className="flex gap-2  items-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.36065 0.333008L11.6673 3.64634L10.714 4.58634L7.41398 1.28634L8.36065 0.333008ZM0.333984 11.1863L4.66732 6.87301C4.60065 6.66634 4.64732 6.40634 4.82065 6.23301C5.08065 5.97301 5.50732 5.97301 5.76732 6.23301C6.02732 6.49967 6.02732 6.91967 5.76732 7.17968C5.59398 7.35301 5.33398 7.39967 5.12732 7.33301L0.813984 11.6663L7.88732 9.29967L10.2407 5.05967L6.94732 1.75967L2.70065 4.11301L0.333984 11.1863Z"
                      fill="#FB2E86"
                    />
                  </svg>
                  <h2
                    className={`${josefinFont.className} text-[14px] h-full w-[80px] sm:w-[160px] text-center rounded-[2px]  font-normal bg-[#FFE7F9]`}
                  >
                    Blog Title
                  </h2>
                </div>
                <div className=" flex gap-2 justify-center items-center">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00065 12.6667C7.13251 12.6667 7.2614 12.6276 7.37103 12.5543C7.48066 12.4811 7.56611 12.377 7.61657 12.2551C7.66703 12.1333 7.68023 11.9993 7.65451 11.87C7.62878 11.7406 7.56529 11.6219 7.47206 11.5286C7.37882 11.4354 7.26003 11.3719 7.13071 11.3462C7.00139 11.3204 6.86735 11.3336 6.74553 11.3841C6.62371 11.4346 6.51959 11.52 6.44634 11.6296C6.37308 11.7393 6.33398 11.8682 6.33398 12C6.33398 12.1768 6.40422 12.3464 6.52925 12.4714C6.65427 12.5964 6.82384 12.6667 7.00065 12.6667ZM10.334 12.6667C10.4658 12.6667 10.5947 12.6276 10.7044 12.5543C10.814 12.4811 10.8994 12.377 10.9499 12.2551C11.0004 12.1333 11.0136 11.9993 10.9878 11.87C10.9621 11.7406 10.8986 11.6219 10.8054 11.5286C10.7122 11.4354 10.5934 11.3719 10.464 11.3462C10.3347 11.3204 10.2007 11.3336 10.0789 11.3841C9.95705 11.4346 9.85293 11.52 9.77967 11.6296C9.70642 11.7393 9.66732 11.8682 9.66732 12C9.66732 12.1768 9.73756 12.3464 9.86258 12.4714C9.9876 12.5964 10.1572 12.6667 10.334 12.6667ZM10.334 10C10.4658 10 10.5947 9.96092 10.7044 9.88767C10.814 9.81441 10.8994 9.71029 10.9499 9.58848C11.0004 9.46666 11.0136 9.33261 10.9878 9.20329C10.9621 9.07397 10.8986 8.95518 10.8054 8.86195C10.7122 8.76871 10.5934 8.70522 10.464 8.6795C10.3347 8.65377 10.2007 8.66698 10.0789 8.71743C9.95705 8.76789 9.85293 8.85334 9.77967 8.96297C9.70642 9.07261 9.66732 9.2015 9.66732 9.33335C9.66732 9.51016 9.73756 9.67973 9.86258 9.80476C9.9876 9.92978 10.1572 10 10.334 10ZM7.00065 10C7.13251 10 7.2614 9.96092 7.37103 9.88767C7.48066 9.81441 7.56611 9.71029 7.61657 9.58848C7.66703 9.46666 7.68023 9.33261 7.65451 9.20329C7.62878 9.07397 7.56529 8.95518 7.47206 8.86195C7.37882 8.76871 7.26003 8.70522 7.13071 8.6795C7.00139 8.65377 6.86735 8.66698 6.74553 8.71743C6.62371 8.76789 6.51959 8.85334 6.44634 8.96297C6.37308 9.07261 6.33398 9.2015 6.33398 9.33335C6.33398 9.51016 6.40422 9.67973 6.52925 9.80476C6.65427 9.92978 6.82384 10 7.00065 10ZM11.6673 2.00002H11.0007V1.33335C11.0007 1.15654 10.9304 0.986973 10.8054 0.861949C10.6804 0.736925 10.5108 0.666687 10.334 0.666687C10.1572 0.666687 9.9876 0.736925 9.86258 0.861949C9.73756 0.986973 9.66732 1.15654 9.66732 1.33335V2.00002H4.33398V1.33335C4.33398 1.15654 4.26375 0.986973 4.13872 0.861949C4.0137 0.736925 3.84413 0.666687 3.66732 0.666687C3.49051 0.666687 3.32094 0.736925 3.19591 0.861949C3.07089 0.986973 3.00065 1.15654 3.00065 1.33335V2.00002H2.33398C1.80355 2.00002 1.29484 2.21073 0.919771 2.58581C0.544698 2.96088 0.333984 3.46959 0.333984 4.00002V13.3334C0.333984 13.8638 0.544698 14.3725 0.919771 14.7476C1.29484 15.1226 1.80355 15.3334 2.33398 15.3334H11.6673C12.1978 15.3334 12.7065 15.1226 13.0815 14.7476C13.4566 14.3725 13.6673 13.8638 13.6673 13.3334V4.00002C13.6673 3.46959 13.4566 2.96088 13.0815 2.58581C12.7065 2.21073 12.1978 2.00002 11.6673 2.00002ZM12.334 13.3334C12.334 13.5102 12.2637 13.6797 12.1387 13.8048C12.0137 13.9298 11.8441 14 11.6673 14H2.33398C2.15717 14 1.9876 13.9298 1.86258 13.8048C1.73756 13.6797 1.66732 13.5102 1.66732 13.3334V7.33335H12.334V13.3334ZM12.334 6.00002H1.66732V4.00002C1.66732 3.82321 1.73756 3.65364 1.86258 3.52862C1.9876 3.40359 2.15717 3.33335 2.33398 3.33335H3.00065V4.00002C3.00065 4.17683 3.07089 4.3464 3.19591 4.47142C3.32094 4.59645 3.49051 4.66669 3.66732 4.66669C3.84413 4.66669 4.0137 4.59645 4.13872 4.47142C4.26375 4.3464 4.33398 4.17683 4.33398 4.00002V3.33335H9.66732V4.00002C9.66732 4.17683 9.73756 4.3464 9.86258 4.47142C9.9876 4.59645 10.1572 4.66669 10.334 4.66669C10.5108 4.66669 10.6804 4.59645 10.8054 4.47142C10.9304 4.3464 11.0007 4.17683 11.0007 4.00002V3.33335H11.6673C11.8441 3.33335 12.0137 3.40359 12.1387 3.52862C12.2637 3.65364 12.334 3.82321 12.334 4.00002V6.00002ZM3.66732 10C3.79917 10 3.92807 9.96092 4.0377 9.88767C4.14733 9.81441 4.23278 9.71029 4.28324 9.58848C4.3337 9.46666 4.3469 9.33261 4.32117 9.20329C4.29545 9.07397 4.23196 8.95518 4.13872 8.86195C4.04549 8.76871 3.9267 8.70522 3.79738 8.6795C3.66806 8.65377 3.53401 8.66698 3.4122 8.71743C3.29038 8.76789 3.18626 8.85334 3.113 8.96297C3.03975 9.07261 3.00065 9.2015 3.00065 9.33335C3.00065 9.51016 3.07089 9.67973 3.19591 9.80476C3.32094 9.92978 3.49051 10 3.66732 10ZM3.66732 12.6667C3.79917 12.6667 3.92807 12.6276 4.0377 12.5543C4.14733 12.4811 4.23278 12.377 4.28324 12.2551C4.3337 12.1333 4.3469 11.9993 4.32117 11.87C4.29545 11.7406 4.23196 11.6219 4.13872 11.5286C4.04549 11.4354 3.9267 11.3719 3.79738 11.3462C3.66806 11.3204 3.53401 11.3336 3.4122 11.3841C3.29038 11.4346 3.18626 11.52 3.113 11.6296C3.03975 11.7393 3.00065 11.8682 3.00065 12C3.00065 12.1768 3.07089 12.3464 3.19591 12.4714C3.32094 12.5964 3.49051 12.6667 3.66732 12.6667Z"
                      fill="#FFA454"
                    />
                  </svg>
                  <h2
                    className={`${lato.className} text-[14px] h-full  w-[80px] sm:w-[160px] text-center rounded-[2px]  font-semibold bg-[#FFECE2]`}
                  >
                    Aug 09 2020
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h1
                  className={`${josefinFont.className} font-bold text-[30px] leading-[30px] `}
                >
                  Mauris at orci non vulputate diam tincidunt nec.
                </h1>
                <p
                  className={`${josefinFont.className} text-[#8A8FB9] font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritatis natus.
                </p>
                <Link href='/blogs/singleblogs'>
                  <p
                    className={`text-[#151875] items-center gap-1 flex ${lato.className} font-semibold text-[18px] leading-[25px] `}
                  >
                    Read More{" "}
                    <span
                      className={`bg-[#FB2E86]  items-center  rounded-full w-[12px] h-[12px]  `}
                    ></span>
                  </p>
                </Link>
                
              </div>
            </div>
            <div className="flex flex-col gap-11">
              <div className=" h-[453px]">
                <Image src={image2} alt="" className="object-cover h-[453px]" />
              </div>
              <div className="flex gap-8  h-[23px] sm:w-[360px]  px-4 md:px-0 justify-between">
                <div className="flex gap-2  items-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.36065 0.333008L11.6673 3.64634L10.714 4.58634L7.41398 1.28634L8.36065 0.333008ZM0.333984 11.1863L4.66732 6.87301C4.60065 6.66634 4.64732 6.40634 4.82065 6.23301C5.08065 5.97301 5.50732 5.97301 5.76732 6.23301C6.02732 6.49967 6.02732 6.91967 5.76732 7.17968C5.59398 7.35301 5.33398 7.39967 5.12732 7.33301L0.813984 11.6663L7.88732 9.29967L10.2407 5.05967L6.94732 1.75967L2.70065 4.11301L0.333984 11.1863Z"
                      fill="#FB2E86"
                    />
                  </svg>
                  <h2
                    className={`${josefinFont.className} text-[14px] h-full w-[80px] sm:w-[160px] text-center rounded-[2px]  font-normal bg-[#FFE7F9]`}
                  >
                    Blog Title
                  </h2>
                </div>
                <div className=" flex gap-2 justify-center items-center">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00065 12.6667C7.13251 12.6667 7.2614 12.6276 7.37103 12.5543C7.48066 12.4811 7.56611 12.377 7.61657 12.2551C7.66703 12.1333 7.68023 11.9993 7.65451 11.87C7.62878 11.7406 7.56529 11.6219 7.47206 11.5286C7.37882 11.4354 7.26003 11.3719 7.13071 11.3462C7.00139 11.3204 6.86735 11.3336 6.74553 11.3841C6.62371 11.4346 6.51959 11.52 6.44634 11.6296C6.37308 11.7393 6.33398 11.8682 6.33398 12C6.33398 12.1768 6.40422 12.3464 6.52925 12.4714C6.65427 12.5964 6.82384 12.6667 7.00065 12.6667ZM10.334 12.6667C10.4658 12.6667 10.5947 12.6276 10.7044 12.5543C10.814 12.4811 10.8994 12.377 10.9499 12.2551C11.0004 12.1333 11.0136 11.9993 10.9878 11.87C10.9621 11.7406 10.8986 11.6219 10.8054 11.5286C10.7122 11.4354 10.5934 11.3719 10.464 11.3462C10.3347 11.3204 10.2007 11.3336 10.0789 11.3841C9.95705 11.4346 9.85293 11.52 9.77967 11.6296C9.70642 11.7393 9.66732 11.8682 9.66732 12C9.66732 12.1768 9.73756 12.3464 9.86258 12.4714C9.9876 12.5964 10.1572 12.6667 10.334 12.6667ZM10.334 10C10.4658 10 10.5947 9.96092 10.7044 9.88767C10.814 9.81441 10.8994 9.71029 10.9499 9.58848C11.0004 9.46666 11.0136 9.33261 10.9878 9.20329C10.9621 9.07397 10.8986 8.95518 10.8054 8.86195C10.7122 8.76871 10.5934 8.70522 10.464 8.6795C10.3347 8.65377 10.2007 8.66698 10.0789 8.71743C9.95705 8.76789 9.85293 8.85334 9.77967 8.96297C9.70642 9.07261 9.66732 9.2015 9.66732 9.33335C9.66732 9.51016 9.73756 9.67973 9.86258 9.80476C9.9876 9.92978 10.1572 10 10.334 10ZM7.00065 10C7.13251 10 7.2614 9.96092 7.37103 9.88767C7.48066 9.81441 7.56611 9.71029 7.61657 9.58848C7.66703 9.46666 7.68023 9.33261 7.65451 9.20329C7.62878 9.07397 7.56529 8.95518 7.47206 8.86195C7.37882 8.76871 7.26003 8.70522 7.13071 8.6795C7.00139 8.65377 6.86735 8.66698 6.74553 8.71743C6.62371 8.76789 6.51959 8.85334 6.44634 8.96297C6.37308 9.07261 6.33398 9.2015 6.33398 9.33335C6.33398 9.51016 6.40422 9.67973 6.52925 9.80476C6.65427 9.92978 6.82384 10 7.00065 10ZM11.6673 2.00002H11.0007V1.33335C11.0007 1.15654 10.9304 0.986973 10.8054 0.861949C10.6804 0.736925 10.5108 0.666687 10.334 0.666687C10.1572 0.666687 9.9876 0.736925 9.86258 0.861949C9.73756 0.986973 9.66732 1.15654 9.66732 1.33335V2.00002H4.33398V1.33335C4.33398 1.15654 4.26375 0.986973 4.13872 0.861949C4.0137 0.736925 3.84413 0.666687 3.66732 0.666687C3.49051 0.666687 3.32094 0.736925 3.19591 0.861949C3.07089 0.986973 3.00065 1.15654 3.00065 1.33335V2.00002H2.33398C1.80355 2.00002 1.29484 2.21073 0.919771 2.58581C0.544698 2.96088 0.333984 3.46959 0.333984 4.00002V13.3334C0.333984 13.8638 0.544698 14.3725 0.919771 14.7476C1.29484 15.1226 1.80355 15.3334 2.33398 15.3334H11.6673C12.1978 15.3334 12.7065 15.1226 13.0815 14.7476C13.4566 14.3725 13.6673 13.8638 13.6673 13.3334V4.00002C13.6673 3.46959 13.4566 2.96088 13.0815 2.58581C12.7065 2.21073 12.1978 2.00002 11.6673 2.00002ZM12.334 13.3334C12.334 13.5102 12.2637 13.6797 12.1387 13.8048C12.0137 13.9298 11.8441 14 11.6673 14H2.33398C2.15717 14 1.9876 13.9298 1.86258 13.8048C1.73756 13.6797 1.66732 13.5102 1.66732 13.3334V7.33335H12.334V13.3334ZM12.334 6.00002H1.66732V4.00002C1.66732 3.82321 1.73756 3.65364 1.86258 3.52862C1.9876 3.40359 2.15717 3.33335 2.33398 3.33335H3.00065V4.00002C3.00065 4.17683 3.07089 4.3464 3.19591 4.47142C3.32094 4.59645 3.49051 4.66669 3.66732 4.66669C3.84413 4.66669 4.0137 4.59645 4.13872 4.47142C4.26375 4.3464 4.33398 4.17683 4.33398 4.00002V3.33335H9.66732V4.00002C9.66732 4.17683 9.73756 4.3464 9.86258 4.47142C9.9876 4.59645 10.1572 4.66669 10.334 4.66669C10.5108 4.66669 10.6804 4.59645 10.8054 4.47142C10.9304 4.3464 11.0007 4.17683 11.0007 4.00002V3.33335H11.6673C11.8441 3.33335 12.0137 3.40359 12.1387 3.52862C12.2637 3.65364 12.334 3.82321 12.334 4.00002V6.00002ZM3.66732 10C3.79917 10 3.92807 9.96092 4.0377 9.88767C4.14733 9.81441 4.23278 9.71029 4.28324 9.58848C4.3337 9.46666 4.3469 9.33261 4.32117 9.20329C4.29545 9.07397 4.23196 8.95518 4.13872 8.86195C4.04549 8.76871 3.9267 8.70522 3.79738 8.6795C3.66806 8.65377 3.53401 8.66698 3.4122 8.71743C3.29038 8.76789 3.18626 8.85334 3.113 8.96297C3.03975 9.07261 3.00065 9.2015 3.00065 9.33335C3.00065 9.51016 3.07089 9.67973 3.19591 9.80476C3.32094 9.92978 3.49051 10 3.66732 10ZM3.66732 12.6667C3.79917 12.6667 3.92807 12.6276 4.0377 12.5543C4.14733 12.4811 4.23278 12.377 4.28324 12.2551C4.3337 12.1333 4.3469 11.9993 4.32117 11.87C4.29545 11.7406 4.23196 11.6219 4.13872 11.5286C4.04549 11.4354 3.9267 11.3719 3.79738 11.3462C3.66806 11.3204 3.53401 11.3336 3.4122 11.3841C3.29038 11.4346 3.18626 11.52 3.113 11.6296C3.03975 11.7393 3.00065 11.8682 3.00065 12C3.00065 12.1768 3.07089 12.3464 3.19591 12.4714C3.32094 12.5964 3.49051 12.6667 3.66732 12.6667Z"
                      fill="#FFA454"
                    />
                  </svg>
                  <h2
                    className={`${lato.className} text-[14px] h-full  w-[80px] sm:w-[160px] text-center rounded-[2px]  font-semibold bg-[#FFECE2]`}
                  >
                    Aug 09 2020
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h1
                  className={`${josefinFont.className} font-bold text-[30px] leading-[30px] `}
                >
                  Aenean vitae in aliquam ultrices lectus. Etiam.
                </h1>
                <p
                  className={`${josefinFont.className} text-[#8A8FB9] font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritatis natus.
                </p>
                <Link href={""}>
                  <p
                    className={`text-[#151875] items-center gap-1 flex ${lato.className} font-semibold text-[18px] leading-[25px] `}
                  >
                    Read More{" "}
                    <span
                      className={`bg-[#FB2E86]  items-center  rounded-full w-[12px] h-[12px]  `}
                    ></span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-11">
              <div className=" h-[453px]">
                <Image src={image3} alt="" className="object-cover h-[453px]" />
              </div>
              <div className="flex gap-8  h-[23px] sm:w-[360px]  px-4 md:px-0 justify-between">
                <div className="flex gap-2  items-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.36065 0.333008L11.6673 3.64634L10.714 4.58634L7.41398 1.28634L8.36065 0.333008ZM0.333984 11.1863L4.66732 6.87301C4.60065 6.66634 4.64732 6.40634 4.82065 6.23301C5.08065 5.97301 5.50732 5.97301 5.76732 6.23301C6.02732 6.49967 6.02732 6.91967 5.76732 7.17968C5.59398 7.35301 5.33398 7.39967 5.12732 7.33301L0.813984 11.6663L7.88732 9.29967L10.2407 5.05967L6.94732 1.75967L2.70065 4.11301L0.333984 11.1863Z"
                      fill="#FB2E86"
                    />
                  </svg>
                  <h2
                    className={`${josefinFont.className} text-[14px] h-full w-[80px] sm:w-[160px] text-center rounded-[2px]  font-normal bg-[#FFE7F9]`}
                  >
                    Blog Title
                  </h2>
                </div>
                <div className=" flex gap-2 justify-center items-center">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00065 12.6667C7.13251 12.6667 7.2614 12.6276 7.37103 12.5543C7.48066 12.4811 7.56611 12.377 7.61657 12.2551C7.66703 12.1333 7.68023 11.9993 7.65451 11.87C7.62878 11.7406 7.56529 11.6219 7.47206 11.5286C7.37882 11.4354 7.26003 11.3719 7.13071 11.3462C7.00139 11.3204 6.86735 11.3336 6.74553 11.3841C6.62371 11.4346 6.51959 11.52 6.44634 11.6296C6.37308 11.7393 6.33398 11.8682 6.33398 12C6.33398 12.1768 6.40422 12.3464 6.52925 12.4714C6.65427 12.5964 6.82384 12.6667 7.00065 12.6667ZM10.334 12.6667C10.4658 12.6667 10.5947 12.6276 10.7044 12.5543C10.814 12.4811 10.8994 12.377 10.9499 12.2551C11.0004 12.1333 11.0136 11.9993 10.9878 11.87C10.9621 11.7406 10.8986 11.6219 10.8054 11.5286C10.7122 11.4354 10.5934 11.3719 10.464 11.3462C10.3347 11.3204 10.2007 11.3336 10.0789 11.3841C9.95705 11.4346 9.85293 11.52 9.77967 11.6296C9.70642 11.7393 9.66732 11.8682 9.66732 12C9.66732 12.1768 9.73756 12.3464 9.86258 12.4714C9.9876 12.5964 10.1572 12.6667 10.334 12.6667ZM10.334 10C10.4658 10 10.5947 9.96092 10.7044 9.88767C10.814 9.81441 10.8994 9.71029 10.9499 9.58848C11.0004 9.46666 11.0136 9.33261 10.9878 9.20329C10.9621 9.07397 10.8986 8.95518 10.8054 8.86195C10.7122 8.76871 10.5934 8.70522 10.464 8.6795C10.3347 8.65377 10.2007 8.66698 10.0789 8.71743C9.95705 8.76789 9.85293 8.85334 9.77967 8.96297C9.70642 9.07261 9.66732 9.2015 9.66732 9.33335C9.66732 9.51016 9.73756 9.67973 9.86258 9.80476C9.9876 9.92978 10.1572 10 10.334 10ZM7.00065 10C7.13251 10 7.2614 9.96092 7.37103 9.88767C7.48066 9.81441 7.56611 9.71029 7.61657 9.58848C7.66703 9.46666 7.68023 9.33261 7.65451 9.20329C7.62878 9.07397 7.56529 8.95518 7.47206 8.86195C7.37882 8.76871 7.26003 8.70522 7.13071 8.6795C7.00139 8.65377 6.86735 8.66698 6.74553 8.71743C6.62371 8.76789 6.51959 8.85334 6.44634 8.96297C6.37308 9.07261 6.33398 9.2015 6.33398 9.33335C6.33398 9.51016 6.40422 9.67973 6.52925 9.80476C6.65427 9.92978 6.82384 10 7.00065 10ZM11.6673 2.00002H11.0007V1.33335C11.0007 1.15654 10.9304 0.986973 10.8054 0.861949C10.6804 0.736925 10.5108 0.666687 10.334 0.666687C10.1572 0.666687 9.9876 0.736925 9.86258 0.861949C9.73756 0.986973 9.66732 1.15654 9.66732 1.33335V2.00002H4.33398V1.33335C4.33398 1.15654 4.26375 0.986973 4.13872 0.861949C4.0137 0.736925 3.84413 0.666687 3.66732 0.666687C3.49051 0.666687 3.32094 0.736925 3.19591 0.861949C3.07089 0.986973 3.00065 1.15654 3.00065 1.33335V2.00002H2.33398C1.80355 2.00002 1.29484 2.21073 0.919771 2.58581C0.544698 2.96088 0.333984 3.46959 0.333984 4.00002V13.3334C0.333984 13.8638 0.544698 14.3725 0.919771 14.7476C1.29484 15.1226 1.80355 15.3334 2.33398 15.3334H11.6673C12.1978 15.3334 12.7065 15.1226 13.0815 14.7476C13.4566 14.3725 13.6673 13.8638 13.6673 13.3334V4.00002C13.6673 3.46959 13.4566 2.96088 13.0815 2.58581C12.7065 2.21073 12.1978 2.00002 11.6673 2.00002ZM12.334 13.3334C12.334 13.5102 12.2637 13.6797 12.1387 13.8048C12.0137 13.9298 11.8441 14 11.6673 14H2.33398C2.15717 14 1.9876 13.9298 1.86258 13.8048C1.73756 13.6797 1.66732 13.5102 1.66732 13.3334V7.33335H12.334V13.3334ZM12.334 6.00002H1.66732V4.00002C1.66732 3.82321 1.73756 3.65364 1.86258 3.52862C1.9876 3.40359 2.15717 3.33335 2.33398 3.33335H3.00065V4.00002C3.00065 4.17683 3.07089 4.3464 3.19591 4.47142C3.32094 4.59645 3.49051 4.66669 3.66732 4.66669C3.84413 4.66669 4.0137 4.59645 4.13872 4.47142C4.26375 4.3464 4.33398 4.17683 4.33398 4.00002V3.33335H9.66732V4.00002C9.66732 4.17683 9.73756 4.3464 9.86258 4.47142C9.9876 4.59645 10.1572 4.66669 10.334 4.66669C10.5108 4.66669 10.6804 4.59645 10.8054 4.47142C10.9304 4.3464 11.0007 4.17683 11.0007 4.00002V3.33335H11.6673C11.8441 3.33335 12.0137 3.40359 12.1387 3.52862C12.2637 3.65364 12.334 3.82321 12.334 4.00002V6.00002ZM3.66732 10C3.79917 10 3.92807 9.96092 4.0377 9.88767C4.14733 9.81441 4.23278 9.71029 4.28324 9.58848C4.3337 9.46666 4.3469 9.33261 4.32117 9.20329C4.29545 9.07397 4.23196 8.95518 4.13872 8.86195C4.04549 8.76871 3.9267 8.70522 3.79738 8.6795C3.66806 8.65377 3.53401 8.66698 3.4122 8.71743C3.29038 8.76789 3.18626 8.85334 3.113 8.96297C3.03975 9.07261 3.00065 9.2015 3.00065 9.33335C3.00065 9.51016 3.07089 9.67973 3.19591 9.80476C3.32094 9.92978 3.49051 10 3.66732 10ZM3.66732 12.6667C3.79917 12.6667 3.92807 12.6276 4.0377 12.5543C4.14733 12.4811 4.23278 12.377 4.28324 12.2551C4.3337 12.1333 4.3469 11.9993 4.32117 11.87C4.29545 11.7406 4.23196 11.6219 4.13872 11.5286C4.04549 11.4354 3.9267 11.3719 3.79738 11.3462C3.66806 11.3204 3.53401 11.3336 3.4122 11.3841C3.29038 11.4346 3.18626 11.52 3.113 11.6296C3.03975 11.7393 3.00065 11.8682 3.00065 12C3.00065 12.1768 3.07089 12.3464 3.19591 12.4714C3.32094 12.5964 3.49051 12.6667 3.66732 12.6667Z"
                      fill="#FFA454"
                    />
                  </svg>
                  <h2
                    className={`${lato.className} text-[14px] h-full  w-[80px] sm:w-[160px] text-center rounded-[2px]  font-semibold bg-[#FFECE2]`}
                  >
                    Aug 09 2020
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h1
                  className={`${josefinFont.className} font-bold text-[30px] leading-[30px] `}
                >
                  Sit nam congue feugiat nisl, mauris amet nisi.
                </h1>
                <p
                  className={`${josefinFont.className} text-[#8A8FB9] font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritatis natus.
                </p>
                <Link href={""}>
                  <p
                    className={`text-[#151875] items-center gap-1 flex ${lato.className} font-semibold text-[18px] leading-[25px] `}
                  >
                    Read More{" "}
                    <span
                      className={`bg-[#FB2E86]  items-center  rounded-full w-[12px] h-[12px]  `}
                    ></span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <BlogSidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogspage;
