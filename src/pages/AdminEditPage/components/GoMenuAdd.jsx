import React from 'react';
import styled from 'styled-components';

import shop from '../images/shop.svg';

const GoMenuAdd = () => {
  return (
    <Box>
      <img src={shop} />
      <Text>메뉴를 더 추가할 수 있어요</Text>
    </Box>
  );
};

export default GoMenuAdd;

const Box = styled.div`
  display: flex;
  width: 170px;
  height: 197px;
  padding: 60px 41px 46px 41px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 13px;
  flex-shrink: 0;

  border-radius: 20px;
  border: 1.5px solid var(--gray04);
  background: var(--wh01);
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  img {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
  }

  cursor: pointer;
`;

const Text = styled.div`
  color: var(--gray04);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 121.429% */
  letter-spacing: -0.5px;
`;
