import React, { useState } from 'react';
import styled from 'styled-components';
import { S } from '../components/Facility.style';

import { CommonBtn } from '../../../_common/Button';
import { ReactComponent as CampusMapImg } from '../images/campus_map.svg';

import FacilityCard from './FacilityCard';
import { trashcanData } from './TrashcanData';
import { returngasData } from './ReturnGasData';

const options = ['쓰레기통', '다회용기/부탄가스 수거'];

const CampusMap = () => {
  const [select, setSelect] = useState('쓰레기통');

  const handleOption = selectedOption => {
    setSelect(selectedOption);
  };

  return (
    <>
      <S.Title>주요 시설 위치</S.Title>
      <ImgBox>
        <CampusMapImg />
      </ImgBox>
      <BtnContainer>
        {options.map(opt => (
          <CommonBtn
            key={opt}
            onClick={() => handleOption(opt)}
            color={select === opt ? 'green' : undefined}
          >
            {opt}
          </CommonBtn>
        ))}
      </BtnContainer>
      <CardContainer>
        {select === '쓰레기통'
          ? trashcanData.map((item, index) => (
              <FacilityCard
                key={index}
                location={item.location}
                detail={item.detail}
                img={item.img}
                isLastElement={index === trashcanData.length - 1}
              />
            ))
          : returngasData.map((item, index) => (
              <FacilityCard
                key={index}
                location={item.location}
                detail={item.detail}
                img={item.img}
                isLastElement={index === returngasData.length - 1}
              />
            ))}
      </CardContainer>
    </>
  );
};

export default CampusMap;

const ImgBox = styled.div`
  width: 19.5rem;
  height: 18.59788rem;
  flex-shrink: 0;
  margin: 1.06rem 0 1.78rem 0;
  display: flex;
  align-self: center;
`;

const BtnContainer = styled.div`
  width: 19.5rem;
  display: flex;
  align-self: flex-start;
  gap: 0.625rem;
  margin-bottom: 0.88rem;
`;

const CardContainer = styled.div`
  position: relative;
`;
