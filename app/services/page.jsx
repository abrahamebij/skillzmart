"use client";
import Link from "next/link";
import Img from "../components/Img";

let services = [
  {
    _id: "1",
    name: "Graphic Design",
    category: "Design",
    price: 10000,
    description:
      "Professional graphic design services for logos, posters, and more.",
    reviews: [
      {
        username: "Jane Doe",
        rating: 5,
        comment: "Great work on my logo!",
      },
      {
        username: "John Smith",
        rating: 4,
        comment: "Very responsive and creative.",
      },
    ],
  },
  {
    _id: "2",
    name: "Math Tutoring",
    category: "Tutoring",
    price: 5000,
    description: "Experienced math tutor for high school and college students.",
    reviews: [],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Available Services
        </h1>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105"
            >
              {/* Service Flyer Image */}
              <Img
                src={service.flyer || "/event-hero.webp"} // Fallback to default flyer if none provided
                alt={`${service.name} flyer`}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                {/* Service Information */}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {service.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Category: {service.category}
                </p>
                <p className="text-lg font-semibold text-indigo-600 mt-3">
                  ₦{service.price}
                </p>
                <p className="mt-2 text-gray-600">
                  {service.description.slice(0, 100)}...
                </p>

                {/* View Details Button */}
                <Link href={`/services/${service._id}`}>
                  <p className="mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium">
                    View Details &rarr;
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
