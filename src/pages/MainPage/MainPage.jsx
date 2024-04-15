import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import background from './images/background.png';

const MainPage = () => {
  return (
    <>
      <TopBar isWhite={true} isMenu={true} isMain={true} />

      <Footer />
      <Background src={background} />
    </>
  );
};

export default MainPage;

const Background = styled.img`
  position: absolute;
  top: 0;
  z-index: 0;
`;
