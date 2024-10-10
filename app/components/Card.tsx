import React from "react";
import Img from "../components/Img";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Card = ({
  name,
  img,
  href,
  price,
  containerClassName,
}: {
  name: string;
  img: string;
  href: string;
  price: number;
  containerClassName?: string;
}) => {
  return (
    <Link
      href={href}
      className={`w-4/5 inline-block the-card scale-75 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg mx-auto ${containerClassName}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Img
          className="rounded-t-lg !h-64 w-full mx-auto"
          src={img}
          alt="product image"
          priority={false}
          props={{}}
        />
      </div>
      {/* Decription */}
      <div className="flex justify-between px-5 items-center py-5">
        <div className="flex flex-col items-start">
          {/* Product Name */}
          <h5
            className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-900"
            id="title"
          >
            {name}
          </h5>
          {/* Stars And Ratings */}
          <div className="flex items-center mt-2">
            {/* Stars */}
            <div className="flex items-center space-x-1 text-gray-400 rtl:space-x-reverse">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* Ratings */}
            <span className="bg-primary text-gray-100 text-xs font-semibold px-2.5 py-0.5 rounded ms-3 inline-block w-fit">
              5.0
            </span>
          </div>
        </div>
        {/* Price */}
        <div className="w-fit">
          <span className="text-xl lg:text-2xl font-bold text-gray-600">
            ₦{price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
