import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { ReactComponent as IdIcon } from './images/id.svg';
import { ReactComponent as PwIcon } from './images/pw.svg';
import { ReactComponent as NameIcon } from './images/namelogo.svg';
import { ReactComponent as CheckedIcon } from './images/checked.svg';
import { ReactComponent as UncheckedIcon } from './images/unchecked.svg';

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

  //비밀번호 중복확인
  const isPwSame = (passwd != '') & (passwd === passwdCheck);

  const handleBackClick = () => {
    // backLink ? navigate(backLink) : navigate(-1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickComplete = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Wrapper>
        <TopBarBack>
          <BackIcon onClick={handleBackClick} />
        </TopBarBack>
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
            <IdCheckBtn>중복확인</IdCheckBtn>
          </RowBox>
          <IdCheckMsg>*사용 가능한 아이디입니다.</IdCheckMsg>
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
              ></input>
            </Input>
          </RowBox>
        </form>
        <LoginBtn onClick={clickComplete}>회원가입</LoginBtn>
      </Wrapper>
      {isModalOpen && (
        <ModalWrapper>
          <Background />
          <Modal
            msgType={1}
            title='회원가입 완료'
            msg1='회원가입을 완료하시겠습니까?'
            msg2='작성한 회원 정보는 이후 변경이 어려워요.'
            option={2}
            setIsModalOpen={setIsModalOpen}
          />
        </ModalWrapper>
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

const RowBox = styled.div`
  display: flex;
  width: 250px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const IdCheckBtn = styled.div`
  display: flex;
  width: 58px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--green04);
  justify-content: center;
  align-items: center;

  color: var(--wh);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  letter-spacing: -0.5px;
`;

const IdCheckMsg = styled.div`
  width: 250px;
  display: flex;
  align-items: flex-start;
  color: var(--purple);
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 8px */
  letter-spacing: -0.5px;
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

//모달
const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
