import axios from "axios";
import { BACKEND_URL } from "../appContants";
const axiosClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
  },
});

export default axiosClient;
