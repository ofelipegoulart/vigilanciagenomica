import axios from "axios";

const api = axios.create({
  baseURL: "https://vigilanciagenomica-backend.herokuapp.com/"
});

export default api;
