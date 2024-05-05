import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CategorySlide from '../../../_common/CategorySlide';
import ScrapCard from '../../../_common/ScrapCard';

import { getCookie } from '../../../api/http';
import { GetBoothHome } from '../../../api/booth';

const ScrapBook = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [isScrap, setIsScrap] = useState(false);
  const [boothList, setBoothList] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setIsLogin(true);
      const handleStart = async () => {
        const homeResult = await GetBoothHome();
        console.log(homeResult.data);
        setBoothList(homeResult.data);
      };

      handleStart();
    } else {
      setIsLogin(false);
    }
  }, []);

  const clickTitle = () => {
    if (isLogin) {
    } else {
      navigate('/login');
    }
  };

  return (
    <Wrapper>
      {isScrap ? <WholeScrap>스크랩북 전체보기</WholeScrap> : <></>}
      <Title>
        {isScrap ? '이화연님의\n스크랩북' : '2024 \n 이화여대 대동제'}
      </Title>
      <ScrapBox>
        {isScrap ? (
          <ScrapSlider>
            <CategorySlide options={['부스', '메뉴', '공연']} />
          </ScrapSlider>
        ) : (
          <ScrapTitle isLogin={isLogin} onClick={clickTitle}>
            {isLogin ? '나의 스크랩북 열기' : '로그인 하러가기'}
          </ScrapTitle>
        )}
        <BlurBox>
          {isScrap ? (
            <ScrapDiv>
              {boothList &&
                boothList.map((item, index) => (
                  <ScrapCard key={index} item={item} size='small'></ScrapCard>
                ))}
            </ScrapDiv>
          ) : (
            <>
              <Guide>
                {isLogin
                  ? '이화연님\n대동제에서 잊지 못할\n추억을 만들어봐요🍀'
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

export default ScrapBook;

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

  margin-bottom: 1rem;
`;

const ScrapBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const ScrapSlider = styled.div`
  position: relative;
  z-index: 5;
  margin-bottom: -18px;
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

  cursor: pointer;
`;

const BlurBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 20.625rem;
  height: 26.8125rem;
  flex-shrink: 0;
  padding: 1.75rem 1.2rem 1.25rem;

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
