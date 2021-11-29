import axios from "axios";
require("dotenv").config();
const process = require('process');

const axiosJWT = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
