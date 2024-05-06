import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import ScrapBook from './components/ScrapBook';
import MainBottomSheet from './components/MainBottomSheet';

import background from '../../assets/images/background.png';

const MainPage = () => {
  return (
    <Wrapper>
      <Background src={background} alt='배경 이미지' />
      <ContentWrapper>
        <TopBar isWhite={true} isMenu={true} isMain={true} />
        <ScrapBook />
        <MainBottomSheet />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  gap: 2rem;
  overflow: hidden;
  z-index: 1;
`;
