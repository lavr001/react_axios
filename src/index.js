import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => {
  //You can EDIT request config BEFORE you sent it, e.g. add authorization headers
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  //You can EDIT response config BEFORE you receive it, e.g. add headers
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
