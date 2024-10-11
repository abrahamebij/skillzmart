"use client";
import { useState } from "react";
import Card from "../components/Card";

const mockProducts = [
  {
    id: 1,
    title: "HP Pavilion Laptop",
    category: "Electronics",
    price: 50000,
    image: "/hp.jpeg",
  },
  {
    id: 2,
    title: "iPhone 12",
    category: "Electronics",
    price: 79900,
    image: "/iphone.jpeg",
  },
  {
    id: 3,
    title: "Nike Air Max",
    category: "Fashion",
    price: 15000,
    image: "/nike.jpeg",
  },
  {
    id: 4,
    title: "Toiletries Bundle",
    category: "Essentials",
    price: 3000,
    image: "/tissue.jpeg",
  },
  // Add more products as needed
];

const ProductsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      mockProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-tertiary py-16 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">Search Products</h1>
          <p className="mt-3 text-lg text-gray-500">
            Find the best deals across categories like Electronics, Fashion, and
            more.
          </p>
          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </header>

      {/* Product Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-8">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  name={product.title}
                  img={product.image}
                  href={`products/${product.id}`}
                  price={product.price}
                  containerClassName=""
                />
                // <div
                //   key={product.id}
                //   className="bg-white p-6 shadow rounded-lg"
                // >
                //   <Img
                //     src={product.image}
                //     alt={product.title}
                //     className="w-full h-48 object-cover rounded-md"
                //   />
                //   <h3 className="mt-4 text-lg font-semibold text-gray-800">
                //     {product.title}
                //   </h3>
                //   <p className="mt-2 text-gray-600">Price: ₦{product.price}</p>
                //   <p className="mt-2 text-gray-500">
                //     Category: {product.category}
                //   </p>
                //   <Link href={`/products/${product.id}`}>
                //     <p className="mt-4 inline-block text-indigo-600 hover:text-indigo-400">
                //       View Details &rarr;
                //     </p>
                //   </Link>
                // </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No products found matching your search.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSearch;
