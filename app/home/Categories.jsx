import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaGears, FaHouse } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";

const categories = [
  {
    name: "Products",
    description:
      "Shop a variety of goods, from electronics and accessories to food, toiletries, and other essentials for student life.",
    icon: <IoCart />,
  },
  {
    name: "Events",
    description:
      "Stay up-to-date with campus events, workshops, and gatherings that bring the community together.",
    icon: <FaCalendarAlt />,
  },
  {
    name: "Skills",
    description:
      "Find talented students offering services like painting, graphic design, freelancing, electrical works and more.",
    icon: <FaGears />,
  },
  {
    name: "Housing",
    description:
      "Browse available hostels and apartments tailored to your needs and budgets.",
    icon: <FaHouse />,
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl pb-5 font-bold text-gray-800 text-center">
          Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 text-center mt-8">
          {categories.map((category, index) => (
            <div
              className="flex flex-col items-center gap-y-2 mx-auto"
              key={index}
            >
              <p className="text-primary text-4xl lg:text-5xl mb-2 md:mb-4">
                {category.icon}
              </p>
              <h2 className="text-lg lg:text-xl font-semibold">
                {category.name}
              </h2>
              <p className="text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
