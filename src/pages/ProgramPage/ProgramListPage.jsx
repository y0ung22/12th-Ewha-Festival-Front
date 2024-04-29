import React, { useState } from 'react';
import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import CategorySlide from '../../_common/CategorySlide';
import ProgramCard from './components/ProgramCard';

import { programData } from './components/mock';

const ProgramListPage = () => {
  const options = ['수', '목', '금'];

  return (
    <>
      <TopBar />
      <S.Wrapper>
        <S.Title>축제 일정</S.Title>
        <S.List>
          <CategorySlide options={options} />
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

export default ProgramListPage;
