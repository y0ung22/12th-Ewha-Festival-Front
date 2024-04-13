import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Search } from '../assets/icons/search.svg';

const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <SearchBar>
          <input placeholder='검색어를 입력해주세요'></input>
          <Search />
        </SearchBar>
        <List>
          <Goto>부스 목록 보러가기</Goto>
          <Goto>공연 목록 보러가기</Goto>
          <Goto>쓰레기통 위치 찾기</Goto>
          <Goto>TF팀 공지 보러가기</Goto>
          <Goto>마이페이지</Goto>
        </List>
      </Wrapper>
    </>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  background: linear-gradient(180deg, #fff 26.21%, #00ff75 120.91%);
  padding: 0 21px;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  padding-bottom: 9px;
  margin-top: 8px;
  border-bottom: solid 1px var(--bk01);

  input::placeholder {
    color: var(--gray04);
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.5px;
  }
`;

const List = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  margin-top: 23px;
`;

const Goto = styled.div`
  color: var(--bk01);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 100% */
  letter-spacing: -0.5px;
`;
