import axios from "axios";
require('dotenv').config()


const axiosJWT = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://covidsc-backend.sites.ufsc.br/api/login' : 'http://localhost:8080/api/'
})

axiosJWT.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('@rvg:token')
    if (token) {
      config.headers["authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosJWT;
