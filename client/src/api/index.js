import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/items',
});

export const getAllData = () => api.get('/items');
