import React, { useState } from 'react';
import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import CategorySlide from '../../_common/CategorySlide';
import ProgramCard from './components/ProgramCard';
import TFBoothCard from './components/TFBoothCard';

import { programData } from './components/mock';

const ProgramListPage = () => {
  const options = ['수', '목', '금'];

  return (
    <S.Wrapper>
      <TopBar isMenu={true} />
      <S.Container>
        <S.Title>
          <h2>메인행사</h2>
          <CategorySlide options={options} />
        </S.Title>
        <S.MainList>
          {programData.map((d, index) => (
            <ProgramCard key={index} d={d} />
          ))}
        </S.MainList>

        <S.Title>
          <h2>상설 부스</h2>
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
  );
};

export default ProgramListPage;
