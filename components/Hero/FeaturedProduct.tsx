'use client';
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Container from "@/shared/Container";
import Image, { StaticImageData } from "next/image";
import { IoSearch } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { client } from "@/sanity-migration/sanityClient";
import { urlFor } from "../../sanity/lib/image";
import { addToCart } from "@/redux/productSlice";
import { addToWishlist } from "@/redux/wishlistSlice";
import { addToSingleProduct } from "@/redux/singleProduct";
import { Josefin_Sans, Lato } from "next/font/google";

// Define the product type structure
interface Product {
  _id: number;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<Product[]>([]);

  const handleAddToCart = (item: Product) => {
    dispatch(
      addToCart({
        id: item._id,
        title: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      })
    );
    // Display a success message or toast to indicate the product has been added
    alert(`${item.name} has been added to your cart!`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][0..3]{ 
        _id, 
        name, 
        image, 
        price, 
        description, 
        discountPercentage, 
        isFeaturedProduct, 
        stockLevel, 
        category 
      }`;
      const fetchedProducts: Product[] = await client.fetch(query); // Explicitly define type here
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <Container className="py-24 w-full flex flex-col items-center">
      <h2
        className={`${josefinFont.className} text-center pb-6 text-[#1A0B5B] text-[36px] xsm:text-[42px] font-bold leading-[49.22px] tracking-[1.5px]`}
      >
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lgl:grid-cols-4 gap-4">
        {products.map((item) => (
          <div key={item._id} className="w-[270px] h-[370px] flex flex-col shadow-xl group relative">
            <div className="h-[245px] bg-[#f6f7fb] w-full flex items-center justify-center">
              <Image
                src={urlFor(item.image).width(178).height(178).url()}
                alt={item.name}
                className="w-[178px] h-[178px]"
                width={178}
                height={178}
              />
            </div>
            <button
              className={`${josefinFont.className} rounded-[2px] bg-[#08D15F] hidden group-hover:block absolute top-[212px] left-[95px] w-[94px] h-[29px] text-white text-[12px] font-medium`}
            >
              View Details
            </button>
            <div className="w-[100px] z-50 h-[30px] absolute top-[9px] left-2 hidden group-hover:flex justify-between items-center">
              <span
                onClick={() => handleAddToCart(item)}
                className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer"
              >
                <BsCart size={19} />
              </span>
              <span
                onClick={() =>
                  dispatch(
                    addToWishlist({
                      id: item._id,
                      title: item.name,
                      price: item.price,
                      img: item.image,
                      quantity: 1,
                    })
                  )
                }
                className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer"
              >
                <CiHeart size={20} />
              </span>
              <Link
                href="/productsDetails"
                onClick={() =>
                  dispatch(
                    addToSingleProduct({
                      id: item._id,
                      name: item.name,
                      description: item.description,
                      newPrice: item.price,
                      category: item.category,
                      image: item.image,
                      stock: item.stockLevel,
                    })
                  )
                }
                className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer"
              >
                <IoSearch size={19} />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-between h-[125px] py-2 group-hover:bg-[#2F1AC4]">
              <h3
                className={`${lato.className} font-bold text-[18px] leading-[21.6px] text-accent`}
              >
                {item.name}
              </h3>
              <div className="w-[52px] h-[4px] flex items-center justify-between">
                <span className="w-[14px] h-[4px] rounded-[4px] bg-[#05E6B7]" />
                <span className="w-[14px] h-[4px] rounded-[4px] bg-[#F701A8]" />
                <span className="w-[14px] h-[4px] rounded-[4px] bg-[#00009D]" />
              </div>
              <p
                className={`${josefinFont.className} text-[14px] leading-[16.4px] group-hover:text-white text-[#151875]`}
              >
                Stock - {item.stockLevel}
              </p>
              <p
                className={`${josefinFont.className} text-[14px] leading-[16.4px] group-hover:text-white text-[#151875] font-normal`}
              >
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedProduct;
