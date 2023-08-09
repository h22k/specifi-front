import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000/api/v1'
})

client.defaults.withCredentials = true

export default client
