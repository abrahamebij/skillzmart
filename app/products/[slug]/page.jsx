// import { useRouter } from 'next/router';
import Link from "next/link";
import Img from "../../components/Img";

const mockProduct = {
  id: 1,
  title: "HP Pavilion Laptop",
  description:
    'High-performance laptop ideal for students. Comes with a 15.6" display and Intel Core i7 processor.',
  category: "Electronics",
  price: 50000,
  images: ["/hp.jpeg", "/laptop-2.jpg"],
  reviews: [
    {
      userId: 1,
      username: "Jane Doe",
      rating: 4.5,
      comment: "Great laptop for schoolwork and light gaming!",
    },
    {
      userId: 2,
      username: "John Smith",
      rating: 4.0,
      comment: "Solid performance, but the battery life could be better.",
    },
  ],
};

const ProductDetails = ({ params }) => {
  let id = params.params;
  console.log(id);

  // In a real app, you would fetch the product details using the id from the query parameter
  const product = mockProduct; // Mock product data for now

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="mt-3 text-lg text-gray-500">{product.category}</p>
        </div>
      </header>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Images */}
            <div className="w-full md:w-1/2">
              <Img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-md"
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800">
                ₦{product.price}
              </h2>
              <p className="mt-4 text-gray-600">{product.description}</p>

              <button className="mt-8 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-500">
                Contact Vendor
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800">Reviews</h3>
            {product.reviews.length ? (
              <div className="mt-6 space-y-4">
                {product.reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 shadow rounded-lg">
                    <p className="text-lg font-semibold">{review.username}</p>
                    <p className="text-yellow-500">
                      Rating: {review.rating} ⭐
                    </p>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>

          {/* Back to Products */}
          <div className="text-center py-8">
            <Link href="/products">
              <p className="inline-block bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300">
                Back to Products
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
