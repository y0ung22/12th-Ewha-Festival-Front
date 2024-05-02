import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  contentType: 'application/json; charset=utf-8;',
  withCredentials: true
});

const token = getCookie('token') || false;

http.defaults.headers.common['Authorization'] = token
  ? `Bearer ${token}`
  : null;

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}
