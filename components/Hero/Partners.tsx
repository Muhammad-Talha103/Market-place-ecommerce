import Container from '@/shared/Container'
import Image from 'next/image'
import React from 'react'
import Image1 from '@/images/Partners.png'
const Partners = () => {
  return (
      <Container className='py-14 flex items-center justify-center'>
          <Image src={Image1} alt='Image1' className='h-[93px]'/>
    </Container>
  )
}

export default Partners