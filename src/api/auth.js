import { http } from './http';

// POST : 회원가입
export const PostSignup = async (user_id, password, nickname) => {
  try {
    const response = await http.post('/accounts/signup/', {
      username: user_id,
      password: password,
      nickname: nickname
    });
    console.log(response.data);
    const { accessToken } = response.data.data.access_token;
    http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
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
    const { accessToken } = response.data.data.access_token;
    http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return Promise.resolve(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error('로그인 실패', error.response);
  }
};
