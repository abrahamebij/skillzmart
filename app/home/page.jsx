import Link from "next/link";
import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />

      {/* Call to Action for Vendors */}
      <section className="py-16 bg-indigo-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Become a Vendor at SkillzMart
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Are you a student? Start selling your products and services today!
        </p>
        <Link href="/vendor-signup">
          <p className="mt-8 inline-block bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary/85">
            Sign Up Now
          </p>
        </Link>
      </section>
    </main>
  );
}
