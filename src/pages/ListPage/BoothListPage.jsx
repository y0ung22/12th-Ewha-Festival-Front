import { useState, useEffect } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import Pagination from '../../_common/Pagination';

const BoothListPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(5); // 전체 페이지

  return (
    <>
      <Wrapper>
        <TopBar isMenu={true} />
        <Pagination
          total={totalPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </Wrapper>
      <Footer />
    </>
  );
};

export default BoothListPage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding-bottom: 158.08px;

  background-color: #fff;

  gap: 2rem;
`;
