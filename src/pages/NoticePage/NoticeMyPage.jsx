import React from 'react';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import ListBox from './components/ListBox';
import Footer from '../../_common/Footer';

const NoticeMyPage = () => {
  return (
    <S.ListWrapper>
      <TopBar />
      <S.MainText>내가 올린 글</S.MainText>
      <S.List>
        <ListBox />
        <ListBox />
      </S.List>
      {/* <Footer /> */}
    </S.ListWrapper>
  );
};

export default NoticeMyPage;
