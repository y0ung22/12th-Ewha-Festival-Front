import React from 'react';
import styled from 'styled-components';

import trash from '../images/trash.svg';

const GoMenuEdit = ({ menu, price, img, is_soldout }) => {
  return (
    <Box img={img}>
      <img src={trash} alt='삭제' />
      <Name>{menu}</Name>
      <Price>{price}원</Price>
      {is_soldout || <Overlay>운영 종료</Overlay>}
    </Box>
  );
};

export default GoMenuEdit;

// 품절일 경우
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 170px;
  height: 197px;
  flex-shrink: 0;

  border-radius: 20px;
  background: rgba(0, 172, 79, 0.58);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--wh);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px; /* 83.333% */
  letter-spacing: -0.3px;
`;

const Box = styled.div`
  position: relative;
  width: 170px;
  height: 197px;
  flex-shrink: 0;
  border-radius: 20px;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(${({ img }) => img}) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  img {
    position: absolute;
    top: 20px;
    right: 16px;

    width: 26px;
    height: 26px;
    flex-shrink: 0;
  }
`;

const Name = styled.div`
  position: absolute;
  bottom: 38px;
  left: 17px;

  display: -webkit-box;
  width: 136px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  overflow: hidden;
  color: var(--wh);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
  letter-spacing: -0.3px;
`;

const Price = styled.div`
  position: absolute;
  bottom: 14px;
  left: 17px;

  color: var(--wh, #fff);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.5px;
`;
