import React, { useState } from 'react';
import styled from 'styled-components';

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
      <Wrapper>
        <Title>축제 일정</Title>
        <CategorySlide options={options} />
        {programData.map((item, index) => (
          <ProgramCard
            key={index}
            title={item.title}
            detail={item.detail}
            img={item.img}
          />
        ))}
      </Wrapper>
      <Footer />
    </>
  );
};

export default ProgramListPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: var(--wh);

  padding: 0 1.25rem 0 1.31rem;
`;

const Title = styled.div`
  color: var(--bk01);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 108.333% */
  letter-spacing: -0.03125rem;

  margin-top: 2.31rem;
  margin-bottom: 1.81rem;
`;
