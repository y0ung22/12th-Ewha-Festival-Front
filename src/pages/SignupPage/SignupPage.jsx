import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { ReactComponent as IdIcon } from './images/id.svg';
import { ReactComponent as PwIcon } from './images/pw.svg';
import { ReactComponent as NameIcon } from './images/namelogo.svg';
import { ReactComponent as CheckedIcon } from './images/checked.svg';
import { ReactComponent as UncheckedIcon } from './images/unchecked.svg';

import TopBar from '../../_common/TopBar';
import Modal from '../../_common/Modal';

const SignupPage = () => {
  const [userData, setUserData] = useState({
    id: '',
    passwd: '',
    passwdCheck: '',
    nickname: ''
  });

  const handleInput = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  const { id, passwd, passwdCheck, nickname } = userData;

  //아이디 중복확인
  const [isIdValid, setIsIdValid] = useState(false);
  const clickIdValid = () => {
    //아이디 중복확인 api
    setIsIdValid(true);
  };
  //비밀번호 중복확인
  const isPwSame = (passwd != '') & (passwd === passwdCheck);

  const isFieldSatisfied = id && passwd && passwdCheck && isPwSame && nickname;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickComplete = () => {
    if (isFieldSatisfied) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Wrapper>
        <TopBar isMenu={false} isMain={false} isWhite={true} />
        <Title>회원가입</Title>
        <form onChange={handleInput}>
          <RowBox>
            <Input num='187px'>
              <IdIcon />
              <input
                placeholder='아이디'
                type='text'
                name='id'
                value={id}
              ></input>
            </Input>
            <IdCheckBtn onClick={clickIdValid}>중복확인</IdCheckBtn>
          </RowBox>
          {isIdValid && <IdCheckMsg>*사용 가능한 아이디입니다.</IdCheckMsg>}
          <RowBox>
            <Input num='250px'>
              <PwIcon />
              <input
                type='password'
                placeholder='비밀번호'
                name='passwd'
                value={passwd}
              ></input>
            </Input>
          </RowBox>
          <RowBox>
            <Input num='212px'>
              <PwIcon />
              <input
                type='password'
                placeholder='비밀번호 확인'
                name='passwdCheck'
                value={passwdCheck}
              ></input>
            </Input>
            <IconDiv>{isPwSame ? <CheckedIcon /> : <UncheckedIcon />}</IconDiv>
          </RowBox>
          <RowBox>
            <Input num='250px'>
              <NameIcon />
              <input
                placeholder='닉네임(최대 8자)'
                name='nickname'
                value={nickname}
                maxLength={8}
              ></input>
            </Input>
          </RowBox>
        </form>
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
        />
      )}
    </>
  );
};

export default SignupPage;

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

const IdCheckBtn = styled.div`
  display: flex;
  width: 3.625rem;
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: var(--green04);
  justify-content: center;
  align-items: center;

  color: var(--wh);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  letter-spacing: -0.03125rem;
`;

const IdCheckMsg = styled.div`
  width: 250px;
  display: flex;
  align-items: flex-start;
  color: var(--purple);
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 8px */
  letter-spacing: -0.03125rem;
  margin-top: 7px;
  margin-left: 6px;
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

const IconDiv = styled.div`
  margin-right: 6px;
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
