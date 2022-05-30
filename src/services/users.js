import { API } from '@utils/constants'
import axios from 'axios'
export const getUsersData = async () => {
    try {
        const response = await axios(API)
        return response
    } catch (error) {
        throw error
    }
}
