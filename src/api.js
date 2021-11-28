import axios from "axios";
import jwt_decode from 'jwt-decode';

const axiosJWT = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

axiosJWT.interceptors.request.use(
  async (config) => {
    let currentDate = new Date();
    const decodedToken = jwt_decode(user.accessToken);
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      data = await refreshToken();
      config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
