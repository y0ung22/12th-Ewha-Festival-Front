import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CommonBtn } from '../../../_common/Button';

const PlaceSheet = ({ placeList, selectedPlace, setPlace }) => {
  return (
    <Wrapper>
      <Question>어디로 갈까요?</Question>
      <SelectBox>
        {placeList &&
          placeList.map((item, index) => (
            <PlaceBtn
              key={index}
              onClick={() => setPlace(item)}
              color={selectedPlace === item ? 'green' : ''}
            >
              {item}
            </PlaceBtn>
          ))}
      </SelectBox>
      <Guide>{selectedPlace}에서 운영중인 부스에 대해 알 수 있어요🍀</Guide>
    </Wrapper>
  );
};

export default PlaceSheet;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 1.875rem 1.4375rem 9.75rem 1.4375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;

  background: var(--wh, #fff);
  z-index: 101;
`;

const Question = styled.span`
  color: var(--bk01, #000);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.625rem;
  flex-wrap: wrap;
`;

const PlaceBtn = styled(CommonBtn)`
  cursor: pointer;
`;

const Guide = styled.span`
  color: var(--gray01, #bbb);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.03125rem;
`;
