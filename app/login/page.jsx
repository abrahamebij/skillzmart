"use client";
import React from "react";
import FormInput from "../components/FormInput";

export default function page() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="w-full h-full flex items-center justify-center flex-1">
      <div className="w-10/12 md:w-3/5 lg:w-2/5">
        <h2 className=" font-bold text-primary text-center my-5 text-lg md:text-xl lg:text-2xl">
          Login to your Account
        </h2>
        <form
          className="flex flex-col bg-white px-3 py-2 rounded shadow-xl"
          onSubmit={handleSubmit}
        >
          <FormInput title={"Email"} id={"email"} type={"email"} />
          <FormInput title={"Password"} id={"password"} type={"password"} />
          <button
            type="submit"
            className="btn btn-primary text-white mb-5 mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
