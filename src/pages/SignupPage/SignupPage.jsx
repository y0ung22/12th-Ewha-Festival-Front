import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './components/Signup.style';

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
import { PostSignup, GetDuplicateId } from '../../api/auth';
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
    GetDuplicateId(username)
      .then(res => {
        setDuplicate(res.data.duplicate);
      })
      .catch();
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
    const isSatisfied =
      username &&
      duplicate !== null &&
      !duplicate &&
      password &&
      passwordCheck &&
      isPwSame &&
      nickname;

    if (isSatisfied) {
      setSignupForm({
        username: username,
        password: password,
        nickname: nickname
      });
    }
    setFieldSatisfied(isSatisfied);
    // console.log('duplicate: ' + duplicate);
    // console.log('isSatisfied: ' + isSatisfied);
  }, [username, duplicate, password, passwordCheck, isPwSame, nickname]);

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
      <S.Wrapper>
        <TopBar
          isMenu={false}
          isMain={false}
          isWhite={true}
          backLink='/login'
        />
        <S.Title>회원가입</S.Title>

        <S.RowBox>
          <S.InputBox num='187px'>
            <IdIcon />
            <input
              placeholder='아이디'
              type='text'
              name='username'
              onChange={e => setUsername(e.target.value)}
            ></input>
          </S.InputBox>
          <S.IdCheckBtn onClick={clickIdValid}>중복확인</S.IdCheckBtn>
        </S.RowBox>
        {duplicate !== null && (
          <S.IdCheckMsg>
            {duplicate
              ? '*사용 가능한 아이디입니다.'
              : '*다른 사람이 사용 중인 아이디입니다.'}
          </S.IdCheckMsg>
        )}
        <S.RowBox>
          <S.InputBox num='250px'>
            <PwIcon />
            <input
              type='password'
              placeholder='비밀번호'
              name='password'
              onChange={e => setPassword(e.target.value)}
            ></input>
          </S.InputBox>
        </S.RowBox>
        <S.RowBox>
          <S.InputBox num='212px'>
            <PwIcon />
            <input
              type='password'
              placeholder='비밀번호 확인'
              name='passwordCheck'
              onChange={e => setPasswordCheck(e.target.value)}
            ></input>
          </S.InputBox>
          <S.IconDiv>
            {isPwSame ? <CheckedIcon /> : <UncheckedIcon />}
          </S.IconDiv>
        </S.RowBox>
        <S.RowBox>
          <S.InputBox num='250px'>
            <NameIcon />
            <input
              placeholder='닉네임(최대 8자)'
              name='nickname'
              onChange={e => setNickname(e.target.value)}
              maxLength={8}
            ></input>
          </S.InputBox>
        </S.RowBox>
        <S.LoginBtn fieldSatisfied={fieldSatisfied} onClick={clickComplete}>
          회원가입
        </S.LoginBtn>
      </S.Wrapper>
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
