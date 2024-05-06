import React from 'react';
import { S } from '../Notice.style';

const ContentInput = ({ newContent = '', handleContent }) => {
  return (
    <>
      <S.ContentInput
        type='text'
        placeholder='내용을 작성하세요(최대 310자)'
        maxLength={311}
        value={newContent}
        onChange={handleContent}
      />
      <S.GreenLine />
    </>
  );
};

export default React.memo(ContentInput);
