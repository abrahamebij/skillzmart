import connect from "./app/database/dbConnect";

export async function register() {
  await connect();
}
