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
  z-index: 1;
`;

const BoxContainer = styled.div`
  margin-top: -19px;

  display: flex;
  width: 330px;
  padding: 27px 15px;
  justify-content: ${({ dataLength }) =>
    dataLength % 2 !== 0 ? 'flex-start' : 'center'};
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
  position: relative;

  width: 146px;
  height: 182px;
  flex-shrink: 0;

  box-shadow: 0px 0px 4px 0px rgba(210, 210, 210, 0.54) inset;
`;

const Img = styled.div`
  width: 146px;
  height: 182px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid var(--wh02, rgba(251, 251, 251, 0.3));
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.5) -42.34%, rgba(0, 0, 0, 0) 87.59%),
    url(${({ img }) => img}) lightgray 50% / cover no-repeat;
`;

const Info = styled.div`
  position: absolute;
  top: 13px;
  left: 12px;

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
  position: absolute;
  top: 24px;
  left: 12px;

  color: var(--wh);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.5px;
`;

const PartContainer = styled.div`
  position: absolute;
  top: 13px;
  right: 12px;

  display: inline-flex;
  padding: 0px 6px;
  align-items: center;
  gap: 2px;

  border-radius: 10px;
  background: var(--bk02);
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
  position: absolute;
  bottom: 13px;
  left: 12px;

  color: var(--wh);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 150% */
  letter-spacing: -0.5px;
  white-space: pre-wrap;
`;

export const S = {
  Title,
  BoxContainer,
  Box,
  Img,
  Info,
  Name,
  PartContainer,
  Part,
  Work
};
