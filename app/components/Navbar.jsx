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
          <div className="flex flex-row-reverse items-center h-16 gap-x-5 px-4 sm:px-6 flex-1">
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
                className="text-3xl"
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
            } overflow-hidden lg:collapse-open lg:w-fit absolute lg:static bg-white rounded-t-none flex-1`}
          >
            <div className="collapse-content lg:!py-0 lg:flex lg:gap-x-16">
              <Link href={"/"} className="nav-link" onClick={closeMenu}>
                Home
              </Link>
              <Link href={"/about"} className="nav-link" onClick={closeMenu}>
                About
              </Link>
              <Link href={"/contact"} className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 sm:px-6 flex items-center">
          <button className="text-2xl lg:hidden">
            <FaSearch />
          </button>
          <form className="w-full lg:w-4/5">
            <input
              type="text"
              placeholder="Search for a product"
              className="hidden lg:block input h-10 rounded-lg input-bordered lg:min-w-96"
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
