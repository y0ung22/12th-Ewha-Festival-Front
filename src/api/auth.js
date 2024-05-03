import { http } from './http';

// POST : 회원가입
export const PostSignup = async (user_id, password, nickname, navigate) => {
  try {
    const response = await http.post('/accounts/signup/', {
      username: user_id,
      password: password,
      nickname: nickname
    });
    console.log(response.data);
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 72 * 60 * 60 * 1000);
    document.cookie = `token=${response.data.data.access_token}; expires=${expirationDate.toUTCString()};`;

    navigate('/');
    alert('가입이 완료되었습니다.');
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('회원가입 실패', error.response);
  }
};

// POST : 로그인
export const PostLogin = async (user_id, password) => {
  try {
    const response = await http.post('/accounts/login/', {
      username: user_id,
      password: password
    });
    console.log(response.data);
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 72 * 60 * 60 * 1000);
    document.cookie = `token=${response.data.data.access_token}; expires=${expirationDate.toUTCString()};`;
    return Promise.resolve(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error('로그인 실패', error.response);
  }
};

// POST : 아이디 중복 확인
export const PostCheckId = async user_id => {
  try {
    const response = await http.post('/accounts/duplicate', {
      username: user_id
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('중복확인 실패', error.response);
  }
};
