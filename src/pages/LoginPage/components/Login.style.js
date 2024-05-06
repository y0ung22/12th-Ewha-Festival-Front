import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  align-self: center;
  background-color: white;
  overflow: hidden;

  left: 50%;
  transform: translate(-50%, 0);
`;

const Container = styled.div`
  width: 15.625rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: var(--bk01);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 108.333% */
  letter-spacing: -0.031rem;
  margin-top: 2.313rem;
  /* margin-bottom: 6.063rem; */
  margin-bottom: 12vh;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: var(--gray02);
  padding: 0.75rem;
  margin-bottom: 0.938rem;

  input {
    width: 100%;
    background-color: var(--gray02);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
    letter-spacing: -0.031rem;
    margin-left: 0.625rem;
  }
  input::placeholder {
    color: var(--gray01);
  }
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: var(--green04);
  margin-top: 2.875rem;
  margin-bottom: 0.938rem;

  color: var(--wh);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.031rem;
  cursor: pointer;
`;

const KakaoLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2.875rem;
  flex-shrink: 0;

  border-radius: 0.75rem;
  background: var(--yellow);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);

  color: var(--bk01);
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  margin-left: 4.174rem;
  margin-right: 0.813rem;
  margin-top: 0.25rem;
`;

const GotoSignUp = styled.div`
  color: var(--gray05);
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem; /* 216.667% */
  letter-spacing: -0.031rem;
  text-decoration-line: underline;
  margin-top: 1.25rem;
  cursor: pointer;
`;

export const S = {
  Wrapper,
  Container,
  Title,
  Input,
  LoginBtn,
  KakaoLogin,
  ImgDiv,
  GotoSignUp
};
