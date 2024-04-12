import React from 'react';
import styled from 'styled-components';
import { S } from './Makers.style';

const MakersBox = ({ data }) => {
  return (
    <>
      {data.map(maker => (
        <S.Box key={maker.id}>
          <S.Info>{maker.info}</S.Info>
          <S.Name>{maker.name}</S.Name>
          <PartContainer />
          <S.Part>{maker.part}</S.Part>
          <S.Work>{maker.work}</S.Work>
        </S.Box>
      ))}
    </>
  );
};

export default MakersBox;

const PartContainer = styled.div`
  display: inline-flex;
  padding: 0px 6px;
  align-items: center;
  gap: 2px;

  border-radius: 10px;
  background: var(--bk02, rgba(53, 60, 56, 0.8));
`;
