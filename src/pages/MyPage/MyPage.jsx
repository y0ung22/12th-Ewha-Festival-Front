import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import Pagination from '../../_common/Pagination';
import ScrapCard from '../../_common/ScrapCard';

import { ReactComponent as AddIcon } from './images/save_add.svg';

const MyPage = () => {
  const isScrapped = false; // 스크랩 개수 0 or not으로 변경
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(3); // 전체 페이지

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <TopBar isMenu={true} />
      <Wrapper>
        <User>
          <Name>이화연 님</Name>
          <LogoutBtn>로그아웃</LogoutBtn>
        </User>
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
      </Wrapper>
      <Footer />
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: var(--wh);

  padding: 0 1.25rem 0 1.31rem;
`;

const User = styled.div`
  display: flex;
  width: 20.625rem;
  height: 5.4375rem;
  padding: 1.6875rem 1.31rem 1.6875rem 1.75rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray03);
  background: linear-gradient(158deg, #43ff9966, #f7f7f7);
  margin: 5.81rem 0 2.5rem 0;
`;

const Name = styled.div`
  color: #006c31;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.0625rem; /* 183.333% */
  letter-spacing: -0.03125rem;
`;

const LogoutBtn = styled.div`
  color: var(--gray05);
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 200% */
  letter-spacing: -0.03125rem;
  text-decoration-line: underline;
`;

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
