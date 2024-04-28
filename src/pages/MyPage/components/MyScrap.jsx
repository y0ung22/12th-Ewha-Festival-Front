import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as AddIcon } from '../images/save_add.svg';
import Pagination from '../../../_common/Pagination';
import ScrapCard from '../../../_common/ScrapCard';

const MyScrap = () => {
  const isScrapped = false; // 스크랩 개수 0 or not으로 변경

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(3); // 전체 페이지

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {isScrapped ? (
        <>
          <ScrapDiv>
            {array.map((item, index) => (
              <ScrapCard key={index} />
            ))}
          </ScrapDiv>

          <Pagination
            total={totalPage}
            page={currentPage}
            setPage={setCurrentPage}
          />
        </>
      ) : (
        <>
          <NoneWrapper>
            <AddIcon />
            <NoneDiv>스크랩한 내용이 아직 없어요 🥹</NoneDiv>
          </NoneWrapper>
        </>
      )}
    </>
  );
};

export default MyScrap;

const ScrapDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.875rem 0.625rem;
`;

const NoneWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13.06rem;
`;

const NoneDiv = styled.div`
  color: var(--green02);
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.9375rem; /* 100% */
  letter-spacing: -0.03125rem;
  margin-top: 1rem;
`;
