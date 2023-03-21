import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from '../../features/authentication/authenticationSlice'

const store = configureStore({
	reducer: {
		auth: authenticationReducer
	}
})

export default store

export const appDispatch = store.dispatch

// // Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = typeof store.getState
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch = typeof store.dispatch
