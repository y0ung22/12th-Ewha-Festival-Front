import React, { useState } from 'react';
import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import ProgramCard from './components/ProgramCard';

import { programData } from './components/mock';
import TFBoothCard from './components/TFBoothCard';

const ProgramListEditPage = () => {
  return (
    <>
      <S.Wrapper>
        <TopBar isMenu={true} />
        <S.Container>
          <S.Title>
            <h2>부스 수정하기</h2>
            {/* <CategorySlide options={options} /> */}
          </S.Title>
          <S.BoothList>
            {programData.map((d, index) => (
              <TFBoothCard key={index} d={d} />
            ))}
          </S.BoothList>
        </S.Container>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default ProgramListEditPage;
