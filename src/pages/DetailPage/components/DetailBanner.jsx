import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Message } from '../images/messages.svg';
import { ReactComponent as Noti } from '../images/notification.svg';
import { ReactComponent as ScrapOff } from '../../../assets/icons/scrap-off.svg';
import { ReactComponent as ScrapOn } from '../../../assets/icons/scrap-on.svg';

const DetailBanner = ({ b }) => {
  const [isScraped, setIsScraped] = useState(false);
  return (
    <>
      <Banner>
        <div>
          <span>{b.name}</span>
          <span>
            {b.college} {b.number}
            <Circle />
            {b.category}
          </span>
        </div>
      </Banner>
      <Container>
        <a href={b.contact} target='_blank' rel='noopener noreferrer'>
          <Contact>
            <span>운영진 연락처</span>
            <Message />
          </Contact>
        </a>

        <Scrap>
          <span>{b.like_num}명이 스크랩했어요</span>
          {isScraped ? (
            <ScrapOn onClick={() => setIsScraped(false)} />
          ) : (
            <ScrapOff onClick={() => setIsScraped(true)} />
          )}
        </Scrap>
      </Container>
      <Notice>
        <div style={{ fontWeight: '800' }}>
          <Noti />
          실시간 공지사항
        </div>
        <div>{b.realtime}</div>
        <span>수정시간 {b.updated_at}</span>
      </Notice>
    </>
  );
};

export default DetailBanner;

const Banner = styled.div`
  position: relative;
  margin-top: 16px;
  width: 100%;
  height: 197px;
  border-radius: 15px;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(url) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  div {
    position: absolute;
    left: 1.12rem;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: var(--wh);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25rem;
    letter-spacing: -0.01875rem;

    span:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.25rem;

      font-size: 0.9375rem;
      font-weight: 500;
      letter-spacing: -0.03125rem;
    }
  }
`;

const Circle = styled.svg`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--wh);
`;

const Container = styled.div`
  margin: 1.44rem auto 1.19rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Contact = styled.div`
  display: flex;
  padding: 0.375rem 1.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border-radius: 1.875rem;
  border: 1px solid var(--green02);
  background: var(--green01);

  color: var(--wh);
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;
`;

const Scrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  color: var(--mint01);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;
`;

const Notice = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  padding: 0.6875rem 0.875rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray02);
  background: var(--wh);
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  color: var(--bk01);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  span {
    margin-left: auto;
    color: var(--gray05);
    text-align: right;
    font-size: 0.625rem;
    font-weight: 400;
  }
`;
