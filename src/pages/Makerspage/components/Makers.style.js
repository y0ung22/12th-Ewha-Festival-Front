import styled from 'styled-components';

const Title = styled.div`
  display: inline-flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--green01);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  color: var(--wh01, var(--wh));
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.5px;
`;

const BoxContainer = styled.div`
  display: flex;
  width: 330px;
  padding: 27px 15px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 11px 7px;
  flex-wrap: wrap;

  border-radius: 15px;
  background: linear-gradient(
    158deg,
    rgba(228, 228, 228, 0.4) 3.91%,
    rgba(247, 247, 247, 0.4) 102.63%
  );
  box-shadow:
    0px 0px 4px 0px rgba(0, 0, 0, 0.1),
    0px 0px 4px 0px #fff inset;
  backdrop-filter: blur(10px);
`;

const Box = styled.div`
  width: 146px;
  height: 182px;
  flex-shrink: 0;

  box-shadow: 0px 0px 4px 0px rgba(210, 210, 210, 0.54) inset;
`;

const Info = styled.div`
  display: flex;
  width: 30px;
  height: 13px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: var(--wh);
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 250% */
  letter-spacing: -0.5px;
`;

const Name = styled.div`
  color: var(--wh);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.5px;
`;

const Part = styled.div`
  display: flex;
  width: 33px;
  height: 15px;
  flex-direction: column;
  justify-content: center;

  color: var(--wh);
  text-align: center;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 250% */
  letter-spacing: -0.5px;
`;

const Work = styled.div`
  color: var(--wh);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 150% */
  letter-spacing: -0.5px;
`;

export const S = {
  Title,
  BoxContainer,
  Box,
  Info,
  Name,
  Part,
  Work
};
