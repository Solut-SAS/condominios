import { createSlice } from "@reduxjs/toolkit";
// import { Login } from './index'
// import { SET_USER } from './actionTypes';
// Define a type for the slice state

// Define the initial state using that type
const initialState = {
  user: { name: "" },
};

// export const loginThunk = createAsyncThunk(
// 	'login',
// 	async (request: authState['user']) => {
// 		console.log('request: ', request)
// 		if (request) {
// 			const response = await login(request)
// 			console.log('thunk response: ', response)

// 			return response.user
// 		}
// 	}
// )

export const authSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      // login desde api.service  y guardarlo en localstorage
      console.log("setting user...", action);

      state.user = action.payload;
      window.localStorage.setItem("user", JSON.stringify(action.payload));
    },
    // auth: (state, action: PayloadAction<object>) => {
    // 	const actionReducer = ACTIONS_REDUCERS[action.type];
    //   return actionReducer ? actionReducer(state, action) : state;
    // },
  },
  // extraReducers(builder) {
  // 	// omit posts loading reducers
  // 	builder.addCase(
  // 		loginThunk.fulfilled,
  // 		//🔧 add action Type correctly ---*
  // 		(state, action: { [key: string]: any }) => {
  // 			console.log('action thunk: ', action)

  // 			// We can directly add the new post object to our posts array
  // 			state.user = action.payload
  // 		}
  // 	)
  // }
});

export const {
  //  auth
  setUser,
} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
