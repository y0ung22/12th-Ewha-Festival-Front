import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as NameIcon } from './images/namelogo.svg';

import TopBar from '../../_common/TopBar';
import Modal from '../../_common/Modal';
import { getCookie } from '../../api/auth';

//recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PostNickname } from '../../api/auth';
import { SignupState } from '../../assets/recoil/apiRecoil';

const SignupKakaoPage = () => {
  const [nickname, setNickname] = useState('');
  const kakaoUsername = getCookie('username');

  const isFieldSatisfied = nickname;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickComplete = () => {
    if (isFieldSatisfied) {
      setIsModalOpen(true);
    }
  };

  //닉네임 변경 post 함수
  const onSubmitNickname = () => {
    console.log('nickname ' + nickname);
    console.log('kakaoUsername ' + kakaoUsername);
    PostNickname(nickname, kakaoUsername);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setNickname(nickname);
    }, 500);

    //clean up
    return () => clearTimeout(delayTimer);
  }, [nickname, setNickname]);

  return (
    <>
      <Wrapper>
        <TopBar isMenu={false} isMain={false} isWhite={true} />
        <Title>회원가입</Title>
        <RowBox>
          <Input num='250px'>
            <NameIcon />
            <input
              placeholder='닉네임(최대 8자)'
              name='nickname'
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              maxLength={8}
            ></input>
          </Input>
        </RowBox>
        <LoginBtn isFieldSatisfied={isFieldSatisfied} onClick={clickComplete}>
          회원가입
        </LoginBtn>
      </Wrapper>
      {isModalOpen && (
        <Modal
          msgType={1}
          title='회원가입 완료'
          msg1='회원가입을 완료하시겠습니까?'
          msg2='작성한 회원 정보는 이후 변경이 어려워요.'
          setIsModalOpen={setIsModalOpen}
          onClickYes={onSubmitNickname}
        />
      )}
    </>
  );
};

export default SignupKakaoPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Title = styled.div`
  color: var(--bk01);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 108.333% */
  letter-spacing: -0.03125rem;
  margin-top: 2.3125rem;
  margin-bottom: 6.0625rem;
`;

const RowBox = styled.div`
  display: flex;
  width: 15.625rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ num }) => num};
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: var(--gray02);
  padding: 12px;

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
  background-color: ${props =>
    props.isFieldSatisfied ? `var(--green04)` : `var(--green05)`};
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
