import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

httpClient.interceptors.request.use(
  (config) => {
    console.log('request interception');
    config.headers.set('X-Custom-Header', 'My custom value');

    return config;
  },
  (error) => {
    console.log('request error');
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    console.log('response interception');
    return response;
  },
  (error) => {
    console.log('Response error');
    return Promise.reject(error);
  }
);
