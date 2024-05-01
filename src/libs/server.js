import axios from "axios"
import { store } from "../redux";

const server = axios.create({
  baseURL: 'http://94.74.86.174:8080/api'
})

server.interceptors.request.use((config) => {
  const { token } = store.getState().auth

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default server