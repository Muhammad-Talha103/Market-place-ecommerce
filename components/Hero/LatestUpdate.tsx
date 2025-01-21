import Image from 'next/image'
import React from 'react'
import Image1 from '@/images/LatestUpdateImg.png'
import { Josefin_Sans } from "next/font/google";
import Container from '@/shared/Container';
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const LatestUpdate = () => {
  return (
    <div className='py-16 h-[462px] relative'>
      <Image src={Image1} alt='Image1' className='w-full h-full object-cover' />
      <Container className='flex flex-col items-center w-full lg:w-[600px] h-auto lg:h-[185px] absolute top-[35%] left-[50%] transform -translate-x-1/2 md:w-[80%] sm:w-[90%]'>
          <h2 className={`${josefinFont.className} text-[#151875] px-5 text-[25px] lg:text-[35px] leading-[54px] text-center tracking-[1.5px] md:text-[30px] sm:text-[24px]`}>
            Get Latest Update By Subscribe Our Newsletter
          </h2>
        <button className={`${josefinFont.className} text-[16px] tracking-[2px] w-[173px] h-[49px] text-white rounded-[2px] bg-accent leading-[19.92px] md:w-[150px] sm:w-[140px] sm:h-[45px]`}>
          Shop Now
        </button>
      </Container>
    </div>
  )
}

export default LatestUpdate
