import React, { useState } from 'react';
import { S } from './Program.style';

import SelectBtn from './SelectBtn';
import TFBoothCard from './TFBoothCard';

const TFBoothList = () => {
  const isEdit = window.location.pathname === '/programedit';

  const typeList = ['기획 부스', '권리팀 부스', '대외협력팀 부스'];
  const [selectedType, setSelectedType] = useState(typeList[0]);

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
    <>
      <S.Title>
        {isEdit ? <h2>부스 수정하기</h2> : <h2>상설 부스</h2>}
        <SelectBtn {...{ typeList, selectedType, setSelectedType }} />
      </S.Title>
      <S.BoothList>
        {boothData.map((d, index) => (
          <TFBoothCard key={index} d={d} isEdit={isEdit} />
        ))}
      </S.BoothList>
    </>
  );
};

export default TFBoothList;
