import styled from 'styled-components';

const ScrapBook = () => {
  return (
    <Wrapper>
      <Title>
        2024
        <br />
        이화여대 대동제
      </Title>
      <ScrapBox>
        <ScrapTitle>나의 스크랩북 열기</ScrapTitle>
        <BlurBox>
          <>
            <Guide>
              이화연님
              <br />
              대동제에서 잊지 못할
              <br />
              추억을 만들어봐요🍀
            </Guide>
            <TagBox>
              <Tag>#2024_대동제</Tag>
              <Tag>우리과_부스는_어디</Tag>
              <Tag>#모든_정보가_내손안에</Tag>
            </TagBox>
          </>
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

  gap: 1rem;
  width: 100%;
`;

const Title = styled.div`
  color: var(--wh);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.625rem;
  letter-spacing: -0.03125rem;
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
  background: var(--green_01, #00f16f);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const BlurBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 20.625rem;
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
