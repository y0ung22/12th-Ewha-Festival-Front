import React, { useState } from 'react';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import ListBox from './components/ListBox';
import Footer from '../../_common/Footer';
import Pagination from '../../_common/Pagination';

const NoticeListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);

  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지사항</S.MainText>
        <S.List>
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
        </S.List>
        <Pagination
          total={totalPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default NoticeListPage;
