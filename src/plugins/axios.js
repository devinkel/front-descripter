import axios from 'axios';

// Define a URL base para todas as chamadas de API
const baseURL = process.env.NODE_ENV && process.env.NODE_ENV === 'production' ? 'https://navega-forecast.onrender.com'  :'http://localhost:3000';


const configHeaders = {
  "content-type": "application/json",
  "Accept": "application/json"
};

// Cria uma instância do Axios com a URL base definida
const axiosInstance = axios.create({
  baseURL,
  headers: configHeaders
});

export default axiosInstance;