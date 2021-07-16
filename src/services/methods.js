import axios from 'axios'
// https://arcane-eyrie-30218.herokuapp.com

const baseUrl = 'http://localhost:3001/api/methods'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getAll }