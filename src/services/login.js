import axios from 'axios'


const baseUrl = 'https://nameless-lake-53289.herokuapp.com/api/login'

const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}

export default { login }
