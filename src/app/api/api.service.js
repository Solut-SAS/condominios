import fetch from '../../lib/axios'

let user = JSON.parse(window.localStorage.getItem('user') || '{}')

let setToken = () => {
	fetch.defaults.headers.common['Authorization'] = user
		? `Bearer ${user.token}`
		: ''
}

export const post = async (endPoint, req) => {
	setToken()

	try {
		const { data } = await fetch.post(endPoint, req)
		return data
	} catch (error) {
		throw error
	}
}

export const get = async (endPoint, req) => {
	setToken()

	try {
		const { data } = await fetch.get(endPoint, { params: req })
		return data
	} catch (error) {
		throw error
	}
}
