import React, { useState } from 'react';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import ListBox from './components/ListBox';
import Footer from '../../_common/Footer';
import Pagination from '../../_common/Pagination';

const NoticeListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    page: 1,
    total: 7,
    total_page: 2,
    view: 5,
    data: [
      {
        id: 15,
        user: 'admin',
        title: '1012345',
        content: '1012345',
        created_at: '24-04-08 00:24',
        updated_at: '24-04-08 00:24'
      }
    ]
  });

  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지사항</S.MainText>
        <S.List>
          {data.data.map((d, index) => (
            <ListBox key={index} d={d} />
          ))}
        </S.List>
        <Pagination
          total={data.total_page}
          page={currentPage}
          setPage={setCurrentPage}
        />
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default NoticeListPage;
