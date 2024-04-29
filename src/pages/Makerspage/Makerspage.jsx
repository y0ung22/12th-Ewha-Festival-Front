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
      <S.Wrapper1>
        <S.Text>
          2024
          <br />
          이화여대 대동제
        </S.Text>
        <S.Wrapper2>
          <S.Title>멋쟁이사자처럼 12기 운영진</S.Title>
          <S.BoxContainer dataLength={LionsData.length}>
            <MakersBox data={LionsData} />
          </S.BoxContainer>
        </S.Wrapper2>
        <S.Wrapper2>
          <S.Title>
            {'('}준{')'}축제준비위원회 운영진
          </S.Title>
          <S.BoxContainer dataLength={TfData.length}>
            <MakersBox data={TfData} />
          </S.BoxContainer>
        </S.Wrapper2>
        <S.Explain>
          *총 63인의 축제준비위원회 위원들과 함께 운영하고 있습니다.
        </S.Explain>
        <Footer />
      </S.Wrapper1>
    </>
  );
};

export default MakersPage;
