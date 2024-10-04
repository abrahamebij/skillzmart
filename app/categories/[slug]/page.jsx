"use client";
import Link from "next/link";
import Img from "../../components/Img";

const products = [
  {
    id: 1,
    name: "HP Pavilion Laptop",
    price: "$450",
    category: "electronics",
    rating: 4.5,
    image: "/laptop.jpg",
  },
  {
    id: 2,
    name: "iPhone 12",
    price: "$799",
    category: "electronics",
    rating: 4.8,
    image: "/iphone.jpg",
  },
  {
    id: 3,
    name: "Nike Air Max",
    price: "$150",
    category: "fashion",
    rating: 4.2,
    image: "/nike.jpg",
  },
  // Add more products here
];

const CategoryListingPage = ({ params }) => {
  const category = params.params;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Title */}
      <header className="bg-white py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 capitalize">
            Category: {category}
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Find the best deals on {category} from verified student vendors.
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-6 shadow rounded-lg"
                >
                  <Img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-gray-600">Price: {product.price}</p>
                  <p className="mt-1 text-yellow-500">
                    Rating: {product.rating} ⭐
                  </p>
                  <Link href={`/product/${product.id}`}>
                    <p className="mt-4 inline-block text-indigo-600 hover:text-indigo-400">
                      View Details &rarr;
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No products available in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Back to Categories */}
      <section className="text-center py-8">
        <Link href="/categories">
          <p className="inline-block bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300">
            Back to Categories
          </p>
        </Link>
      </section>
    </div>
  );
};

export default CategoryListingPage;
