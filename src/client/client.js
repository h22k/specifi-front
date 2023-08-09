import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000'
})

client.defaults.withCredentials = true

export default client
