import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorIcon } from '../../../assets/icons/vector.svg';

const ProgramInfo = ({ b }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Container>
        <div>
          <span>위치</span>
          <span>{b.college}</span>
        </div>
        <div>
          <span>운영시간</span>
          <span>{b.day}</span>
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

export default ProgramInfo;

const Container = styled.div`
  margin-top: 1.44rem;
  margin-bottom: 2.19rem;
  display: flex;
  flex-direction: column;
  gap: 1.0625rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    gap: 1.125rem;

    color: var(--bk01);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: -0.03125rem;

    span:nth-child(1) {
      width: 3.4375rem;
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
  width: 1.1875rem;
  height: 1.1875rem;
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
