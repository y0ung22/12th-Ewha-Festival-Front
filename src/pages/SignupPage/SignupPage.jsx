import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

//icons
import { ReactComponent as IdIcon } from './images/id.svg';
import { ReactComponent as PwIcon } from './images/pw.svg';
import { ReactComponent as NameIcon } from './images/namelogo.svg';
import { ReactComponent as CheckedIcon } from './images/checked.svg';
import { ReactComponent as UncheckedIcon } from './images/unchecked.svg';

//components
import TopBar from '../../_common/TopBar';
import Modal from '../../_common/Modal';

//api & recoil
import { PostSignup, PostCheckId } from '../../api/auth';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { SignupState } from '../../assets/recoil/apiRecoil';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();
  const signupForm = useRecoilValue(SignupState);
  const setSignupForm = useSetRecoilState(SignupState);

  //아이디 중복확인
  const [duplicate, setDuplicate] = useState(null);
  const clickIdValid = () => {
    if (username.trim() === '') {
      alert('아이디를 입력해주세요.');
      return;
    }
    const isIdChecked = PostCheckId(username);
    setDuplicate(isIdChecked['duplicate']);
    console.log(isIdChecked);
    console.log('duplicate:' + duplicate);
  };

  //아이디 재설정 확인
  useEffect(() => {
    setDuplicate(null);
  }, [username]);

  //비밀번호 일치확인
  const isPwSame = (password != '') & (password === passwordCheck);

  //버튼 활성화
  const [fieldSatisfied, setFieldSatisfied] = useState(false);

  useEffect(() => {
    const isFieldSatisfied =
      username &&
      duplicate !== null &&
      !duplicate &&
      password &&
      passwordCheck &&
      isPwSame &&
      nickname;

    if (isFieldSatisfied) {
      setSignupForm({
        username: username,
        password: password,
        nickname: nickname
      });
    }
    setFieldSatisfied(isFieldSatisfied);
  }, [username, duplicate]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickComplete = () => {
    if (fieldSatisfied) {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setSignupForm({
        username: username,
        password: password,
        nickname: nickname
      });
    }, 500);

    //clean up
    return () => clearTimeout(delayTimer);
  }, [nickname]);

  //회원가입 post 함수
  const handleOnSubmit = () => {
    PostSignup(
      signupForm.username,
      signupForm.password,
      signupForm.nickname,
      navigate
    );
  };

  return (
    <>
      <Wrapper>
        <TopBar isMenu={false} isMain={false} isWhite={true} />
        <Title>회원가입</Title>

        <RowBox>
          <InputBox num='187px'>
            <IdIcon />
            <input
              placeholder='아이디'
              type='text'
              name='username'
              onChange={e => setUsername(e.target.value)}
            ></input>
          </InputBox>
          <IdCheckBtn onClick={clickIdValid}>중복확인</IdCheckBtn>
        </RowBox>
        {duplicate !== null && (
          <IdCheckMsg>
            {duplicate
              ? '*사용 가능한 아이디입니다.'
              : '*다른 사람이 사용 중인 아이디입니다.'}
          </IdCheckMsg>
        )}
        <RowBox>
          <InputBox num='250px'>
            <PwIcon />
            <input
              type='password'
              placeholder='비밀번호'
              name='password'
              onChange={e => setPassword(e.target.value)}
            ></input>
          </InputBox>
        </RowBox>
        <RowBox>
          <InputBox num='212px'>
            <PwIcon />
            <input
              type='password'
              placeholder='비밀번호 확인'
              name='passwordCheck'
              onChange={e => setPasswordCheck(e.target.value)}
            ></input>
          </InputBox>
          <IconDiv>{isPwSame ? <CheckedIcon /> : <UncheckedIcon />}</IconDiv>
        </RowBox>
        <RowBox>
          <InputBox num='250px'>
            <NameIcon />
            <input
              placeholder='닉네임(최대 8자)'
              name='nickname'
              onChange={e => setNickname(e.target.value)}
              maxLength={8}
            ></input>
          </InputBox>
        </RowBox>
        <LoginBtn fieldSatisfied={fieldSatisfied} onClick={clickComplete}>
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
          onClickYes={handleOnSubmit}
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

const InputBox = styled.div`
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
