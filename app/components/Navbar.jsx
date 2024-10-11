"use client";
import Link from "next/link";
import Img from "./Img";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <>
      <nav className="bg-white text-black shadow-lg flex justify-between items-center gap-x-10">
        <div className="max-w-7xl mx-auto lg:mx-0 lg:flex items-center flex-1 lg:justify-between">
          <div className="flex flex-row-reverse items-center h-16 gap-x-5 px-4 sm:px-6">
            {/* Link And Logo */}
            <Link
              href={"/"}
              className="flex flex-1 gap-x-2 items-center text-black font-bold"
            >
              <Img src="/logo.webp" className="!w-10" alt={"Image Logo"} />
              <p className="text-lg">
                {" "}
                <span className="text-primary">Skillz</span>
                Mart
              </p>
            </Link>
            {/* Menu */}
            <div className="flex items-center lg:hidden">
              <button
                className="text-xl sm:text-2xl"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
          {/* Links */}
          <div
            className={`collapse ${
              isOpen ? "collapse-open" : "collapse-close"
            } overflow-hidden lg:collapse-open lg:w-fit absolute lg:static bg-white rounded-t-none flex-1 z-10`}
          >
            <div className="collapse-content lg:!py-0 lg:flex items-center lg:gap-x-10 justify-center">
              <Link href={"/"} className="nav-link" onClick={closeMenu}>
                Home
              </Link>
              <Link href={"/products"} className="nav-link" onClick={closeMenu}>
                Products
              </Link>
              <Link href={"/contact"} className="nav-link" onClick={closeMenu}>
                Contact
              </Link>{" "}
              <Link href={"/signup"} className="nav-link" onClick={closeMenu}>
                Join
              </Link>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 sm:px-6 flex items-center">
          <Link
            href={"/login"}
            className="mx-auto btn btn-sm btn-primary text-white mr-5"
            onClick={closeMenu}
          >
            Login
          </Link>
          <button className="text-xl sm:text-2xl">
            <FaSearch />
          </button>
          <form className="w-full lg:w-4/5 lg:hidden">
            <input
              type="text"
              placeholder="Search for a product"
              className="hidden lg:block input h-10 rounded-lg input-bordered border-gray-600 lg:min-w-96"
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
