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
  width: 100%;
  margin-top: 1.13rem;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: var(--bk01);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 108.333% */
  letter-spacing: -0.03125rem;
`;

export const S = {
  Wrapper,
  Container,
  Title
};
