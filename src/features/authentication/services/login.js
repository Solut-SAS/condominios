import { post } from "../../../app/api";
import { setUser } from "../authenticationSlice";
import { appDispatch } from "../../../app/store";

const login = async (data) => {
  try {
    const response = await post("auth/login", data, "auth");
    if (response?.length) appDispatch(setUser(response[0]));
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export default login;
