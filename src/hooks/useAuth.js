import {
  setUser,
  // toLogin,
  // loginThunk
} from "../features/authentication/authenticationSlice";
import { login } from "../features/authentication";
// import { Login } from '../features/authentication/services/login'
import { useAppDispatch, useAppSelector } from "../app/hooks";

function useAuth() {
  const appDispatch = useAppDispatch();

  const user =
    useAppSelector((state) => state.auth.user) ||
    JSON.parse(window.localStorage.getItem("user"));
  const saveUser = (payload) => {
    appDispatch(setUser(payload));
  };
  // const login = loginService(appDispatch)

  // const login = (data: user) => {
  // 	// loginService(data, appDispatch)
  // }

  //** login inside store with thunk */
  // const login = (user: user) => {
  // 	try {
  // 		// appDispatch(toLogin(user))
  // 		appDispatch(loginThunk(user))
  // 	} catch (error) {
  // 		console.log('useAuth error: ', error)
  // 	}
  // }

  // const login = (user: user) => {
  // 	appDispatch(apiLogin(user))
  // 	//🔧 fix correct type: result
  // }

  // const authService = Login.getInstance(appDispatch)
  // const login = authService.login

  return {
    user,
    saveUser,
    login,
    // loginService
    // loginInstance: Login.getInstance(appDispatch)
  };
}

export default useAuth;
