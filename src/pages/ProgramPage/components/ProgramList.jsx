import React, { useState, useEffect } from 'react';
import { S } from './Program.style';

import CategorySlide from '../../../_common/CategorySlide';
import ProgramCard from './ProgramCard';
import { programData } from './programData';

const ProgramList = () => {
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

  return (
    <>
      <S.Title>
        <h2>메인행사</h2>
        <CategorySlide {...{ options, handleOption, select }} />
      </S.Title>
      <S.MainList>
        {programData[select].map((d, index) => (
          <ProgramCard key={index} d={d} />
        ))}
      </S.MainList>
    </>
  );
};

export default ProgramList;
