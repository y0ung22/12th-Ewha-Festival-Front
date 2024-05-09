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
  default: (() => {
    const today = new Date();
    const day = today.getDate();

    if (day < 8) {
      return 8;
    } else if (day > 10) {
      return 10;
    } else {
      return day;
    }
  })()
});
