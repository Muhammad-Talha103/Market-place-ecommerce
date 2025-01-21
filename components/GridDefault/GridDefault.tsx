import React from "react";
import Hero from "@/shared/HeroShared";
import Sort from "@/shared/Sort";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import ShopGridItems from "./ShopGridItems";
import Container from "@/shared/Container";
import image1 from "@/images/Grid1.png";
import image2 from "@/images/Grid2.png";
import image3 from "@/images/Grid3.png";
import image4 from "@/images/Grid4.png";
import image5 from "@/images/Grid5.png";
import image6 from "@/images/Grid6.png";
import image7 from "@/images/Grid7.png";
import image8 from "@/images/Grid8.png";
import image9 from "@/images/Grid9.png";
import image10 from "@/images/Grid10.png";
import image11 from "@/images/Grid11.png";
import image12 from "@/images/Grid12.png";
import Partner from "@/shared/Partners";

const GridDeault = () => {
  const products = [
    { id: 119, tittle: "Vel elit euismod", price: 260, price1: "$42.00", image: image1 },
    { id: 120, tittle: "Ultricies condimentum imperdiet", price: 400, price1: "$42.00", image: image2 },
    { id: 121, tittle: "Vitae suspendisse sed", price: 370, price1: "$42.00", image: image3 },
    { id: 122, tittle: "Sed at fermentum", price: 180, price1: "$42.00", image: image4 },
    { id: 123, tittle: "Fusce pellentesque at", price: 250, price1: "$42.00", image: image5 },
    { id: 124, tittle: "Vestibulum magna laoreet", price: 370, price1: "$42.00", image: image6 },
    { id: 125, tittle: "Sollicitudin amet orci", price: 280, price1: "$42.00", image: image7 },
    { id: 126, tittle: "Ultrices mauris sit", price: 235, price1: "$42.00", image: image8 },
    { id: 127, tittle: "Pellentesque condimentum ac", price: 165, price1: "$42.00", image: image9 },
    { id: 128, tittle: "Cras scelerisque velit", price: 450, price1: "$42.00", image: image10 },
    { id: 129, tittle: "Lectus vulputate faucibus", price: 300, price1: "$42.00", image: image11 },
    { id: 130, tittle: "Purus risus, ut", price: 245, price1: "$42.00", image: image12 },
  ];

  return (
    <div>
      <Hero
        heading="Shop Grid Default"
        tittle="Home . Pages ."
        text="Shop Grid Default"
      />
      <Sort
        heading="Ecommerce Acceories & Fashion item "
        about="About 9,620 results (0.62 seconds)"
        tittle="Per Page:"
        tittle1="Sort By:"
        tittle2="View:"
        icons={[<IoGrid key="grid-icon" />, <FaList key="list-icon" />]}
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {products.map((product) => (
          <ShopGridItems
            id={product.id}
            key={product.id}
            tittle={product.tittle}
            price={product.price}
            price1={product.price1}
            image={product.image}
          />
        ))}
      </Container>
      <Partner />
    </div>
  );
};

export default GridDeault;
