import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apis.codante.io/olympic-games",
});

export default axiosInstance;
