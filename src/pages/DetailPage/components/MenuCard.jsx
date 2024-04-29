import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as ScrapOff } from '../../../assets/icons/scrap-off.svg';
import { ReactComponent as ScrapOn } from '../../../assets/icons/scrap-on.svg';

const MenuCard = ({ item }) => {
  const [isScraped, setIsScraped] = useState(item.is_liked);

  return (
    <Card>
      <Tag>{item.is_liked ? <span>페스트</span> : <span>비건</span>}</Tag>
      <Scrap>
        {isScraped ? (
          <ScrapOn onClick={() => setIsScraped(false)} />
        ) : (
          <ScrapOff onClick={() => setIsScraped(true)} />
        )}
      </Scrap>

      <Text>
        <span>{item.name}</span>
        <span>{item.price}원</span>
      </Text>
    </Card>
  );
};

export default MenuCard;

const Card = styled.div`
  position: relative;
  width: 10.625rem;
  height: 12.3125rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
`;

const Tag = styled.div`
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
  position: absolute;
  top: 1.06rem;
  right: 0.88rem;
`;

const Text = styled.div`
  position: absolute;
  left: 1.06rem;
  right: 1.06rem;
  bottom: 0.88rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  color: var(--wh);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.01875rem;

  span:nth-child(2) {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: -0.03125rem;
  }
`;
