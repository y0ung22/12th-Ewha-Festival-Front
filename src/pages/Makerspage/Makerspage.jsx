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
      <S.Title>멋쟁이사자처럼 12기 운영진</S.Title>
      <S.BoxContainer>
        <MakersBox data={LionsData} />
      </S.BoxContainer>
      <S.Title>대동제 TF 운영진</S.Title>
      <S.BoxContainer>
        <MakersBox data={TfData} />
      </S.BoxContainer>
      <Footer />
    </>
  );
};

export default MakersPage;
