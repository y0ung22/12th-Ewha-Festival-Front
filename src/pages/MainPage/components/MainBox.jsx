import styled from 'styled-components';

const MainBox = ({ item }) => {
  return (
    <Wrapper>
      <Title>{item.title}</Title>
      <Guide>{item.guide}</Guide>
      <Background src={item.image} />
    </Wrapper>
  );
};

export default MainBox;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 10.625rem;
  height: 12.3125rem;
  flex-shrink: 0;

  padding: 1.5rem 1.12rem 1.31rem;
  overflow: hidden;

  color: var(--green06, #006c31);

  border-radius: 1.25rem;
  border: 1px solid var(--gray04, #c1d9cc);
  background: linear-gradient(
    0deg,
    rgba(0, 255, 117, 0.2) 22.21%,
    rgba(217, 217, 217, 0) 119.97%
  );
`;

const Title = styled.div`
  position: relative;
  z-index: 2;
  white-space: pre-line;

  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; /* 110% */
  letter-spacing: -0.03125rem;
`;

const Guide = styled.div`
  position: relative;
  z-index: 2;

  white-space: pre-line;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1rem; /* 133.333% */
  letter-spacing: -0.03125rem;
`;

const Background = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 3.31rem;

  width: 9.125rem;
  height: 10.125rem;
  flex-shrink: 0;
`;
