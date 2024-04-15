import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--wh);
`;

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubTitle = styled.div`
  margin: 25px auto 16px;
  width: 100%;

  color: var(--gray01);
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export const S = {
  Wrapper,
  Container,
  SubTitle
};
