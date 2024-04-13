import React from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import { GrayBtn, GreenBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';

const NoticeWritePage = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainText>공지 작성하기</MainText>
      <Container>
        <GreenLine />
        <Title
          type='text'
          placeholder='제목을 작성하세요(최대 20자)'
          maxLength={20}
        />
        <GreenLine />
        <Content placeholder='내용을 작성하세요(최대 310자)' maxLength={310} />
        <GreenLine />
        <BtnContainer>
          <GrayBtn>취소</GrayBtn>
          <GreenBtn>완료</GreenBtn>
        </BtnContainer>
      </Container>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default NoticeWritePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--wh);
`;

const MainText = styled.div`
  margin-top: 37px;
  margin-bottom: 31px;

  color: var(--bk01);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.5px;
`;

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.input`
  margin: 21px 10px 22px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.5px;

  &::placeholder {
    color: var(--gray01);
  }
`;

const Content = styled.textarea`
  margin: 25px 10px 34px;
  min-height: 242px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.5px;

  &::placeholder {
    color: var(--gray01);
  }
`;

const GreenLine = styled.div`
  width: 100%;
  height: 1px;
  background: var(--green_01);
`;

const BtnContainer = styled.div`
  margin: 30px 0 58px auto;
  display: flex;
  gap: 10px;
`;
