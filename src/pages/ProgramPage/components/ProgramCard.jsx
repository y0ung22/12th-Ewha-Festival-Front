import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorThin } from '../../../assets/icons/vector_thin.svg';

const ProgramCard = ({ title, detail, img }) => {
  const clickCard = () => {
    //navigate();
  };

  return (
    <>
      <Wrapper>
        <ImgDiv img={img} />
        <Container>
          <Contents>
            <Place>{title}</Place>
            <Detail>{detail}</Detail>
          </Contents>
          <VectorDiv onClick={clickCard}>
            <VectorThin />
          </VectorDiv>
        </Container>
      </Wrapper>
    </>
  );
};

export default ProgramCard;

const Wrapper = styled.div`
  width: 21.8125rem;
  height: 17.75rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray04);
  background: var(--wh);
  margin-bottom: 1.12rem;
`;

const ImgDiv = styled.div`
  width: auto;
  height: 12.75rem;
  border-radius: 0.9375rem 0.9375rem 0 0;
  border-bottom: 1px solid var(--gray04);
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
