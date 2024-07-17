import axios from 'axios'
import apiUrl from '../apiConfig'

export const apiIndexRecipes = () => {
    return axios(`${apiUrl}/recipes/`)
}


