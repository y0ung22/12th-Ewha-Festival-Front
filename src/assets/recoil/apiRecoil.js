import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

// 로컬스토리지에서 키값을 읽어오거나(카카오로그인 된 경우) 없으면 기본값 반환(자체 회원가입)
const getLocalStorageValue = key => {
  return localStorage.getItem(key) || null;
};

export const LoginState = atom({
  key: 'LoginState',
  default: !!localStorage.getItem('accessToken')
});

export const SignupState = atom({
  key: 'SignupState',
  default: () => ({
    username: getLocalStorageValue('username'),
    password: null,
    nickname: getLocalStorageValue('nickname')
  })
});

export const PlaceState = atom({
  key: 'PlaceState',
  default: { booth: '정문', performance: '전체' }
});

export const DayState = atom({
  key: 'DayState',
  default: 8
});
