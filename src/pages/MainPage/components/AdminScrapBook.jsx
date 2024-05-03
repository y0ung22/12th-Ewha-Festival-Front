import { useState, useEffect } from 'react';
import styled from 'styled-components';

import ScrapCard from '../../../_common/ScrapCard';
import MainBox from './MainBox';

//img
import pin from '../images/black-pin.png';
import setting from '../images/black-setting.png';
import gift from '../images/black-gift.png';
import key from '../images/black-key.png';

const BoxList = {
  booth: [
    {
      id: 1,
      title: '내 부스\n바로가기',
      guide: '내 부스를 바로\n확인할 수 있어요',
      image: pin,
      path: '/'
    },
    {
      id: 2,
      title: '내 부스\n정보 수정하기',
      guide: '올해 꼭 가야하는\n부스를 찾아봐요',
      image: setting,
      path: '/'
    },
    {
      id: 3,
      title: '내 메뉴\n관리하기',
      guide: '메뉴와 관련된 정보를\n관리할 수 있어요',
      image: gift,
      path: '/'
    },
    {
      id: 4,
      title: '계정\n로그아웃하기',
      guide: '다른 계정으로\n로그인할 수 있어요',
      image: key,
      path: '/'
    }
  ],
  performance: [
    {
      id: 5,
      title: '내 공연\n바로가기',
      guide: '내 공연을 바로\n확인할 수 있어요',
      image: pin,
      path: '/'
    },
    {
      id: 6,
      title: '내 공연\n정보 수정하기',
      guide: '공연과 관련된 정보를\n바로 수정해요',
      image: setting,
      path: '/'
    },
    {
      id: 7,
      title: '계정\n로그아웃하기',
      guide: '다른 계정으로\n로그인할 수 있어요',
      image: key,
      path: '/'
    }
  ],
  TF: [
    {
      id: 8,
      title: '공지사항\n바로가기',
      guide: '그동안 올라온\n공지사항을 확인해요',
      image: pin,
      path: '/'
    },
    {
      id: 9,
      title: '축운위 부스\n관리하기',
      guide: '상설 부스 페이지를\n관리해요',
      image: key,
      path: '/'
    },
    {
      id: 8,
      title: '새로운 공지\n작성하기',
      guide: '새로운 글을\n작성할 수 있어요',
      image: gift,
      path: '/'
    },
    {
      id: 7,
      title: '계정\n로그아웃하기',
      guide: '다른 계정으로\n로그인할 수 있어요',
      image: key,
      path: '/'
    }
  ]
};

const AdminScrapBook = ({ category }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isScrap, setIsScrap] = useState(true);
  let titleText = '';

  switch (category) {
    case 'booth':
      titleText = '이화연님의\n관리 부스';
      break;
    case 'performance':
      titleText = '이화연님의\n관리 공연';
      break;
    case 'TF':
      titleText = '이화연님의\n공지사항';
      break;
    default:
      titleText = '2024 \n 이화여대 대동제';
  }

  return (
    <Wrapper>
      <Title isScrap={isScrap}>
        {isScrap ? titleText : '2024 \n 이화여대 대동제'}
      </Title>
      <ScrapBox>
        {isLogin ? (
          <></>
        ) : (
          <ScrapTitle isLogin={isLogin} onClick={() => setIsLogin(!isLogin)}>
            {'로그인 하러가기'}
          </ScrapTitle>
        )}
        <BlurBox>
          {isScrap ? (
            <ScrapDiv>
              {BoxList[category].map(item => (
                <MainBox key={item.id} item={item} isAdmin={true}></MainBox>
              ))}
            </ScrapDiv>
          ) : (
            <>
              <Guide>
                {isLogin
                  ? '이화연 관리자님\n2024 대동제를\n잘 운영해주세요🍀'
                  : '로그인하면\n사이트를 더 편하게\n즐길 수 있어요🍀'}
              </Guide>
              <TagBox>
                <Tag>#2024_대동제</Tag>
                <Tag>우리과_부스는_어디</Tag>
                <Tag>#모든_정보가_내손안에</Tag>
              </TagBox>
            </>
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

const WholeScrap = styled.div`
  color: var(--gray02);
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 200% */
  letter-spacing: -0.03125rem;
  text-decoration-line: underline;

  margin-bottom: 0.38rem;
  cursor: pointer;
`;

const Title = styled.div`
  white-space: pre-line;
  color: var(--wh);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.625rem;
  letter-spacing: -0.03125rem;

  margin-bottom: ${({ isScrap }) => (isScrap ? '2.19rem' : '1rem')};
`;

const ScrapBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const ScrapTitle = styled.div`
  position: relative;
  z-index: 5;
  margin-bottom: -18px;

  display: inline-flex;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;

  color: var(--wh);
  font-size: 0.8125rem;

  border-radius: 1.875rem;
  background: ${({ isLogin }) =>
    isLogin ? 'var(--green01)' : 'var(--purple)'};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const BlurBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
