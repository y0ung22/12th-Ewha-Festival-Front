import React from 'react';
import { S } from './Makers.style';

const MakersBox = ({ data }) => {
  return (
    <>
      {data.map(maker => (
        <S.Box key={maker.id}>
          <S.Img img={maker.img}>
            <S.Info>{maker.info}</S.Info>
            <S.Name>{maker.name}</S.Name>
            <S.PartContainer>
              <S.Part>{maker.part}</S.Part>
            </S.PartContainer>
            <S.Work>{maker.work}</S.Work>
          </S.Img>
        </S.Box>
      ))}
    </>
  );
};

export default MakersBox;
