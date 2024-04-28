import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import background from '../../assets/images/background.png';
import logo from './images/main-logo.svg';
import AboutBox from './components/AboutBox';

const AboutPage = () => {
  const textData = [
    {
      main: `이화인 한 명 한 명이 모여 \n 하나의 이화로`,
      sub: [
        '각자의 삶으로 숨가쁘게 살아가면서',
        '우리는 가끔 서로를 잊곤 합니다.',
        '이화여자대학교라는 공동체 안에서,',
        '15,000 이화인 중 한명으로 살아가면서',
        '우리 모두가 ‘이화인’임을 잊어버리게 될 때도 있습니다.',
        '이번 138주년 대동제에서는 부스 운영부터',
        '영화제, 아티스트 공연 등 모두가 하나되어 즐기고',
        '3일 동안 함께 교류하며 해방이라는',
        '이름 아래 ‘이화’임을 되새기는 시간을 갖고자 합니다.'
      ]
    },
    {
      main: `부담과 걱정을 잠시 내려놓은 \n 즐거운 축제로`,
      sub: [
        '대학생으로서 그리고 개개인의 삶을 짊어진 사람으로서',
        '우리는 여러 책임을 갖고 살아갑니다.',
        '어쩌면 그 무게가 너무 무겁기도,',
        '버겁기도 할 때가 있을 것입니다.',
        '이번 138주년 대동제는 그 무게를 잠시 내려놓고',
        '모두가 즐길 수 있는 축제로 만들고자 합니다.',
        '부스 운영부터 영화제, 아티스트 공연 등',
        '모두가 하나되어 즐길 수 있는 자리를 만들고자 합니다.'
      ]
    },
    {
      main: `기존에서 나아가 새로운 대동제로`,
      sub: [
        '기존의 정형화된 행사에서 벗어나',
        '더 많은 이화인과 함께하며 행사들을 되살리고',
        '이화인이 함께 새롭게 꾸려가는',
        '해방이화만의 문화를 만들고자 합니다.',
        '이에 이번 138주년 대동제에서는',
        '이화인이 함께 새로운 문화를 만들어가는',
        '여러 프로그램들이 운영되는 축제를 만들고자 합니다.'
      ]
    }
  ];

  return (
    <Wrapper>
      <Background src={background} alt='배경 이미지' />
      <TopBar isWhite={true} isMenu={true} isMain={true} />
      <Logo src={logo} alt='logo' />
      <Definition>
        <span>이화, 해방하다</span>
        <p>LIBER : 라틴어로 ‘자유롭다, 해방하다’</p>
      </Definition>
      <List>
        {textData.map((t, index) => (
          <AboutBox key={index} t={t} />
        ))}
      </List>
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
  overflow: hidden;

  color: var(--wh);
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: -10;
`;

const Logo = styled.img`
  margin: 2.75rem 5rem 2.87rem 4.94rem;
  width: 60%;
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
  margin: 2.31rem auto 15.56rem;
  padding: 0 5.7%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.87rem;
`;
