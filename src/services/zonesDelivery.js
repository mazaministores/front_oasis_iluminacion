import axios from 'axios'

const baseUrl = 'https://powerful-ocean-91099.herokuapp.com/api/zonesDelivery'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteZone = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}


export default { getAll, create, deleteZone }