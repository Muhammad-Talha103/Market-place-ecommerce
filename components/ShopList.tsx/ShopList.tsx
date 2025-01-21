import React from "react";
import Hero from "@/shared/HeroShared";
import Sort from "@/shared/Sort";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import Partner from "@/shared/Partners";
import Contant from "./Constant";
import image1 from "@/images/Constant1.png";
import image2 from "@/images/Constant2.png";
import image3 from "@/images/Constant3.png";
import image4 from "@/images/Constant4.png";
import image5 from "@/images/Constant5.png";
import image6 from "@/images/Constant6.png";
import image7 from "@/images/Constant7.png";

const ShopList = () => {
  const products = [
    { id: 1, tittle: "Accumsan tincidunt", price: 300, price1: "$52.00", image: image1 },
    { id: 2, tittle: "In nulla", price: 265, price1: "$52.00", image: image2 },
    { id: 3, tittle: "Vel sem", price: 295, price1: "$52.00", image: image3 },
    { id: 4, tittle: "Porttitor cum", price: 400, price1: "$52.00", image: image4 },
    { id: 5, tittle: "Nunc in", price: 200, price1: "$52.00", image: image5 },
    { id: 6, tittle: "Vitae facilisis", price: 260, price1: "$52.00", image: image6 },
    { id: 7, tittle: "Curabitur lectus", price: 130, price1: "$52.00", image: image7 },
  ];

  return (
    <div>
      <Hero heading="Shop List" tittle="Home . Pages ." text="Shop List" />
      <Sort
        heading="Ecommerce Acceories & Fashion item "
        about="About 9,620 results (0.62 seconds)"
        tittle="Per Page:"
        tittle1="Sort By:"
        tittle2="View:"
        icons={[<IoGrid key="grid" />, <FaList key="list" />]}
      />
      <div className="flex flex-col gap-8 ">
        {products.map((product) => (
          <Contant
            id={product.id}
            key={product.id}
            tittle={product.tittle}
            price={product.price}
            price1={product.price1}
            image={product.image}
          />
        ))}
      </div>
      <Partner />
    </div>
  );
};

export default ShopList;
