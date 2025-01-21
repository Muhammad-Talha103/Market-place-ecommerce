import Container from '@/shared/Container'
import Image from 'next/image'
import React from 'react'
import Image1 from '@/images/Partners.png'

const Partners = () => {
  return (
      <Container className='flex justify-center py-12'>
          <Image src={Image1} alt='Image1'/>
    </Container>
  )
}

export default Partners