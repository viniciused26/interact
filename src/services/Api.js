import axios from 'axios';

const PROD = 'https://interact-api.herokuapp.com/'
const DEV = 'localhost:5000'
const api = axios.create({
  baseURL: 'https://interact-api.herokuapp.com/',
});


export default api;