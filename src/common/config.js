export const ENV = import.meta.env.VITE_NODE_ENV || 'development'
export const SERVER_URL =
	ENV === 'prod'
		? 'https://condominios-backend-auth-production.up.railway.app/'
		: ENV === 'develop'
		? import.meta.env.VITE_BASE_URL
		: 'https://condominios-backend-auth-production.up.railway.app/'
