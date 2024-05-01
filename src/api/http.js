import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  contentType: 'application/json; charset=utf-8;',
  withCredentials: true
});
