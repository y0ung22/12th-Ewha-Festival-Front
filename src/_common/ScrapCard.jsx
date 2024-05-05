import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { PatchBoothScrap } from '../api/booth';

import { ReactComponent as ScrapOff } from '../assets/icons/scrap-off.svg';
import { ReactComponent as ScrapOn } from '../assets/icons/scrap-on.svg';

import defaultCard from '../assets/images/default-card.png';

const ScrapCard = ({ item, size }) => {
  const navigate = useNavigate();
  const [isScraped, setIsScraped] = useState(item.is_liked);

  const handleScrap = () => {
    PatchBoothScrap(item.id)
      .then(res => setIsScraped(!isScraped))
      .catch();
  };
  return (
    <Card
      size={size}
      src={item.thumnail ? item.thumnail : defaultCard}
      alt='menu img'
      onClick={() => navigate(`/detail/${item.id}`)}
    >
      {isScraped ? (
        <ScrapOn onClick={handleScrap} />
      ) : (
        <ScrapOff onClick={handleScrap} />
      )}
      <SpanDiv size={size}>
        <span>{item.name}</span>
        <span>{item.info}</span>
      </SpanDiv>
      {!item.opened && <ClosedSign>운영종료</ClosedSign>}
    </Card>
  );
};

export default ScrapCard;

const Card = styled.div`
  position: relative;
  aspect-ratio: ${props =>
    props.size === 'small' ? '9.125 / 11.375' : '170 / 197'};
  width: ${props => (props.size === 'small' ? '9.125rem' : '100%')};
  height: ${props => (props.size === 'small' ? '11.375rem' : '100%')};
  flex-shrink: 0;
  border-radius: ${props => (props.size === 'small' ? '0.9375rem' : '20px')};
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.4) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(${props => props.src}) center / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
  overflow: hidden;

  svg {
    position: absolute;
    top: 17px;
    right: 14px;
    z-index: 5;
  }
`;

const SpanDiv = styled.div`
  position: absolute;
  left: ${props => (props.size === 'small' ? '0.75rem' : '17px')};
  right: 17px;
  bottom: ${props => (props.size === 'small' ? '0.62rem' : '14px')};
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: var(--wh);
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.3px;

  span:nth-child(1) {
    width: ${props => (props.size === 'small' ? '7.8rem' : '9rem')};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    font-size: 1rem;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
  }
`;

const ClosedSign = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: var(--green05, rgba(0, 241, 111, 0.4));
  color: var(--wh);

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
`;
