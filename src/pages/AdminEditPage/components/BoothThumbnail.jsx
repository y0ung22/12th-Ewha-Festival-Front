import React, { useEffect, useState, useRef } from 'react';
import { S } from './AdminEdit.style';
import default_banner from '../../../assets/images/default-banner.png';
import default_card from '../../../assets/images/default-card.png';

const BoothThumbnail = ({ onImgUpload, type1, type2, type3, initialThum }) => {
  const [prevUrl, setPrevUrl] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!initialThum) {
      if (type1) {
        setPrevUrl(default_banner);
      } else if (type2) {
        setPrevUrl(default_card);
      }
    } else {
      setPrevUrl(initialThum);
    }
  }, [initialThum, type1, type2, type3]);

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
    <S.BTWrapper type={type1}>
      <S.Title>대표 사진</S.Title>
      <S.BImgContainer type={type2} prevUrl={prevUrl || default_banner}>
        <S.BImgEditBtn onClick={handleBtnClick} type={type3}>
          사진 교체하기
        </S.BImgEditBtn>
        <input
          type='file'
          onChange={handleImgChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </S.BImgContainer>
    </S.BTWrapper>
  );
};

export default BoothThumbnail;
