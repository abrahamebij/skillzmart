"use server";
import User from "../models/User";

async function getUserData(data) {
  let user = await User.find(data);
  if (!user) {
    return JSON.stringify({ msg: "User Not Found", statusCode: 400 });
  }
  // Return a success message
  return JSON.stringify({
    user,
    msg: "Signed Up Successfully",
    statusCode: 200,
  });
}

export default getUserData;
