import axios from 'axios'

const baseUrl = 'https://powerful-ocean-91099.herokuapp.com/api/articles/search'

const getArticlesForSearch = (s) => {
    const request = axios.get(`${baseUrl}/${s}`)
    return request.then(response => response.data)
}
export default { getArticlesForSearch }