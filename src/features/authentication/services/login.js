import { post } from '../../../app/api'
import { setUser } from '../authenticationSlice'
import { appDispatch } from '../../../app/store'

const login = async (data) => {
	const response = await post('auth/login', data, 'auth')
	appDispatch(setUser(response.payload))
}

export default login
