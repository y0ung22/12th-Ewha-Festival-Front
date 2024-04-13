import React from 'react';
import styled from 'styled-components';

import { CommonBtn } from '../../../_common/Button';

const MenuOpened = ({ opened, setOpened }) => {
  return (
    <Wrapper>
      <BtnStyle $active={opened} onClick={() => setOpened(true)}>
        운영 중
      </BtnStyle>
      <BtnStyle $active={!opened} onClick={() => setOpened(false)}>
        운영 종료
      </BtnStyle>
    </Wrapper>
  );
};

export default MenuOpened;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const BtnStyle = styled(CommonBtn)`
  background: ${({ $active }) =>
    $active ? 'var(--green01)' : 'var(--gray03)'};
  border: ${({ $active }) =>
    $active ? '1px solid var(--green02)' : '1px solid var(--gray02)'};
  color: ${({ $active }) => ($active ? 'var(--wh)' : 'var(--gray01)')};

  cursor: pointer;
`;
