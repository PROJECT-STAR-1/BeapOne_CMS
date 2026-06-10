// api/auth.js
import API from "./axios"

export const signupUser = async (data) => {
  const res = await API.post("/auth/signup", data)
  return res.data
}

export const signinUser = async (data) => {
  const res = await API.post("/auth/signin", data)
  return res.data
}