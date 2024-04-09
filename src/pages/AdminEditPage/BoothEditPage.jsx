import React from 'react';
import styled from 'styled-components';
import { B } from './components/Booth.style';

const Wrapper = styled.div`
  height: 100%;
  background-color: white;
`;

const BoothEditPage = () => {
  return (
    <Wrapper>
      <div className='wrapper'>
        <B.Title>대표 사진</B.Title>
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
      </div>
    </Wrapper>
  );
};

export default BoothEditPage;
