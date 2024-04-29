import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--wh);
`;

const Title = styled.div`
  margin-top: 2.31rem;
  margin-bottom: ${({ num }) => num || '1.81rem'};
  color: var(--bk01);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.03125rem;
`;

const List = styled.div`
  margin-bottom: 6.87rem;
  display: flex;
  flex-direction: column;
  gap: 1.13rem;
`;

export const S = {
  Wrapper,
  Title,
  List
};
