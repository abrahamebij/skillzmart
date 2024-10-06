import React from "react";
import Img from "../components/Img";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "HP Pavilion Laptop",
    price: "$450",
    href: "#",
    category: "Electronics",
    img: "/hp.jpeg",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: "$150",
    href: "#",
    category: "Fashion",
    img: "/nike.jpeg",
  },
  {
    id: 3,
    name: "iPhone 12",
    price: "$799",
    href: "#",
    category: "Electronics",
    img: "/iphone.jpeg",
  },
];

const Products = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 items-center">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              img={product.img}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ name, img, href }) => {
  return (
    <Link
      href={href}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg mx-auto"
    >
      <Img
        className="rounded-t-lg h-56 w-full mx-auto"
        src={img}
        alt="product image"
      />
      <div className="flex justify-between items-center pt-5">
        <div className="px-5 pb-5">
          <h5 className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 text-gray-400 rtl:space-x-reverse">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="bg-primary text-gray-100 text-xs font-semibold px-2.5 py-0.5 rounded ms-3 inline-block w-fit">
              5.0
            </span>
          </div>
          <span className="text-3xl font-bold text-gray-900">$599</span>
        </div>
      </div>
    </Link>
  );
};

export default Products;
