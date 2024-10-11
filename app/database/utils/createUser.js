"use server";
import User from "../models/User";

async function createUser(data) {
  // Create a new user
  await User.create(data);
  // Return a success message
  return "Submitted";
}

export default createUser;
