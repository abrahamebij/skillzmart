import React from "react";

export default function page() {
  return (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
      <div className="w-10/12 md:w-1/2 lg:w-1/3 h-1/3 md:h-1/2 lg:h-2/3 font-sans">
        <h2 className=" font-bold text-primary text-center my-5 text-lg md:text-xl lg:text-2xl">
          Sign Up to Continue
        </h2>
        <form action="">
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
              className="bg-transparent focus:outline-none p-1 shadow-sm"
            />
          </div>
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="email">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
              className="bg-transparent focus:outline-none p-1 shadow-sm"
            />
          </div>
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="email">
              SignUp as:
            </label>
            <select
              name="type"
              id="type"
              className="focus:outline-none shadow-sm p-1"
            >
              <option value="">-----Select a signup type-----</option>
              <option value="vendor">Vendor</option>
              <option value="user">Customer</option>
            </select>
          </div>
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="address">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address here"
              className="bg-transparent focus:outline-none p-1 shadow-sm"
            />
          </div>
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="matric">
              Matric-No:
            </label>
            <input
              type="text"
              id="matric"
              name="matric"
              placeholder="Enter your matric number here"
              className="bg-transparent focus:outline-none p-1 shadow-sm"
            />
          </div>
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="phone">
              Phone-No:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number here"
              className="bg-transparent focus:outline-none p-1 shadow-sm"
            />
          </div>
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password here"
              className="bg-transparent focus:outline-none p-1 shadow-sm"
            />
          </div>
          <div className="w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg">
            <label className="font-semibold mb-1" htmlFor="password">
              Confirm Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password here"
              className="bg-transparent focus:outline-none p-1 shadow-sm"
            />
          </div>
          <button className="w-full p-2 text-lg bg-primary text-white font-semibold rounded my-4 lg:hover:scale-[1.03] duration-500">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
