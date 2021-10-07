import axios from 'axios';

const api = axios.create({
  baseURL: 'https://interact-api.herokuapp.com/',
});


export default api;