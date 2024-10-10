"use server";
import User from "../models/User";

async function createUser(data) {
  await User.create(data);
  return "Submitted";
}

export default createUser;
