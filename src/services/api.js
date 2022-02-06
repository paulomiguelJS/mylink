import axios from 'axios'

export const key = "58848999a33cc0a41514a36f7b985c0d1ea18ec0"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;











