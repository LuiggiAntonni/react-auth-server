import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
