import React from "react";
import Hero from "./Hero";
import FeaturedProduct from "./FeaturedProduct";
import LatestProducts from "./LatestProducts";
import ShopexOffer from "./ShopexOffer";
import UniqueFeatures from "./UniqueFeatures";
import TrendingProducts from "./TrendingProducts";
import TrendingProducts2 from "./TrendingProducts2";
import DiscountItem from "./DiscountItem";
import TopCategories from "./TopCategories";
import LatestUpdate from "./LatestUpdate";
import Partners from "./Partners";
import LatestBlogs from "./LatestBlogs";

const HeroMain = () => {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <LatestProducts />
      <ShopexOffer />
      <UniqueFeatures />
      <TrendingProducts />
      <TrendingProducts2 />
      <DiscountItem />
      <TopCategories />
      <LatestUpdate />
      <Partners />
      <LatestBlogs/>
    </div>
  );
};

export default HeroMain;
