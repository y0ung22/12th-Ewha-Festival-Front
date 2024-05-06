import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ScrapOff } from '../../../assets/icons/scrap-off.svg';
import { ReactComponent as ScrapOn } from '../../../assets/icons/scrap-on.svg';
import DefaultCard from '../../../assets/images/default-card.png';

import { PatchMenuScrap } from '../../../api/booth';

const MainMenuCard = ({ item, size }) => {
  const navigate = useNavigate();
  const [isScraped, setIsScraped] = useState(item.is_liked);

  const handleScrap = e => {
    e.stopPropagation();
    PatchMenuScrap(item.id)
      .then(res => setIsScraped(!isScraped))
      .catch();
  };

  return (
    <Card onClick={() => navigate(`/detail/${item.booth_id}`)} size={size}>
      <div className='overlay' />
      {item.thumnail ? (
        <BackgroundImg src={item.thumnail} alt='menu img' />
      ) : (
        <BackgroundImg src={DefaultCard} alt='menu img' />
      )}
      <Tag>{item.vegan !== '논비건' && <span>{item.vegan}</span>}</Tag>
      <Scrap>
        {isScraped ? (
          <ScrapOn onClick={e => handleScrap(e)} />
        ) : (
          <ScrapOff onClick={e => handleScrap(e)} />
        )}
      </Scrap>
      <Text>
        <span>{item.name}</span>
        <span>{item.info}</span>
      </Text>
      {item.opened && <ClosedSign>판매종료</ClosedSign>}
    </Card>
  );
};

export default MainMenuCard;

const Card = styled.div`
  position: relative;

  @media (max-width: 440px) {
    aspect-ratio: ${props =>
      props.size === 'small' ? '9.125 / 11.375' : '10.625 / 12.3125'};
    width: 100%;
    height: 100%;
  }

  width: 9.125rem;
  height: 11.375rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(0, 0, 0, 0.7) 129.38%
    );
    z-index: 1;
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tag = styled.div`
  z-index: 2;
  position: absolute;
  top: 1.06rem;
  left: 1.06rem;

  span {
    display: flex;
    width: 2.875rem;
    height: 1.25rem;
    padding: 0rem 0.375rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: var(--green05, rgba(0, 241, 111, 0.4));

    color: var(--wh);
    text-align: center;
    font-size: 0.6875rem;
    font-weight: 600;
    line-height: 1.25rem;
  }
`;

const Scrap = styled.div`
  z-index: 5;
  position: absolute;
  top: 1.06rem;
  right: 0.88rem;

  svg {
    cursor: pointer;
  }
`;

const Text = styled.div`
  z-index: 2;
  position: absolute;
  left: 1.06rem;
  right: 1.06rem;
  bottom: 0.88rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  color: var(--wh);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.01875rem;

  span:nth-child(2) {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: -0.03125rem;
  }
`;

const ClosedSign = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0.9375rem;
  background: var(--green05, rgba(0, 241, 111, 0.4));

  color: var(--wh);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.25rem;
  letter-spacing: -0.01875rem;
`;
