import styled from 'styled-components';

import MainTopBar from '../../_common/MainTopBar';
import Footer from '../../_common/Footer';
import AdminScrapBook from './components/AdminScrapBook';

import background from '../../assets/images/background.png';

const TFMainPage = () => {
  return (
    <>
      <Wrapper>
        <MainTopBar isMain={true} />
        <AdminScrapBook category={'TF'} />
        <Background src={background} alt='배경 이미지' />
      </Wrapper>
      <Footer />
    </>
  );
};

export default TFMainPage;

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
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  z-index: -10;

  width: 100%;
`;
