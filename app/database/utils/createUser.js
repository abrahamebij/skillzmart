"use server";
import User from "../models/User";
import bcrypt from "bcryptjs";

async function createUser(data) {
  data = JSON.parse(data);
  let { email, password } = data;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return JSON.stringify({ msg: "User already exists", statusCode: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create a new user
  await User.create({
    ...data,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  // Return a success message
  return JSON.stringify({ msg: "Signed Up Successfully", statusCode: 200 });
}

export default createUser;
