import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import UserInfo from './components/UserInfo';
import MyScrap from './components/MyScrap';
import CategorySlide from '../../_common/CategorySlide';

const MyPage = () => {
  sessionStorage.setItem('from', window.location.pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <TopBar isMenu={true} />
      <Container>
        <UserInfo />
        <MyScrap />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: var(--wh);
`;

const Container = styled.div`
  width: 100%;
  top: 1.13rem;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;
