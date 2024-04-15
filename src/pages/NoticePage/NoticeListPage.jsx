import React from 'react';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import ListBox from './components/ListBox';
import Footer from '../../_common/Footer';

const NoticeListPage = () => {
  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지사항</S.MainText>
        <S.List>
          <ListBox />
          <ListBox />
        </S.List>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default NoticeListPage;
