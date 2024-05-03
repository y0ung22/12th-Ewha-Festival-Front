import React, { useState, useEffect } from 'react';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import ListBox from './components/ListBox';
import Footer from '../../_common/Footer';
import Pagination from '../../_common/Pagination';

import { GetNoticeList } from '../../api/tf';

const NoticeListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    GetNoticeList(currentPage)
      .then(res => setData(res))
      .catch();
  }, [currentPage]);

  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지사항</S.MainText>
        {data && (
          <>
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
          </>
        )}
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default NoticeListPage;
