import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { B } from './Booth.style';

const BoothThumbnail = ({ onImgUpload }) => {
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
      <B.Title>대표 사진</B.Title>
      <B.ImgContainer>
        {prevUrl && <img src={prevUrl} alt='Thumbnail Preview' />}
        <B.ImgEditBtn onClick={handleBtnClick}>사진 교체하기</B.ImgEditBtn>
        <input
          type='file'
          onChange={handleImgChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </B.ImgContainer>
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
