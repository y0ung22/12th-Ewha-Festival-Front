import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: hidden;
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
  letter-spacing: -0.03125rem;
  margin-top: 2.3125rem;
  margin-bottom: 12vh;
`;

const RowBox = styled.div`
  display: flex;
  width: 100%;
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
  cursor: pointer;
`;

const IdCheckMsg = styled.div`
  width: 15.625rem;
  display: flex;
  align-items: flex-start;
  color: var(--purple);
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 8px */
  letter-spacing: -0.03125rem;
  margin-top: 0.438rem;
  margin-left: 0.375rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ num }) => num};
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: var(--gray02);
  padding: 0.75rem;

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

const IconDiv = styled.div`
  margin-right: 0.375rem;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.625rem;
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: ${props =>
    props.fieldSatisfied ? `var(--green04)` : `var(--green05)`};
  margin-top: 2.875rem;
  margin-bottom: 0.938rem;
  cursor: pointer;

  color: var(--wh);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.031rem;
`;

export const S = {
  Wrapper,
  Container,
  Title,
  RowBox,
  IdCheckBtn,
  IdCheckMsg,
  InputBox,
  IconDiv,
  LoginBtn
};
