// 메뉴 상세 수정 대표 사진 컴포넌트

import React, { useEffect, useState, useRef } from 'react';
import { S } from './AdminEdit.style';
import default_card from '../../../assets/images/default-card.png';

const MenuThumEdit = ({ onImgUpload, initialThum }) => {
  const [prevUrl, setPrevUrl] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!initialThum) {
      setPrevUrl(default_card);
    } else {
      setPrevUrl(initialThum);
    }
  }, [initialThum]);

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
    <S.Wrapper2>
      <S.Title>대표 사진</S.Title>
      <S.MImgContainer prevUrl={prevUrl}>
        <S.MImgAddBtn onClick={handleBtnClick}>사진 교체하기</S.MImgAddBtn>
        <input
          type='file'
          onChange={handleImgChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </S.MImgContainer>
    </S.Wrapper2>
  );
};

export default MenuThumEdit;
