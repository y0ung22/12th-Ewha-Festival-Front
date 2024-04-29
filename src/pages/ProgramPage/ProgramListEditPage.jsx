import React, { useState } from 'react';
import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import ProgramCard from './components/ProgramCard';

import { programData } from './components/mock';

const ProgramListEditPage = () => {
  return (
    <>
      <TopBar />
      <S.Wrapper>
        <S.Title num='2.31rem'>부스 수정하기</S.Title>
        <S.List>
          {programData.map((item, index) => (
            <ProgramCard
              key={index}
              title={item.title}
              detail={item.detail}
              img={item.img}
            />
          ))}
        </S.List>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default ProgramListEditPage;
