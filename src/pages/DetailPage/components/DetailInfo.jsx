import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorIcon } from '../../../assets/icons/vector.svg';

const DetailInfo = ({ b }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Container>
        <div>
          <span>위치</span>
          <span>
            {b.college} {b.number}
          </span>
        </div>
        <div>
          <span>운영시간</span>
          <span>
            {b.day.map((day, index) => (
              <p key={index}>{day}</p>
            ))}
          </span>
        </div>
        <div>
          <span>소개글</span>
          <span className={!isExpanded && 'hidden'}>{b.description}</span>
          <Vector
            onClick={() => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
          />
        </div>
      </Container>
      <GreenLine />
    </>
  );
};

export default DetailInfo;

const Container = styled.div`
  margin-top: 23px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    gap: 18px;

    color: var(--bk01);
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.5px;

    span:nth-child(1) {
      width: 55px;
      flex-shrink: 0;
      font-weight: 600;
    }

    .hidden {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
`;

const Vector = styled(VectorIcon)`
  margin-left: auto;
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
`;

const GreenLine = styled.div`
  margin-left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  background: #f2f2f2;
`;
