import axios from "axios";
require('dotenv').config()

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: baseURL
});

export default api;