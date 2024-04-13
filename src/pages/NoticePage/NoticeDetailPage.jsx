import React from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import { GrayBtn, GreenBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';

const NoticeDetailPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainText>공지사항</MainText>
      <Container>
        <GreenLine />
        <Title>[공지] 공지사항입니다.</Title>
        <GreenLine />
        <Content>
          국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로
        </Content>
        <Writer>
          <span>TF 팀</span>
          <span>2024-02-15</span>
        </Writer>
        <GreenLine />
        <BtnContainer>
          <GrayBtn>삭제</GrayBtn>
          <GreenBtn>수정</GreenBtn>
        </BtnContainer>
      </Container>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default NoticeDetailPage;

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

const Title = styled.div`
  margin: 21px auto 22px 10px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.5px;
`;

const Content = styled.div`
  margin: 25px 10px 0;
  min-height: 220px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.5px;
`;

const Writer = styled.div`
  margin: 0 9px 15px auto;
  display: flex;
  flex-direction: column;
  align-items: end;

  span:nth-child(1) {
    color: var(--green_01);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.5px;
  }

  span:nth-child(2) {
    color: var(--gray05);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.5px;
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
