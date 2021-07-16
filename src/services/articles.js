import axios from 'axios'

const baseUrl = 'https://nameless-lake-53289.herokuapp.com/api/articles'
// const baseUrl = 'https://nameless-lake-53289.herokuapp.com/api/articles'
// const baseUrl = 'https://arcane-eyrie-30218.herokuapp.com/api/articles'


const logged = JSON.parse(window.localStorage.getItem('logged'))

const tokenInStorage = logged ? logged.token : false

const jwt = `Bearer ${tokenInStorage}`

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const config = {
        headers: {
            Authorization: jwt
        }
    }
    const request = axios.post(baseUrl, newObject, config)
    return request.then(response => response.data)
}

const deleteArticle = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, object) => {
    const request = axios.put(`${baseUrl}/${id}`, object)
    return request.then(response => response.data)
}

export default { getAll, deleteArticle, create, update }