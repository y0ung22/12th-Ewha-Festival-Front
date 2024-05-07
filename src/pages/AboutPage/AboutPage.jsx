import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import background from '../../assets/images/background.png';
import logo from './images/main-logo.png';
import AboutBox from './components/AboutBox';

import { aboutData } from './components/aboutData';

const AboutPage = () => {
  return (
    <Wrapper>
      <Background src={background} alt='배경 이미지' />
      <TopBar isWhite={true} isMenu={true} isMain={true} isAbout={true} />
      <Logo src={logo} alt='logo' />
      <Definition>
        <span>이화, 해방하다</span>
        <p>LIBER : 라틴어로 ‘자유롭다, 해방하다’</p>
      </Definition>
      <List>
        {aboutData.map((t, index) => (
          <AboutBox key={index} t={t} />
        ))}
      </List>
      <Footer />
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 103.4375rem;

  color: var(--wh);
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

const Logo = styled.img`
  margin: 2.75rem 5rem 2.87rem 4.94rem;
  width: 14.4375rem;
  height: 10.875rem;
  flex-shrink: 0;

  @media (max-width: 576px) {
    width: 60%;
    height: auto;
  }
`;

const Definition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

const List = styled.div`
  margin: 2.31rem auto 13.56rem;
  padding: 0 5.7%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.87rem;
`;
