import axios from 'axios'

const API_BASE_URL = 'https://dummyjson.com'

export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials)
  return response.data
}
