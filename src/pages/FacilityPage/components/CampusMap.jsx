import React, { useState } from 'react';
import styled from 'styled-components';
import { S } from '../components/Facility.style';
import campus_map from '../images/campus_map.png';

import { CommonBtn } from '../../../_common/Button';

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
        <img src={campus_map} />
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

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 340px) {
    width: 95%;
    height: auto;
    margin-bottom: 0;
  }
`;

const BtnContainer = styled.div`
  width: 19.5rem;
  display: flex;
  align-self: flex-start;
  gap: 0.625rem;
  margin-bottom: 0.88rem;

  @media (max-width: 340px) {
    width: 70%;
    height: auto;
  }
`;

const CardContainer = styled.div`
  position: relative;
`;
