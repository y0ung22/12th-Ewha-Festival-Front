import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import { CommonBtn } from '../../_common/Button';

import { ReactComponent as CampusMap } from './images/campus_map.svg';
import TrashcanCard from './TrashcanCard';

const option = ['쓰레기통', '그릇 반납'];

const FacilityPage = () => {
  const [select, setSelect] = useState('쓰레기통');

  const handleOption = selectedOption => {
    setSelect(selectedOption);
  };

  return (
    <>
      <TopBar isMenu={true} />
      <Wrapper>
        <Title>주요 시설 위치</Title>
        <CampusMapImg>
          <CampusMap />
        </CampusMapImg>
        <BtnContainer>
          {option.map(opt => (
            <CommonBtn
              key={opt}
              onClick={() => handleOption(opt)}
              color={select === opt ? 'green' : undefined}
            >
              {opt}
            </CommonBtn>
          ))}
        </BtnContainer>
        {/* CardList 컴포넌트 -> 그릇반납 ui 나온 후 작업*/}
        <TrashcanCard />
      </Wrapper>
      <Footer />
    </>
  );
};

export default FacilityPage;

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
`;

const CampusMapImg = styled.div`
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
