import React from "react";
import Link from "next/link";

const VendorCTA = () => {
  return (
    <section className="py-16 px-5 bg-tertiary text-center">
      <h2 className="text-3xl font-bold text-gray-800 pb-2">
        Become a Vendor at SkillzMart
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Are you a student? Start selling your products and services today!
      </p>
      <Link href="/signup" className="btn btn-primary mt-8 text-white">
        Sign Up Now
      </Link>
    </section>
  );
};

export default VendorCTA;
