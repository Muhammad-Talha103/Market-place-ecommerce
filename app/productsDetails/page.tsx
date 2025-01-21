
import React from 'react'
import ProductsDetails from './ProductDetails'
import ProductsDetailsP2 from './ProductsDetailsP2'
import ProductsDetailsP3 from './ProductsDetailsP3'
import Partners from './Partners'
import HeroShared from '@/shared/HeroShared'

const Home = () => {
  return (
    <div>
      <HeroShared heading='Product Details' tittle='Home . Page' text='Product Details'/> 
          <ProductsDetails/>
      <ProductsDetailsP2 />
      <ProductsDetailsP3 />
      <Partners/>
    </div>
  )
}

export default Home