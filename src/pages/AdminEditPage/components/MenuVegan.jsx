import React, { useState } from 'react';
import styled from 'styled-components';

import { CommonBtn } from '../../../_common/Button';
import { useSearchParams } from 'react-router-dom';

const MenuVegan = ({ setVegan }) => {
  const [selected, setSelected] = useState('논비건');

  const handleSelect = menu => {
    setSelected(menu);
    setVegan(menu);
  };

  return (
    <Wrapper>
      <BtnStyle
        $active={selected === '논비건'}
        onClick={() => handleSelect('논비건')}
      >
        논비건
      </BtnStyle>
      <BtnStyle
        $active={selected === '페스코'}
        onClick={() => handleSelect('페스코')}
      >
        페스코
      </BtnStyle>
      <BtnStyle
        $active={selected === '비건'}
        onClick={() => handleSelect('비건')}
      >
        비건
      </BtnStyle>
    </Wrapper>
  );
};

export default MenuVegan;

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
