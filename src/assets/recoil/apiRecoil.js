import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const LoginState = atom({
  key: 'LoginState',
  default: !!localStorage.getItem('accessToken')
});

export const SignupState = atom({
  key: 'SignupState',
  default: { username: null, password: null, nickname: null }
});

// export const NicknameState = atom({
//   key: 'NicknameState',
//   default: null
// });
