import { atom } from 'recoil';
import { getCookie } from '../../api/http';

const getCookieValue = key => {
  return getCookie(key) || null;
};

export const SignupState = atom({
  key: 'SignupState',
  default: () => ({
    username: getCookieValue('username'),
    password: null,
    nickname: getCookieValue('nickname')
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
