import React from 'react';
import styled from 'styled-components';

import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { ReactComponent as IdIcon } from '../SignupPage/images/id.svg';
import { ReactComponent as PwIcon } from '../SignupPage/images/pw.svg';
import { ReactComponent as KaKaoIcon } from '../SignupPage/images/kakao_login.svg';

const LoginPage = () => {
  const handleBackClick = () => {
    // backLink ? navigate(backLink) : navigate(-1);
  };

  return (
    <>
      <Wrapper>
        <TopBarBack>
          <BackIcon onClick={handleBackClick} />
        </TopBarBack>
        <Title>로그인</Title>
        <Input>
          <IdIcon />
          <input placeholder='아이디'></input>
        </Input>
        <Input>
          <PwIcon />
          <input placeholder='비밀번호'></input>
        </Input>
        <LoginBtn>로그인</LoginBtn>
        <KakaoLogin>
          <ImgDiv>
            <KaKaoIcon />
          </ImgDiv>
          <span>카카오 로그인</span>
        </KakaoLogin>
        <GotoSignUp>계정이 없다면? 회원가입 하러 가기</GotoSignUp>
      </Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const TopBarBack = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-top: 56px;
  padding-left: 17px;
`;

const Title = styled.div`
  color: var(--bk01);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
  letter-spacing: -0.5px;
  margin-top: 37px;
  margin-bottom: 97px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: var(--gray02);
  padding: 12px;
  margin-bottom: 15px;

  input {
    background-color: var(--gray02);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
    letter-spacing: -0.5px;
    margin-left: 10px;
  }
  input::placeholder {
    color: var(--gray01);
  }
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: var(--green04);
  margin-top: 46px;
  margin-bottom: 15px;

  color: var(--wh);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.5px;
`;

const KakaoLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  height: 46px;
  flex-shrink: 0;

  border-radius: 12px;
  background: var(--yellow);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);

  color: var(--bk01);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ImgDiv = styled.div`
  margin-left: 66.78px;
  margin-right: 13px;
`;

const GotoSignUp = styled.div`
  color: var(--gray05);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 216.667% */
  letter-spacing: -0.5px;
  text-decoration-line: underline;
  margin-top: 20px;
`;
