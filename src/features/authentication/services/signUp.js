import { post } from "../../../app/api";

export default async function register(req) {
  const response = await post("register", req);

  return response;
}
