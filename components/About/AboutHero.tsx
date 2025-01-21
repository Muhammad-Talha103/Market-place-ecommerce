import React from 'react'
import Feature from './Feture'
import Container from '@/shared/Container';
import { Josefin_Sans, Lato } from "next/font/google";
import Image1 from "@/images/about.png";
import Image from 'next/image';
import OurClient from './OurClient';
import Hero from '@/shared/HeroShared';
const josefinFont = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
  const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
const About = () => {
  return (
    <>
    <Hero heading='About Us' tittle='Home . Page .' text='About Us'/>
    <Container className="py-12">
      <div className="flex items-center flex-col md:flex-row gap-2">
        <div>
          <div className="lg:h-[400px] w-full lg:w-[570px] relative">
            <Image
              src={Image1}
              alt="Image 1"
              className="rounded-[6px] lg:h-[390px] w-full object-cover lg:w-[555px] "
            />
            <span className="bg-[#2B3CAB] lg:w-[552px] lg:h-[409px] h-auto w-auto absolute top-2 rounded-[6px] -left-4 -z-10" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2
            className={`${josefinFont.className} text-[36px] leading-[48px] text-[#151875] w-auto lg:w-[522px]`}
          >
            Know About Our Ecomerce Business, History
          </h2>
          <p
            className={`${lato.className} text-[16px] font-semibold leading-[25.5px] text-[#8A8FB9]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button
            className={`${lato.className} mt-8 bg-accent w-[145px] h-[44px] rounded-[3px] text-[18px] font-semibold text-white  `}
          >
            Contact us
          </button>
        </div>
          </div>
          <div className="py-24">
              <Feature/>
          </div>
          <div className="py-4">
              <OurClient/>
          </div>
    </Container>
    </>
  )
}

export default About