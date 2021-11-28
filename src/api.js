import axios from "axios";

const axiosJWT = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
