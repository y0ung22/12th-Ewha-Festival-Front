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
    left: 18px;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: var(--wh);
    font-size: 24px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.3px;

    span:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;

      font-size: 15px;
      font-weight: 500;
      letter-spacing: -0.5px;
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
  margin: 23px auto 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Contact = styled.div`
  display: flex;
  padding: 6px 17px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 30px;
  border: 1px solid var(--green02);
  background: var(--green01);

  color: var(--wh);
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const Scrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--mint01);
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const Notice = styled.div`
  display: flex;
  width: 100%;
  height: 96px;
  padding: 11px 14px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid var(--gray02);
  background: var(--wh);
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  color: var(--bk01);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  span {
    margin-left: auto;
    color: var(--gray05);
    text-align: right;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
`;
