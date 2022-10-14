import axios from "axios";

const axiosInstance = axios({
  baseURL: import.meta.env.API_URL + "/auth",
});

export default axiosInstance;
