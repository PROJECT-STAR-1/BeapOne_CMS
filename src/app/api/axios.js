// api/axios.js
import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api",
})

// Attach token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle global errors (optional)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      error?.response?.data || { message: "Something went wrong" }
    )
  }
)

export default API