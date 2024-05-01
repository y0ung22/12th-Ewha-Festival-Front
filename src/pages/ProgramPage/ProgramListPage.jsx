import React, { useState, useEffect } from 'react';
import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import CategorySlide from '../../_common/CategorySlide';
import ProgramCard from './components/ProgramCard';
import TFBoothCard from './components/TFBoothCard';

import { programData } from './components/programData';

const ProgramListPage = () => {
  // 메인행사 카테고리 슬라이드 옵션 설정
  const options = ['수', '목', '금'];
  const [select, setSelect] = useState('수');

  const handleOption = option => {
    setSelect(option);
  };

  // 해당 요일에 따라 옵션 초기값 세팅
  useEffect(() => {
    const today = new Date().getDay();
    const dayMap = ['수', '수', '수', '수', '목', '금', '금'];
    setSelect(dayMap[today]);
  }, []);

  // 상설 부스 데이터
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
    <S.Wrapper>
      <TopBar isMenu={true} />
      <S.Container>
        <S.Title>
          <h2>메인행사</h2>
          <CategorySlide
            options={options}
            handleOption={handleOption}
            select={select}
          />
        </S.Title>
        <S.MainList>
          {programData[select].map((d, index) => (
            <ProgramCard key={index} d={d} />
          ))}
        </S.MainList>

        <S.Title>
          <h2>상설 부스</h2>
          {/* <CategorySlide options={options} /> */}
        </S.Title>
        <S.BoothList>
          {boothData.map((d, index) => (
            <TFBoothCard key={index} d={d} />
          ))}
        </S.BoothList>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default ProgramListPage;
