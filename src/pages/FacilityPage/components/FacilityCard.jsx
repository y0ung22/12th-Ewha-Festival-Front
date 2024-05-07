import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorThin } from '../../../assets/icons/vector_thin.svg';

const FacilityCard = ({ key, location, detail, img, isLastElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper
        isOpen={isOpen}
        style={{ marginBottom: isLastElement ? '5.19rem' : '0.94rem' }}
      >
        <Container>
          <Contents>
            <Place>{location}</Place>
            <Detail>{detail}</Detail>
          </Contents>
          <VectorDiv isOpen={isOpen} onClick={clickCard}>
            <VectorThin width={'22px'} />
          </VectorDiv>
        </Container>
        {isOpen && (
          <>
            <Line />
            <MapDiv>
              <img src={img} />
            </MapDiv>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default FacilityCard;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray04);
  background: var(--wh);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Contents = styled.div`
  width: 100%;
  padding: 1.25rem;
  gap: 0.63rem;
`;

const VectorDiv = styled.div`
  height: 22px;
  padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 1.28rem; */
  transform: ${props => (props.isOpen ? 'rotate(270deg)' : 'rotate(90deg)')};
  cursor: pointer;
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
  margin-bottom: 0.63rem;
`;

const Detail = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  white-space: pre-wrap;

  color: var(--gray05);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 183.333% */
  letter-spacing: -0.03125rem;
`;

const MapDiv = styled.div`
  flex-shrink: 0;
  align-self: center;
  padding: 0.63rem 1rem;
  img {
    width: 100%;
  }

  @media (max-width: 380px) {
    width: 95%;
    height: auto;

    img {
      width: 100%;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  border-top: dotted #c1d9cc;
  line-height: 0.1rem;
`;
