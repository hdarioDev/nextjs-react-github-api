import { API } from '@utils/constants'
import axios from 'axios'
export const getUsersData = async (type = 'users') => {
    try {
        if (type === 'repositories') {
            return await axios(API + 'search/repositories?q=tetris')
        } else {
            return await axios(API + 'users/hdariodev')
        }
    } catch (error) {
        throw error
    }
}
