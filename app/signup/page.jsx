"use client";
import React from "react";
import FormInput from "../components/FormInput";
import { toast } from "sonner";
import createUser from "../database/utils/createUser";

export default function page() {
  async function handleSubmit(e) {
    // Prevent page from reloading when submitted
    e.preventDefault();
    // Get the form data and create a new user object from it
    let { name, businessName, email, phone, matric, password } = e.target;
    let data = {
      name: name.value,
      businessName: businessName.value,
      email: email.value,
      phone: phone.value,
      matric: matric.value,
      password: password.value,
    };

    // Send the user data to the server to create a new user
    let response = await createUser(data);
    // The createUser function returns a promise that resolves to the success message if the user is created successfully, or null if there was an error
    // Toast.success or Toast.error are used to display success or error messages respectively using the sonner library
    if (response) {
      toast.success(response);
    } else {
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
      <div className="w-10/12 md:w-1/2 lg:w-1/3 h-1/3 md:h-1/2 lg:h-2/3 font-sans">
        <h2 className=" font-bold text-primary text-center my-5 text-lg md:text-xl lg:text-2xl">
          Sign Up to Continue
        </h2>
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <FormInput
            title={"Name"}
            placeholder={"Enter your name here.."}
            id={"name"}
          />
          <FormInput
            title={"Business Name"}
            placeholder={"Enter your business name here..."}
            id={"businessName"}
          />
          <FormInput title={"Email"} id={"email"} type={"email"} />
          <FormInput title={"Phone Number"} id={"phone"} type={"tel"} />
          <FormInput
            title={"Matric Number"}
            id={"matric"}
            placeholder={"EES/../../..."}
          />
          <FormInput title={"Password"} id={"password"} type={"password"} />

          <button className="w-full p-2 text-lg bg-primary text-white font-semibold rounded my-4 lg:hover:scale-[1.03] duration-500">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
