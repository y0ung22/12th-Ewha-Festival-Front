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

// GET : 아이디 중복 확인
export const GetDuplicateId = async username => {
  try {
    const response = await http.post('/accounts/duplicate/', {
      username: username
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('중복확인 실패', error.response);
  }
};

// GET : 카카오 로그인
export const KakaoLogin = async (code, setUsername) => {
  try {
    const response = await http.get(`/accounts/kakao/callback/?code=${code}`);
    console.log(response.data);

    if (response.data.data.exist) {
      localStorage.setItem('id', response.data.data.id);
      localStorage.setItem('nickname', response.data.data.nickname);
      localStorage.setItem('token', response.data.data.access_token);
      window.location.replace('/');
    } else {
      // setUsername(prevState => ({
      //   ...prevState,
      //   username: response.data.data.username
      // }));
      localStorage.setItem('username', response.data.data.username);
      window.location.replace('/signupkakao');
    }

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// POST : 카카오 닉네임 입력
export const PostNickname = async (nickname, username) => {
  try {
    const response = await http.post('/accounts/kakao/nickname/', {
      nickname: nickname,
      username: username
    });
    console.log(response.data);
    localStorage.setItem('id', response.data.data.id);
    localStorage.setItem('nickname', response.data.data.nickname);
    localStorage.setItem('token', response.data.data.access_token);

    window.location.replace('/');
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error(error.response);
    return Promise.reject(error);
  }
};

export const Logout = async () => {
  document.cookie = 'token=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; //쿠키 삭제
  window.localStorage.clear(); // 로컬 스토리지 초기화
  window.location.replace('/');

export const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
