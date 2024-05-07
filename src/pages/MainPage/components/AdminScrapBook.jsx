import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import ScrapCard from '../../../_common/ScrapCard';
import MainBox from './MainBox';

//img
import pin from '../images/black-pin.png';
import setting from '../images/black-setting.png';
import gift from '../images/black-gift.png';
import key from '../images/black-key.png';
import flag from '../images/black-flag.png';

import { GetBoothHome } from '../../../api/booth';

const getBoxList = myID => ({
  booth: [
    {
      id: 1,
      title: '내 부스\n바로가기',
      guide: '내 부스를 바로\n확인할 수 있어요',
      image: pin,
      path: `/detail/${myID}`
    },
    {
      id: 2,
      title: '내 부스\n정보 수정하기',
      guide: '올해 꼭 가야하는\n부스를 찾아봐요',
      image: setting,
      path: `/boothedit/${myID}`
    },
    {
      id: 3,
      title: '내 메뉴\n관리하기',
      guide: '메뉴와 관련된 정보를\n관리할 수 있어요',
      image: gift,
      path: `/menuedit/${myID}`
    },
    {
      id: 4,
      title: '계정\n로그아웃하기',
      guide: '다른 계정으로\n로그인할 수 있어요',
      image: key,
      path: 'setLogout'
    }
  ],
  performance: [
    {
      id: 5,
      title: '내 공연\n바로가기',
      guide: '내 공연을 바로\n확인할 수 있어요',
      image: pin,
      path: `/detail/${myID}`
    },
    {
      id: 6,
      title: '내 공연\n정보 수정하기',
      guide: '공연과 관련된 정보를\n바로 수정해요',
      image: setting,
      path: `/perfedit/${myID}`
    },
    {
      id: 7,
      title: '계정\n로그아웃하기',
      guide: '다른 계정으로\n로그인할 수 있어요',
      image: key,
      path: 'setLogout'
    }
  ],
  TF: [
    {
      id: 8,
      title: '공지사항\n바로가기',
      guide: '그동안 올라온\n공지사항을 확인해요',
      image: pin,
      path: '/notice'
    },
    {
      id: 9,
      title: '축준위 부스\n관리하기',
      guide: '상설 부스 페이지를\n관리해요',
      image: flag,
      path: '/tfedit'
    },
    {
      id: 8,
      title: '새로운 공지\n작성하기',
      guide: '새로운 글을\n작성할 수 있어요',
      image: gift,
      path: '/notice/write'
    },
    {
      id: 7,
      title: '계정\n로그아웃하기',
      guide: '다른 계정으로\n로그인할 수 있어요',
      image: key,
      path: 'setLogout'
    }
  ]
});

const AdminScrapBook = ({ category }) => {
  const [isScrap, setIsScrap] = useState(() => {
    const savedIsScrap = sessionStorage.getItem('isScrap');
    return savedIsScrap ? JSON.parse(savedIsScrap) : false;
  });
  const [isOnOff, setIsOnOff] = useState(false);

  const [boxList, setBoxList] = useState([]);
  const [nickname, setNickName] = useState('');
  let titleText = '';

  switch (category) {
    case 'booth':
      titleText = `${nickname}님의\n관리 부스`;
      break;
    case 'performance':
      titleText = `${nickname}님의\n관리 공연`;
      break;
    case 'TF':
      titleText = `${nickname}님의\n공지사항`;
      break;
    default:
      titleText = '2024 \n 이화여대 대동제';
  }

  useEffect(() => {
    const handleStart = async () => {
      const homeResult = await GetBoothHome();
      const list = getBoxList(homeResult.data.my_booth);
      setBoxList(list);
      setNickName(homeResult.data.nickname);
    };

    handleStart();

    if (!JSON.parse(sessionStorage.getItem('isScrap'))) {
      const timer = setTimeout(() => {
        setIsScrap(true);
        sessionStorage.setItem('isScrap', true);
        setIsOnOff(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Wrapper>
      <AnimatedTitle isScrap={isScrap} isOnOff={isOnOff}>
        {isScrap ? titleText : '2024 \n 이화여대 대동제'}
      </AnimatedTitle>
      <ScrapBox>
        <BlurBox>
          {isScrap ? (
            <AnimatedScrapDiv isScrap={isScrap} isOnOff={isOnOff}>
              {boxList[category]?.map(item => (
                <MainBox key={item.id} item={item} isAdmin={true}></MainBox>
              ))}
            </AnimatedScrapDiv>
          ) : (
            <AnimatedBox isScrap={isScrap} isOnOff={isOnOff}>
              <Guide>
                {`${nickname} 관리자님\n2024 대동제를\n잘 운영해주세요🍀`}
              </Guide>
              <TagBox>
                <Tag>#2024_대동제</Tag>
                <Tag>우리과_부스는_어디</Tag>
                <Tag>#모든_정보가_내손안에</Tag>
              </TagBox>
            </AnimatedBox>
          )}
        </BlurBox>
      </ScrapBox>
    </Wrapper>
  );
};

export default AdminScrapBook;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Title = styled.div`
  white-space: pre-line;
  color: var(--wh);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.625rem;
  letter-spacing: -0.03125rem;

  margin-bottom: 2.19rem;
`;

const ScrapBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const BlurBox = styled.div`
  height: 100%;

  min-width: 20.625rem;
  min-height: 26.8125rem;
  flex-shrink: 0;
  padding: 1.6875rem 0.9375rem;

  border-radius: 5%;
  background: linear-gradient(
    158deg,
    rgba(67, 255, 153, 0.4) 3.91%,
    rgba(247, 247, 247, 0.4) 102.63%
  );
  box-shadow:
    0px 0px 4px 0px rgba(0, 0, 0, 0.1),
    0px 0px 4px 0px #fff inset;
  backdrop-filter: blur(10px);
`;

const Guide = styled.div`
  white-space: pre-line;
  color: var(--wh01, var(--wh, #fff));
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 33px; /* 137.5% */
  letter-spacing: -0.5px;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.625rem;
`;

const Tag = styled.div`
  display: inline-flex;
  padding: 0.4375rem 1rem;
  justify-content: center;
  align-items: center;

  border-radius: 1.875rem;
  border: 1px solid var(--green02);
  background: var(--green05);

  color: var(--wh);
  font-size: 0.8125rem;
  font-weight: 700;
`;

const ScrapDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  gap: 0.6875rem 0.4375rem;
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const AnimatedTitle = styled(Title)`
  animation: ${({ isScrap, isOnOff }) =>
      isOnOff ? (isScrap ? fadeAnimation : fadeOutAnimation) : 'none'}
    800ms ease;
  animation-delay: ${({ isOnOff }) => (isOnOff ? '0s' : '2s')};
  animation-fill-mode: forwards;
`;

const AnimatedScrapDiv = styled(ScrapDiv)`
  animation: ${({ isScrap, isOnOff }) =>
      isOnOff ? (isScrap ? fadeAnimation : fadeOutAnimation) : 'none'}
    ${({ isScrap, isOnOff }) => (isOnOff ? '400ms' : '0ms')} ease;
  animation-delay: ${({ isOnOff }) => (isOnOff ? '0s' : '2s')};
  animation-fill-mode: forwards;
`;

const AnimatedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  gap: 10rem;

  animation: ${({ isScrap, isOnOff }) =>
      isOnOff ? (isScrap ? fadeAnimation : fadeOutAnimation) : 'none'}
    400ms ease;
  animation-fill-mode: forwards;
  animation-delay: ${({ isOnOff }) => (isOnOff ? '0s' : '2s')};
`;
