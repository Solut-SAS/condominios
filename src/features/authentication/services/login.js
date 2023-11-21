import { post } from "../../../app/api";
import { setUser } from "../authenticationSlice";
import { appDispatch } from "../../../app/store";

const login = async (data) => {
	console.log("data login service", data)
  try {
    const response = await post("auth/login", data, "auth");
    // console.log({ response });
    appDispatch(setUser(response.payload));
  } catch (error) {
		console.log({ error })	
	}
};

export default login;
