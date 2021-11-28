import axios from "axios";
require('dotenv').config()

const baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(function (config) {
    const token = store.getState().session.token;
    config.headers.Authorization =  token;

    return config;
});

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
