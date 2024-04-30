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
  margin: 1.56rem auto 1rem;
  width: 100%;

  color: var(--gray01);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;
`;

export const S = {
  Wrapper,
  Container,
  SubTitle
};
