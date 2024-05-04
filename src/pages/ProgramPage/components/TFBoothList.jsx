import React, { useState, useEffect } from 'react';
import { S } from './Program.style';

import SelectBtn from './SelectBtn';
import TFBoothCard from './TFBoothCard';

import { GetTFBoothList } from '../../../api/tf';

const TFBoothList = () => {
  const isEdit = window.location.pathname === '/tfedit';

  const typeList = ['기획 부스', '권리팀 부스', '대외협력팀 부스'];
  const [selectedType, setSelectedType] = useState(0);

  // TF 부스 목록 데이터
  const [boothData, setBoothData] = useState();

  useEffect(() => {
    GetTFBoothList(selectedType + 1)
      .then(res => setBoothData(res))
      .catch();
  }, [selectedType]);

  return (
    <>
      <S.Title>
        {isEdit ? <h2>부스 수정하기</h2> : <h2>상설 부스</h2>}
        <SelectBtn {...{ typeList, selectedType, setSelectedType }} />
      </S.Title>
      <S.BoothList>
        {boothData?.map((d, index) => (
          <TFBoothCard key={index} d={d} isEdit={isEdit} />
        ))}
      </S.BoothList>
    </>
  );
};

export default TFBoothList;
