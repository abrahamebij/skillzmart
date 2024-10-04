import Link from "next/link";
import React from "react";

const categories = [
  {
    name: "Electronics",
    description: "Laptops, Phones, Accessories",
    slug: "electronics",
  },
  {
    name: "Fashion",
    description: "Clothes, Shoes, Accessories",
    slug: "fashion",
  },
  {
    name: "Skills",
    description: "Tutoring, Graphic Design, Freelancing",
    slug: "skills",
  },
  { name: "Housing", description: "Hostels, Apartments", slug: "housing" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Browse Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              className="block bg-white p-6 rounded-lg shadow-md text-center hover:bg-gray-100"
              href={`/categories/${category.slug}`}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h3>
              <p className="mt-2 text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
