import Container from "@/shared/Container";
import React from "react";
import image1 from "@/images/BlogImg1.png";
import image2 from "@/images/SingleImg1.png";
import image3 from "@/images/SingleImg2.png";
import image4 from "@/images/SingleImg3.png";
import image5 from "@/images/SingleImg4.png";
import image6 from "@/images/SingleImg5.png";
import image7 from "@/images/SingleImg6.png";
import Sidebar from "@/components/Blogs/BlogsSideBar";
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

const Signle = () => {
  return (
    <div>
      <Container className="py-16">
        <div className="grid mdl:grid-cols-4 grid-cols-1 gap-5 px-3">
          <div className="col-span-3">
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
                  className={`${lato.className} text-[#8A8FB9] font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritatis natus.
                </p>
                <p
                  className={`${lato.className} text-[#8A8FB9] py-8 font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritati Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Incidunt similique
                  laudantium quis neque optio possimus, at fugit quos deleniti
                  voluptatum vitae illum itaque omnis cumque tempore iure.
                  Voluptas, deserunt minus.{" "}
                </p>

                <p
                  style={{ fontStyle: "italic" }}
                  className={`${josefinFont.className} border-l-[2px] border-l-[#FB2E86] text-[#8A8FB9] py-6 px-6 italic text-[18px] font-bold tracking-[2px] leading-[32px]`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <Image src={image2} alt="" />
                  <Image src={image3} alt="" />
                </div>
                <p
                  className={`${lato.className} text-[#8A8FB9] py-8 font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritati Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Incidunt similique
                  laudantium quis neque optio possimus, at fugit quos deleniti
                  voluptatum vitae illum itaque omnis cumque tempore iure.
                  Voluptas, deserunt minus.{" "}
                </p>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mdl:grid-cols-4 gap-4">
                  <div className="flex flex-col  gap-4 justify-center">
                    <Image src={image4} alt="" className="h-[254px]" />
                    <h3
                      className={`${josefinFont.className} pl-4  gap-5 font-bold text-[18px] leading-[21.6px] `}
                    >
                      Quam sed
                    </h3>
                    <p
                      className={`${josefinFont.className} flex justify-between text-[15px] leading-[16.4px]  text-[#151875] font-normal`}
                    >
                      $32.00
                      <span
                        className={`${josefinFont.className} line-through text-[15px] leading-[16.4px]  text-[#F701A8] font-normal`}
                      >
                        {" "}
                        $56.00
                      </span>{" "}
                      <span className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            width="11"
                            height="11"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                              fill="yellow"
                            />
                          </svg>
                        ))}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col  gap-4 justify-center">
                    <Image src={image5} alt="" className="h-[254px]" />
                    <h3
                      className={`${josefinFont.className} pl-4  gap-5 font-bold text-[18px] leading-[21.6px] `}
                    >
                      Tristique sed
                    </h3>
                    <p
                      className={`${josefinFont.className} flex  justify-between text-[15px] leading-[16.4px]  text-[#151875] font-normal`}
                    >
                      $32.00
                      <span
                        className={`${josefinFont.className} line-through text-[15px] leading-[16.4px]  text-[#F701A8] font-normal`}
                      >
                        {" "}
                        $56.00
                      </span>{" "}
                      <span className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            width="11"
                            height="11"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                              fill="yellow"
                            />
                          </svg>
                        ))}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col  gap-4 justify-center">
                    <Image src={image6} alt="" className="h-[254px]" />
                    <h3
                      className={`${josefinFont.className} pl-4  gap-5 font-bold text-[18px] leading-[21.6px] `}
                    >
                      A etiam
                    </h3>
                    <p
                      className={`${josefinFont.className} flex  justify-between text-[15px] leading-[16.4px]  text-[#151875] font-normal`}
                    >
                      $32.00
                      <span
                        className={`${josefinFont.className} line-through text-[15px] leading-[16.4px]  text-[#F701A8] font-normal`}
                      >
                        {" "}
                        $56.00
                      </span>{" "}
                      <span className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            width="11"
                            height="11"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                              fill="yellow"
                            />
                          </svg>
                        ))}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col  gap-4 justify-center">
                    <Image src={image7} alt="" className="h-[254px]" />
                    <h3
                      className={`${josefinFont.className} pl-4  gap-5 font-bold text-[18px] leading-[21.6px] `}
                    >
                      Mi nisi
                    </h3>
                    <p
                      className={`${josefinFont.className} flex justify-between text-[15px] leading-[16.4px]  text-[#151875] font-normal`}
                    >
                      $32.00
                      <span
                        className={`${josefinFont.className} line-through text-[15px] leading-[16.4px]  text-[#F701A8] font-normal`}
                      >
                        {" "}
                        $56.00
                      </span>{" "}
                      <span className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            width="11"
                            height="11"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                              fill="yellow"
                            />
                          </svg>
                        ))}
                      </span>
                    </p>
                  </div>
                </div>

                <p
                  className={`${lato.className} text-[#8A8FB9] py-8 font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritati Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Incidunt similique
                  laudantium quis neque optio possimus, at fugit quos deleniti
                  voluptatum vitae illum itaque omnis cumque tempore iure.
                  Voluptas, deserunt minus.{" "}
                </p>

                <p
                  className={`${lato.className} text-[#8A8FB9] py-8 font-normal  text-[16px] leading-[25px] `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quisquam ut cum veniam ex, a laudantium
                  voluptatibus, maxime, id illum corporis nobis mollitia
                  maiores! Quod eum rem aspernatur veritati Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Incidunt similique
                  laudantium quis neque optio possimus, at fugit quos deleniti
                  voluptatum vitae illum itaque omnis cumque tempore iure.
                  Voluptas, deserunt minus.{" "}
                </p>

                <div>
                  <div className="flex gap-4 items-center justify-center p-3">
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
                <div className="flex h-[45px] items-center px-4 bg-[#F7F8FB] justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.90215 0.825452L1.13398 4.57544C1.13376 4.57566 1.13358 4.57591 1.13333 4.57613C0.850927 4.85803 0.851829 5.3161 1.1334 5.59706C1.13362 5.59728 1.1338 5.59753 1.13405 5.59775L4.90223 9.34774C5.18452 9.62867 5.64116 9.62762 5.92212 9.34529C6.20308 9.063 6.202 8.6064 5.9197 8.32544L3.38975 5.80775L18.6623 5.80775C19.0606 5.80775 19.3834 5.48489 19.3834 5.0866C19.3834 4.6883 19.0606 4.36544 18.6623 4.36544L3.38975 4.36544L5.91963 1.84776C6.20192 1.5668 6.20301 1.1102 5.92205 0.827904C5.64105 0.545536 5.18441 0.544563 4.90215 0.825452Z"
                        fill="#8A8FB9"
                      />
                    </svg>

                    <h1
                      className={`${lato.className} text-[#8A8FB9] font-medium text-[16px] `}
                    >
                      Previous Post
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1
                      className={`${lato.className} text-[#8A8FB9] font-medium text-[16px] `}
                    >
                      Next Post
                    </h1>
                    <svg
                      width="19"
                      height="10"
                      viewBox="0 0 19 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.635 9.1942L18.4031 5.44421C18.4033 5.44399 18.4035 5.44374 18.4038 5.44352C18.6862 5.16163 18.6853 4.70355 18.4037 4.42259C18.4035 4.42237 18.4033 4.42212 18.4031 4.4219L14.6349 0.671911C14.3526 0.390986 13.896 0.392032 13.615 0.674363C13.334 0.956658 13.3351 1.41326 13.6174 1.69422L16.1474 4.2119L0.874836 4.2119C0.476543 4.2119 0.153683 4.53476 0.153683 4.93306C0.153683 5.33135 0.476543 5.65421 0.874836 5.65421L16.1474 5.65421L13.6175 8.1719C13.3352 8.45286 13.3341 8.90945 13.6151 9.19175C13.8961 9.47412 14.3527 9.47509 14.635 9.1942Z"
                        fill="#8A8FB9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="py-20">
                  <div className="flex items-center p-2 shadow gap-2">
                    <Image
                      src={image5}
                      alt="post"
                      className="w-[106px] h-[103px]"
                    />

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
              </div>
            </div>
          </div>
          <div className="">
            <Sidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signle;
