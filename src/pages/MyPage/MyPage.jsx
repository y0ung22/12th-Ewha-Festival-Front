import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import UserInfo from './components/UserInfo';
import MyScrap from './components/MyScrap';
import CategorySlide from '../../_common/CategorySlide';

const MyPage = () => {
  const options = ['부스', '메뉴', '공연'];
  const [select, setSelect] = useState('부스');
  const handleOption = option => {
    setSelect(option);
  };

  return (
    <>
      <Wrapper>
        <TopBar isMenu={true} />
        <Container>
          <UserInfo />
          <CategorySlide {...{ options, handleOption, select }} />
          <MyScrap />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--wh);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1.13rem;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
