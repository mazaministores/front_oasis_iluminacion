import axios from 'axios'
// https://arcane-eyrie-30218.herokuapp.com

const baseUrl = 'https://powerful-ocean-91099.herokuapp.com/api/methods'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getAll }