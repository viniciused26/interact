import axios from 'axios';

const PROD = 'https://interact-api.herokuapp.com/'
const DEV = 'http://192.168.1.3:5000/'
const api = axios.create({
  baseURL: 'https://interact-api.herokuapp.com/',
});


export default api;