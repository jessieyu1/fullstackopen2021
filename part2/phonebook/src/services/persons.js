import axios from 'axios'


const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}
const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    const nonExisting = {
        id: 10000,
        name: 'The information has been removed.',
        number: '000'
    }
    return request.then(response => response.data.concat(nonExisting))
}
const exportObject = {
    getAll: getAll,
    create: create,
    remove: remove,
    update: update
};


export default exportObject