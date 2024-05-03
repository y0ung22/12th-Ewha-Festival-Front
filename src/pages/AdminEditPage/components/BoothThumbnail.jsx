import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { S } from './AdminEdit.style';

const BoothThumbnail = ({ onImgUpload, type1, type2 }) => {
  const [prevUrl, setPrevUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleImgChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPrevUrl(reader.result);
      onImgUpload(file);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBtnClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Wrapper>
      <S.Title text={'대표 사진'} />
      <S.BImgContainer type={type1}>
        {prevUrl && <img src={prevUrl} alt='Thumbnail Preview' />}
        <S.BImgEditBtn onClick={handleBtnClick} type={type2}>
          사진 교체하기
        </S.BImgEditBtn>
        <input
          type='file'
          onChange={handleImgChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </S.BImgContainer>
    </Wrapper>
  );
};

export default BoothThumbnail;

const Wrapper = styled.div`
  margin-top: 16px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
