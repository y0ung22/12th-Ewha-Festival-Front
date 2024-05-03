import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Login.style';

import TopBar from '../../_common/TopBar';
import { ReactComponent as IdIcon } from '../SignupPage/images/id.svg';
import { ReactComponent as PwIcon } from '../SignupPage/images/pw.svg';
import { ReactComponent as KaKaoIcon } from '../SignupPage/images/kakao_login.svg';
import { PostLogin } from '../../api/auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //로그인 함수
  const handleLogin = async () => {
    if (username.trim() === '') {
      alert('아이디를 입력해주세요.');
    } else if (password.trim() === '') {
      alert('비밀번호를 입력해주세요.');
    } else {
      const goLogin = await PostLogin(username, password);
      navigate('/');
    }
  };

  const navigate = useNavigate();
  const gotoSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <S.Wrapper>
        <TopBar isMenu={false} isMain={false} isWhite={true} />
        <S.Title>로그인</S.Title>
        <S.Input>
          <IdIcon />
          <input
            type='text'
            placeholder='아이디'
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <PwIcon />
          <input
            type='password'
            placeholder='비밀번호'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
        </S.Input>
        <S.LoginBtn onClick={handleLogin}>로그인</S.LoginBtn>
        <S.KakaoLogin>
          <S.ImgDiv>
            <KaKaoIcon />
          </S.ImgDiv>
          <span>카카오 로그인</span>
        </S.KakaoLogin>
        <S.GotoSignUp onClick={gotoSignup}>
          계정이 없다면? 회원가입 하러 가기
        </S.GotoSignUp>
      </S.Wrapper>
    </>
  );
};

export default LoginPage;
