import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { getCookie } from '../../api/auth';

// 로컬스토리지에서 키값을 읽어오거나(카카오로그인 된 경우) 없으면 기본값 반환(자체 회원가입)
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
