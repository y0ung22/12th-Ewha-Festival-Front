import styled, { keyframes } from 'styled-components';
import React from 'react';

const ScrapSkeleton = ({ size }) => {
  return (
    <Wrapper>
      <Card size={size} />
      <Card size={size} />
    </Wrapper>
  );
};

export default ScrapSkeleton;

// 애니메이션 정의
const loadingAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f5f5f5;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem 0.625rem;

  margin: 0.625rem 0;
`;
const Card = styled.div`
  position: relative;
  @media (max-width: 370px) {
    width: 100%;
  }

  width: ${props => (props.size === 'small' ? '9.125rem' : '10.625rem')};
  height: ${props => (props.size === 'small' ? '11.375rem' : '12.3125rem')};
  flex-shrink: 0;
  flex-shrink: 0;
  border-radius: ${props => (props.size === 'small' ? '0.9375rem' : '20px')};
  background: #e7e7e7;
  animation: ${loadingAnimation} 1.5s infinite ease-in-out;
`;
