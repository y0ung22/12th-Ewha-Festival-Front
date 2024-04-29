import React from 'react';
import { S } from '../Notice.style';

const TitleInput = ({ newTitle = '', handleTitle }) => {
  return (
    <>
      <S.GreenLine />
      <S.TitleInput
        type='text'
        placeholder='제목을 작성하세요(최대 20자)'
        maxLength={20}
        value={newTitle}
        onChange={handleTitle}
      />
      <S.GreenLine />
    </>
  );
};

export default React.memo(TitleInput);
