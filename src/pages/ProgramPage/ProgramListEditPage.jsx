import React, { useState } from 'react';
import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import TFBoothCard from './components/TFBoothCard';

const ProgramListEditPage = () => {
  const [boothData, setBoothData] = useState([
    {
      id: 1,
      user: 1,
      name: 'Stamp on EWHA',
      place: '',
      opened: true,
      type: '기획부스',
      thumnail: ''
    }
  ]);

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
            {boothData.map((d, index) => (
              <TFBoothCard key={index} d={d} edit={true} />
            ))}
          </S.BoothList>
        </S.Container>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default ProgramListEditPage;
