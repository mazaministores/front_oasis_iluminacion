import axios from 'axios'

const baseUrl = 'https://nameless-lake-53289.herokuapp.com/api/articles/category'

const getArticlesForCategory = (c) => {
    const request = axios.get(`${baseUrl}/${c}`)
    return request.then(response => response.data)
}
export default { getArticlesForCategory }