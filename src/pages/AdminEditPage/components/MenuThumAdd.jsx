import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { S } from './AdminEdit.style';

const MenuThumAdd = ({ onImgUpload }) => {
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
      <S.MImgContainer>
        {prevUrl && <img src={prevUrl} alt='Thumbnail Preview' />}
        <S.MImgAddBtn onClick={handleBtnClick}>사진 추가하기</S.MImgAddBtn>
        <input
          type='file'
          onChange={handleImgChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </S.MImgContainer>
    </Wrapper>
  );
};

export default MenuThumAdd;

const Wrapper = styled.div`
  margin-top: 16px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
