import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import ScrapBook from './components/ScrapBook';
import MainBottomSheet from './components/MainBottomSheet';

import AdminModal from './components/AdminModal';

import background from '../../assets/images/background.png';

const MainPage = () => {
  const [isModal, setIsModal] = useState(true);
  const [menuGreen, setMenuGreen] = useState(false);

  return (
    <Wrapper>
      <Background src={background} alt='배경 이미지' />
      <ContentWrapper>
        <TopBar
          isWhite={!menuGreen}
          isMenu={true}
          isMain={true}
          isGreen={menuGreen}
        />
        <ScrapBook />
        <MainBottomSheet setMenuGreen={setMenuGreen} />
      </ContentWrapper>
      <Footer />
      {isModal && <AdminModal setIsModal={setIsModal} />}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  z-index: -10;
  width: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100%;

  overflow: hidden;
  touch-action: none;
  z-index: 1;
`;
