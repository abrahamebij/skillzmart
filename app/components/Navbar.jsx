"use client";
import Link from "next/link";
import Img from "./Img";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data, status } = useSession();
  console.log(data, status);

  const [isOpen, setIsOpen] = useState(false);
  function closeMenu() {
    setIsOpen(false);
  }
  let navLinks = ["home", "products", "events", "services", "housing"];
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
            <div className="collapse-content lg:!py-0 lg:flex items-center lg:gap-x-5 justify-center !px-0">
              {navLinks.map((navLink, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${navLink}`}
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {navLink.slice(0, 1).toUpperCase() + navLink.slice(1)}
                  </Link>
                );
              })}
              <Link href={"/signup"} className="nav-link" onClick={closeMenu}>
                Join
              </Link>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 flex items-center">
          {status === "authenticated" ? (
            // Show profile Logo if authenticated
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ring-2 ring-primary">
                    <Img alt="Avatar" src="/user.jpeg" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-2 py-4 shadow text-gray-600 space-y-2 font-semibold"
                >
                  <li className="">
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li>
                    <p onClick={() => signOut({ callbackUrl: "/login" })}>
                      Logout
                    </p>
                  </li>
                </ul>
              </div>
            </>
          ) : status === "loading" ? (
            <div className="">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : (
            // Else display login and search button
            <>
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
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
