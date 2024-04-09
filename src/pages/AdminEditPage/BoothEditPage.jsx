import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { B } from './components/Booth.style';

import BoothThumbnail from './components/BoothThumbnail';

// GlobalStyle Background 말고 흰 배경 적용
const Wrapper = styled.div`
  height: 100%;
  background-color: white;
`;

const BoothEditPage = () => {
  const formRef = useRef();
  const [thumbnail, setThumbnail] = useState(null);

  const handleImgUpload = file => {
    setThumbnail(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }
    // 예: axios.patch('/api/booth', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  };

  return (
    <Wrapper>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='wrapper'>
          <B.Title>대표 사진</B.Title>
          <BoothThumbnail onImgUpload={handleImgUpload} />
          <B.InputContainer>
            <B.Title>부스 이름</B.Title>
            <input id='name' type='text' />
          </B.InputContainer>
          <B.InputContainer>
            <B.Title>실시간 공지사항</B.Title>
            <input id='location' type='text' />
          </B.InputContainer>
          <B.Title>부스 운영시간</B.Title>
          <B.InputContainer>
            <B.Title>부스 소개글</B.Title>
            <input id='category' type='text' />
          </B.InputContainer>
          <B.InputContainer>
            <B.Title>부스 운영진 연락처</B.Title>
            <input id='description' type='text' />
          </B.InputContainer>
          <B.Title>운영여부</B.Title>
          <B.SubmitBtn type='submit'>작성 완료</B.SubmitBtn>
        </div>
      </form>
    </Wrapper>
  );
};

export default BoothEditPage;
