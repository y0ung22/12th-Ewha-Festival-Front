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
  height: 100%;
  padding-top: 1.13rem;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
  color: var(--bk01);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 108.333% */
  letter-spacing: -0.03125rem;
  margin-top: 2.31rem;
`;

export const S = {
  Wrapper,
  Container,
  Title
};
