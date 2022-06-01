import { API } from '@utils/constants'
import axios from 'axios'
export const getDataApi = async (searched, type = 'users') => {
    try {
        if (type === 'repositories') {
            return await axios(API + 'search/repositories?q=' + searched)
        } else {
            return await axios(API + 'users/' + searched)
        }
    } catch (error) {
        throw error
    }
}
