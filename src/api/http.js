import axios from 'axios';

export const http = axios.create({
  baseURL: "http://13.209.81.181",
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
