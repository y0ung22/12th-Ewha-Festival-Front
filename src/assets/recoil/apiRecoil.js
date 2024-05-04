import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { getCookie } from '../../api/auth';

const getCookieValue = key => {
  return getCookie(key) || null;
};

export const LoginState = atom({
  key: 'LoginState',
  default: !!getCookie('accessToken')
});

export const SignupState = atom({
  key: 'SignupState',
  default: () => ({
    username: getCookieValue('username'),
    password: null,
    nickname: getCookieValue('nickname')
  })
});
