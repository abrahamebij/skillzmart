import Link from "next/link";
import React from "react";
import Img from "../components/Img";

const featuredProducts = [
  {
    id: 1,
    name: "HP Pavilion Laptop",
    price: "$450",
    category: "Electronics",
    image: "/hp.jpeg",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: "$150",
    category: "Fashion",
    image: "/nike.jpeg",
  },
  {
    id: 3,
    name: "iPhone 12",
    price: "$799",
    category: "Electronics",
    image: "/iphone.jpeg",
  },
];

const Products = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow rounded-lg">
              <Img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="mt-2 text-gray-600">Price: {product.price}</p>
              <Link href={`/product/${product.id}`}>
                <p className="mt-4 inline-block text-indigo-600 hover:text-indigo-400">
                  View Details &rarr;
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
