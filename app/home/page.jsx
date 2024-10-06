import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import VendorCTA from "./VendorCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />

      {/* Call to Action for Vendors */}
      <VendorCTA />
    </main>
  );
}
