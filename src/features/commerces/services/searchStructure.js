import { post } from '../../../app/api'
import { setUser } from '../../authentication/authenticationSlice'
// import { appDispatch } from '../../../app/store'

const searchStructure = async (data) => {
	return await post('commerces/structure/search', data)
}

export default searchStructure
