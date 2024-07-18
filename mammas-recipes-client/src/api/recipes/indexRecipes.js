import axios from 'axios'
import apiUrl from '../../apiConfig'

export const apiIndexRecipes = () => {
    return axios.get(`${apiUrl}/recipes/`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
}


