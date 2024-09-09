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
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
