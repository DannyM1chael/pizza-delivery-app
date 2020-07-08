import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});

export const getAllData = () => api.get('/items');

const apis = {
  getAllData,
};

export default apis;
