import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as CloseBtn } from '../assets/icons/close.svg';

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const navigate = useNavigate();

  //목록별 이동링크
  const menuItems = [
    { menu: '부스 목록 보러가기', link: '/boothlist' },
    { menu: '공연 목록 보러가기', link: '/perflist' },
    { menu: '축제 일정 보러가기', link: '/program' },
    { menu: '주요 시설 보러가기', link: '/' },
    { menu: '대동제 공지 보러가기', link: '/notice' },
    { menu: '배리어프리 확인하기', link: '/' },
    { menu: '마이페이지', link: '/my' }
  ];

  return (
    <>
      <Wrapper isSidebarOpen={isSidebarOpen}>
        <IconDiv onClick={closeSidebar}>
          <CloseBtn />
        </IconDiv>
        <SearchBar>
          <input placeholder='검색어를 입력해주세요'></input>
          <Search />
        </SearchBar>
        <List>
          {menuItems.map((item, index) => (
            <Goto key={index} onClick={() => navigate(item.link)}>
              {item.menu}
            </Goto>
          ))}
        </List>
      </Wrapper>
    </>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  background: var(--wh);
  padding: 0 21px;
  z-index: 500;

  /* left: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-100%')};
  transform: translate(
    ${({ isSidebarOpen }) => (isSidebarOpen ? '0, 0' : '-100%, 0')}
  );

  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); */

  ${props => styled`
    animation: 0.7s ${({ isSidebarOpen }) => (isSidebarOpen ? 'showUp' : 'showOut')} forwards;
  `}

  @keyframes showUp {
    0% {
      transform: translate(-100%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
      display: none;
    }
  }
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 58px;
  margin-bottom: 29px;
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
