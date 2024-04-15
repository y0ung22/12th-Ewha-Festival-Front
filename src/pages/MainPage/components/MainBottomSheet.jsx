import styled from 'styled-components';

const MainBottomSheet = () => {
  return <Wrapper></Wrapper>;
};

export default MainBottomSheet;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  padding: 1.875rem 1.0625rem;
  gap: 0.875rem 0.625rem;

  border-radius: 1.875rem 1.875rem 0rem 0rem;
  border: 1px solid var(--gray04, #c1d9cc);
  background: var(--wh01, #fff);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
