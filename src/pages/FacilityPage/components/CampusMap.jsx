import React, { useState } from 'react';
import styled from 'styled-components';
import { S } from '../components/Facility.style';

import { CommonBtn } from '../../../_common/Button';
import { ReactComponent as CampusMapImg } from '../images/campus_map.svg';

import TrashcanCard from './TrashcanCard';
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
      <FixedDiv>
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
      </FixedDiv>
      {select === '쓰레기통'
        ? trashcanData.map((item, index) => (
            <TrashcanCard
              key={index}
              location={item.location}
              detail={item.detail}
              img={item.img}
              isLastElement={index === trashcanData.length - 1}
            />
          ))
        : returngasData.map((item, index) => (
            <TrashcanCard
              key={index}
              location={item.location}
              detail={item.detail}
              img={item.img}
              isLastElement={index === returngasData.length - 1}
            />
          ))}
    </>
  );
};

export default CampusMap;

const FixedDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  background-color: white;
  padding-right: 1.25rem; */
`;

const ImgBox = styled.div`
  width: 19.5rem;
  height: 18.59788rem;
  flex-shrink: 0;
  margin-top: 1.06rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 0.625rem;
  margin-bottom: 0.88rem;
`;
