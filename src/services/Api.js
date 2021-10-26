import axios from 'axios';

const PROD = 'https://interact-api.herokuapp.com/'
const DEV = 'http://192.168.1.3:5000/'
const api = axios.create({
  baseURL: 'http://192.168.1.72:5000/',
});


export default api;