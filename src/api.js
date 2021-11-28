import axios from "axios";

const api = axios.create({
  baseURL: "https://vigilanciagenomica-backend.herokuapp.com/api"
});

export default api;
