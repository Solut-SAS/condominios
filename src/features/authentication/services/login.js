import { post } from '../../../app/api'
// import { AppDispatch } from '../../../app/store'
import { setUser } from '../authenticationSlice'
import { appDispatch } from '../../../app/store'

// (appDispatch: AppDispatch) => async (data: apiType['request']) => {
const login = async (data) => {
	const response = await post('auth/login', data)
	// appDispatch(setUser(response.user))
	appDispatch(setUser(response.payload))
}

export default login
// const login =
// 	async (req: apiType['request']) => async (dispatch: AppDispatch) => {
// 		try {
// 			console.log('login req: ', req)

// 			const response: result = await post('auth/login', req)
// 			dispatch(setUser(response.user))
// 			console.log({ response })

// 			return response
// 		} catch (error) {
// 			throw error
// 		}
// 	}

// export class Login {
// 	private static instance: Login
// 	private dispatch: AppDispatch

// 	constructor(dispatch: AppDispatch) {
// 		this.dispatch = dispatch
// 	}

// 	static getInstance(dispatch?: AppDispatch) {
// 		if (!Login.instance) {
// 			if (dispatch) {
// 				return new Login(dispatch)
// 			}
// 		}
// 		return Login.instance
// 	}

// 	async login(req: apiType['request']) {
// 		console.log('this: ', this)

// 		try {
// 			console.log('login req: ', req)

// 			const response: result = await post('auth/login', req)
// 			this.dispatch(setUser(response.user))
// 			console.log({ response })

// 			return response
// 		} catch (error) {
// 			throw error
// 		}
// 	}

// 	async signUp() {}
// }

// export { login }
