import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const SignupState = atom({
  key: 'SignupState',
  default: { username: null, password: null, nickname: null }
});

// export const LoginState=atom({
//   key: "LoginState",
//   default
// })
