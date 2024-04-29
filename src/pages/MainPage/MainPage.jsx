import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import ScrapBook from './components/ScrapBook';
import MainBottomSheet from './components/MainBottomSheet';

import background from '../../assets/images/background.png';

const MainPage = () => {
  return (
    <>
      <Wrapper>
        <TopBar isWhite={true} isMenu={true} isMain={true} />
        <ScrapBook />
        <MainBottomSheet />
        <Background src={background} alt='배경 이미지' />
      </Wrapper>
      <Footer />
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding-bottom: 158.08px;

  gap: 2rem;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  z-index: -10;

  width: 100%;
`;
