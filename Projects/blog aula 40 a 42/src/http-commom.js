import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
})
//Para instalar use o comando:
//npm install --save axios vue-axios
