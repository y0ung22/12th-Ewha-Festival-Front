import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorThin } from '../../../assets/icons/vector_thin.svg';
import { ReactComponent as CampusMap } from '../images/campus_map.svg';

const TrashcanCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickCard = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <Container>
          <Contents>
            <Place>정문</Place>
            <Detail>잔디광장 24번 부스 옆</Detail>
          </Contents>
          <VectorDiv isOpen={isOpen} onClick={clickCard}>
            <VectorThin />
          </VectorDiv>
        </Container>
        {isOpen && (
          <>
            <Line />
            <MapDiv>
              <CampusMap height='auto' />
            </MapDiv>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default TrashcanCard;

const Wrapper = styled.div`
  width: 21.8125rem;
  height: ${props => (props.isOpen ? '19.4375rem' : '5.4375rem')};
  display: flex;
  flex-direction: column;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray04);
  background: var(--wh);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Contents = styled.div`
  width: 100%;
  padding: 1.25rem;
`;

const VectorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.28rem;
  transform: ${props => (props.isOpen ? 'rotate(270deg)' : 'rotate(90deg)')};
`;

const Place = styled.div`
  height: 1.375rem;
  flex-shrink: 0;
  color: var(--bk01);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
  letter-spacing: -0.03125rem;
`;

const Detail = styled.div`
  display: flex;
  height: 0.9375rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: var(--gray05);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 183.333% */
  letter-spacing: -0.03125rem;
  margin-top: 0.63rem;
`;

const MapDiv = styled.div`
  width: 19.575rem;
  height: 12.59244rem;
  flex-shrink: 0;
  background-color: var(--gray04);
  align-self: center;
  margin: 0.69rem 0;
`;

const Line = styled.div`
  width: 21.81256rem;
  border-top: dotted #c1d9cc;
  line-height: 0.1rem;
`;
