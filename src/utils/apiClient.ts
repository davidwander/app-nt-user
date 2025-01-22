import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.3.7:8081", // Atualize conforme necessário
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
