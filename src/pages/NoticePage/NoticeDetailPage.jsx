import React from 'react';
import styled from 'styled-components';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import { CommonBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';

const NoticeDetailPage = () => {
  return (
    <S.Wrapper>
      <TopBar />
      <S.MainText>공지사항</S.MainText>
      <S.Container>
        <S.GreenLine />
        <S.Title>[공지] 공지사항입니다.</S.Title>
        <S.GreenLine />
        <S.Content>
          국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로
        </S.Content>
        <Writer>
          <span>TF 팀</span>
          <span>2024-02-15</span>
        </Writer>
        <S.GreenLine />
        <S.BtnContainer>
          <CommonBtn>삭제</CommonBtn>
          <CommonBtn color='green'>수정</CommonBtn>
        </S.BtnContainer>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default NoticeDetailPage;

const Writer = styled.div`
  margin: 0 9px 15px auto;
  display: flex;
  flex-direction: column;
  align-items: end;

  span:nth-child(1) {
    color: var(--green01);
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
