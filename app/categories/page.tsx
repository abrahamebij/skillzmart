import Link from "next/link";

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
  { name: "Books", description: "Textbooks, Study Materials", slug: "books" },
  { name: "Events", description: "Student Events, Tickets", slug: "events" },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-white py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Explore Categories
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Browse through various categories of products and services available
            to students at SkillzMart.
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="bg-white p-6 shadow rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.name}
                </h3>
                s<p className="mt-2 text-gray-600">{category.description}</p>
                <Link href={`/categories/${category.slug}`}>
                  <p className="mt-4 inline-block text-indigo-600 hover:text-indigo-400">
                    Browse {category.name} &rarr;
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-50 py-8 text-center">
        <h2 className="text-2xl font-bold">
          Want to list your products or services?
        </h2>
        <Link href="/vendor-signup">
          <p className="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500">
            Become a Vendor
          </p>
        </Link>
      </section>
    </div>
  );
};

export default Categories;
