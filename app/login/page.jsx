"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "../components/FormInput";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let { email, password } = e.target;

    let data = { email: email.value.trim(), password: password.value };
    try {
      const result = await signIn("credentials", { redirect: false, ...data });
      if (result?.error) {
        toast.error(result?.error);
      } else {
        router.push("/");
        toast.success("Logged in successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
            className={`btn btn-primary text-white ${
              loading && "!bg-gray-300 border-0 text-black"
            } mb-5 mt-8`}
            disabled={loading}
          >
            {loading ? "Hold On" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
