import React from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import background from '../../assets/images/background.png';
import { ReactComponent as Map } from './images/barrier-free-map.svg';
import Footer from '../../_common/Footer';

const BarrierFreePage = () => {
  return (
    <Wrapper>
      <Background src={background} alt='배경 이미지' />
      <TopBar isWhite={true} isMenu={true} isMain={true} isAbout={true} />
      <MainText>배리어프리 확인하기</MainText>
      <MainImg>
        <Map />
      </MainImg>
      <Caption>본좌석은 베리어프리 좌석입니다.</Caption>
      <Description>
        {[
          '해방이화 (준)축제준비위원회에서는',
          '더 많은 이화인들이 축제를 즐길 수 있는 환경을',
          '제공하고자 합니다.',
          '',
          '이에 휠체어 이용자, 혹은 이용자가 아니더라도',
          '별도 공간이 필요하신 분들을 위해',
          '본 무대에서 배리어프리석을 마련하고,',
          '속기사를 지원하고 있습니다.',
          '',
          '배리어프리석의 위치는 다음의 그림과 같이',
          '본무대 공연 좌석 좌측 앞으로 마련해두었습니다.',
          '',
          '이에, 배리어프리석을 희망하시는 분들께서는',
          '본 무대 공연 앞쪽 출입구를 통해',
          '입장해주시면 감사하겠습니다.'
        ].map((line, index) => (
          <React.Fragment key={index}>
            <p>{line}</p>
            {line.trim() === '' && <br />}
          </React.Fragment>
        ))}
      </Description>

      <Footer />
    </Wrapper>
  );
};

export default BarrierFreePage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: var(--wh);
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

const MainText = styled.div`
  margin: 2.31rem 0 1.94rem;
  width: 20.375rem;

  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.03125rem;

  @media screen and (max-width: 390px) {
    width: 82%;
  }
`;

const MainImg = styled.div`
  display: flex;
  width: 20rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.3125rem;
  border: 1px solid var(--gray01);
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25) inset;
  backdrop-filter: blur(2px);

  @media screen and (max-width: 390px) {
    width: 82%;

    svg {
      height: 100%;
    }
  }
`;

const Caption = styled.div`
  margin: 0.25rem 0 1.19rem;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.03125rem;
`;

const Description = styled.div`
  padding: 2.25rem 9% 0;
  width: 100%;
  height: 33rem;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  border-top: 1px solid var(--gray01);
  background: var(--wh02, rgba(251, 251, 251, 0.3));
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25) inset;
  backdrop-filter: blur(2px);

  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 366px) {
    font-size: 0.9rem;
  }
`;
