import React from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import MakersBox from './components/MakersBox';

import { S } from './components/Makers.style';

import { LionsData } from './components/Makers.mock';
import { TfData } from './components/Makers.mock';

const MakersPage = () => {
  return (
    <>
      <TopBar />
      <Wrapper1>
        <Text>
          2024
          <br />
          이화여대 대동제
        </Text>
        <Wrapper2>
          <S.Title>멋쟁이사자처럼 12기 운영진</S.Title>
          <S.BoxContainer dataLength={LionsData.length}>
            <MakersBox data={LionsData} />
          </S.BoxContainer>
        </Wrapper2>
        <Wrapper2>
          <S.Title>대동제 TF 운영진</S.Title>
          <S.BoxContainer dataLength={TfData.length}>
            <MakersBox data={TfData} />
          </S.BoxContainer>
        </Wrapper2>
      </Wrapper1>
      <Footer />
    </>
  );
};

export default MakersPage;

const Wrapper1 = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 140px;
`;

const Wrapper2 = styled.div`
  width: 330px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 74px;
`;

const Text = styled.div`
  color: var(--bk01);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
  letter-spacing: -0.5px;

  margin-top: 37px;
`;
