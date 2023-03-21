export const ENV = import.meta.env.VITE_NODE_ENV || 'development'
export const SERVER_URL =
	ENV === 'prod'
		? 'https://0fcd-190-70-234-191.ngrok.io'
		: ENV === 'develop'
		? import.meta.env.VITE_BASE_URL
		: 'https://0fcd-190-70-234-191.ngrok.io'
