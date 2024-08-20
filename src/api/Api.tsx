import axios from 'axios';

const api = axios.create({
    baseURL: 'https://classfusion-backend.vercel.app/api/v1/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  export default api;