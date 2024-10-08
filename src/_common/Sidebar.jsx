import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as CloseBtn } from '../assets/icons/close.svg';

import { getCookie } from '../api/http';

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const token = getCookie('token');
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const closeSidebar = () => {
    setClicked(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setClicked(false);
    }, 400);
  };
  const navigate = useNavigate();

  // 배경 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      width: 100%;
      display: flex;
      justify-content: center;
    `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      // window.scrollTo(0, parseInt(scrollY || '0'));
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  //목록별 이동링크
  const menuItems = [
    { menu: '부스 목록 보러가기', link: '/boothlist' },
    { menu: '공연 목록 보러가기', link: '/perflist' },
    { menu: '축제 일정 보러가기', link: '/program' },
    { menu: '주요 시설 보러가기', link: '/facility' },
    { menu: '대동제 공지 보러가기', link: '/notice' },
    { menu: '배리어프리 확인하기', link: '/barrierfree' },
    { menu: '마이페이지', link: token ? '/my' : '/login' }
  ];

  const handleSearch = () => {
    navigate('/search');
  };

  const handleMenuItemClick = link => {
    if (location.pathname === link) {
      closeSidebar();
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <Wrapper>
        <Container clicked={clicked}>
          <IconDiv onClick={closeSidebar}>
            <CloseBtn />
          </IconDiv>
          <SearchBar onClick={handleSearch}>
            <input placeholder='검색어를 입력해주세요'></input>
            <SearchIconDiv>
              <SearchIcon />
            </SearchIconDiv>
          </SearchBar>
          <List>
            {menuItems.map((item, index) => (
              <Goto key={index} onClick={() => handleMenuItemClick(item.link)}>
                {item.menu}
              </Goto>
            ))}
          </List>
        </Container>
      </Wrapper>
    </>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  @media (min-width: 576px) {
    width: 24.375rem;
  }

  position: fixed;
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
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  position: relative;

  animation: ${({ clicked }) =>
    clicked ? ' RightToLeft 0.5s' : 'LeftToRight 0.5s'};

  @keyframes LeftToRight {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes RightToLeft {
    0% {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }
`;

const IconDiv = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  margin-top: 3.625rem;
  margin-bottom: 1.813rem;
  cursor: pointer;
`;
const SearchBar = styled.div`
  width: 100%;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  padding-bottom: 0.563rem;
  margin-top: 0.5rem;
  border-bottom: solid 0.063rem var(--bk01);

  input {
    width: 100%;
  }
  input::placeholder {
    color: var(--gray04);
    font-size: 0.938rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem; /* 133.333% */
    letter-spacing: -0.031rem;
  }
`;
const SearchIconDiv = styled.div`
  cursor: pointer;
`;

const List = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.313rem;
  margin-top: 1.438rem;
`;

const Goto = styled.div`
  color: var(--bk01);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.031rem;
  cursor: pointer;
`;
