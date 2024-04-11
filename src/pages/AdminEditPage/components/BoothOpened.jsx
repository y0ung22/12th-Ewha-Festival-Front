import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const BoothOpened = () => {
  return (
    <Wrapper>
      <OpenedBtn>운영 중</OpenedBtn>
      <ClosedBtn>운영 종료</ClosedBtn>
    </Wrapper>
  );
};

export default BoothOpened;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const BtnStyle = styled.div`
  display: flex;
  padding: 7px 17px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid;

  border-color: ${props => (props.$active ? '#03D664' : '#F2F2F2')};
  background-color: ${props => (props.$active ? '#00F16F' : '#F7F7F7')};

  color: ${props => (props.$active ? 'white' : '#BBB')};
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.5px;

  cursor: pointer;
`;
const OpenedBtn = styled(BtnStyle)``;
const ClosedBtn = styled(BtnStyle)``;
