import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  //contentType: 'application/json; charset=utf-8;',
  withCredentials: true
});

const token = getCookie('token') || false;

http.defaults.headers.common['Authorization'] = token
  ? `Bearer ${token}`
  : null;

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
