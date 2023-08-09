import client from '@/client/client'

client.defaults.baseURL = `${client.defaults.baseURL}/api/v1`

export default client
