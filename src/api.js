import axios from "axios";
require("dotenv").config();
const process = require('process');

const axiosJWT = axios.create({
  baseURL: "https://vigilanciagenomica-backend.herokuapp.com/api"
})

export default axiosJWT;
