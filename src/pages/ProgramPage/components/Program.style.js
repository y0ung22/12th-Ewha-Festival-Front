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
  justify-content: space-between;
  align-items: center;

  h2 {
    color: var(--bk01);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.625rem;
    letter-spacing: -0.03125rem;
  }
`;

const MainList = styled.div`
  margin-bottom: 2.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

const BoothList = styled.div`
  margin-bottom: 8.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.62rem;
`;

export const S = {
  Wrapper,
  Container,
  Title,
  MainList,
  BoothList
};
