import { styled } from 'styled-components';

export const CommonBtn = styled.div`
  display: inline-flex;
  padding: 7px 17px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: ${({ color }) =>
    color === 'green' ? '1px solid var(--green02)' : '1px solid var(--gray02)'};
  background: ${({ color }) =>
    color === 'green' ? 'var(--green01)' : 'var(--gray03)'};

  color: ${({ color }) => (color === 'green' ? 'var(--wh)' : 'var(--gray01)')};
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
  cursor: pointer;
`;
