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
      <TopBar isMenu={true} />
      <Wrapper>
        <UserInfo />
        <CategorySlide {...{ options, handleOption, select }} />
        <MyScrap />
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
