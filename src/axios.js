import axios from 'axios';

const instance = axios.create({
  baseURL: '...', // the API URL
});
export default instance;
