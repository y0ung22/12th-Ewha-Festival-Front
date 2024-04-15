import React from 'react';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import { CommonBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';

const NoticeWritePage = () => {
  return (
    <S.Wrapper>
      <TopBar />
      <S.MainText>공지 작성하기</S.MainText>
      <S.Container>
        <S.GreenLine />
        <S.TitleInput
          type='text'
          placeholder='제목을 작성하세요(최대 20자)'
          maxLength={20}
        />
        <S.GreenLine />
        <S.ContentInput
          placeholder='내용을 작성하세요(최대 310자)'
          maxLength={310}
        />
        <S.GreenLine />
        <S.BtnContainer>
          <CommonBtn>취소</CommonBtn>
          <CommonBtn color='green'>완료</CommonBtn>
        </S.BtnContainer>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default NoticeWritePage;
