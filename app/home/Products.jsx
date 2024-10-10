"use client";
import React from "react";
import Card from "../components/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const featuredProducts = [
  {
    id: 1,
    name: "HP Pavilion Laptop",
    price: 450,
    href: "something",
    category: "Electronics",
    img: "/hp.jpeg",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 150,
    href: "something",
    category: "Fashion",
    img: "/nike.jpeg",
  },
  {
    id: 3,
    name: "iPhone 12",
    price: 799,
    href: "something",
    category: "Electronics",
    img: "/iphone.jpeg",
  },
];

const Products = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold pb-5 text-gray-800 text-center">
          Featured Products
        </h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 items-center"> */}
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          centerSlidePercentage={window.innerWidth > 768 ? 38 : 100}
          // showArrows={false}
          centerMode={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          stopOnHover={false}
        >
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              img={product.img}
              href={`/products/${product.href}`}
              price={product.price}
              // containerClassName="md:scale-50 lg:scale-75"
            />
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Products;
