import axios from "axios";
const BASE_URL = "https://oldcointoken.com:3009/";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
