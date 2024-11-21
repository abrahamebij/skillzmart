"use client";
import React from "react";
import FormInput from "../components/FormInput";
import { toast } from "sonner";
import createUser from "../database/utils/createUser";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
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

    // console.log(data);

    // Send the user data to the server to create a new user
    let response = await createUser(JSON.stringify(data));
    response = JSON.parse(response);
    // The createUser function returns a promise that resolves to the success message if the user is created successfully, or null if there was an error
    // Toast.success or Toast.error are used to display success or error messages respectively using the sonner library
    try {
      if (response.statusCode === 200) {
        toast.success(response.msg);
        router.push("/login");
      } else {
        toast.error(response.msg);
      }
    } catch (e) {
      toast.error(e.message);
    }
  }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10/12 md:w-3/5 lg:w-2/5">
        <h2 className=" font-bold text-primary text-center my-5 text-lg md:text-xl lg:text-2xl">
          Sign Up to Continue
        </h2>
        <form
          className="flex flex-col gap-y-4 bg-white rounded px-5 py-2 shadow-xl"
          onSubmit={handleSubmit}
        >
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

          <button className="w-full btn btn-primary text-white text-lg">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
