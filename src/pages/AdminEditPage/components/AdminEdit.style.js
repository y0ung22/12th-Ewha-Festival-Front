import styled, { css } from 'styled-components';

// (공통) 중앙 정렬 Wrapper
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;

  display: flex;
  //padding: 0px 20px;
  flex-direction: column;
  align-items: center;
`;

// (공통) Title+요소 묶는 박스
const Box = styled.div`
  margin-top: ${({ num }) => num || '35px'};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Title = styled.div`
  color: var(--bk01);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.5px;
`;

// (공통) input 스타일
const InputContainer = styled.div`
  display: flex;
  width: 350px;
  padding: 11px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;

  border-radius: 15px;
  border: 1px solid #e7e7e7;
  background: linear-gradient(334deg, var(--wh) 71.49%, var(--wh) 169%);
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  textarea {
    width: 317px;
    height: ${({ num }) => num || '20px'};
    resize: none;
    color: var(--bk01);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    letter-spacing: -0.5px;
  }

  textarea::placeholder {
    color: var(--gray01);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    letter-spacing: -0.5px;
  }
`;

// (공통) 작성 완료 버튼
const SubmitBtn = styled.button`
  margin-top: ${({ num1 }) => num1 || '35px;'};
  margin-bottom: ${({ num2 }) => num2 || '150px;'};

  display: inline-flex;
  padding: 10px 145px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--green02);
  background: #07fb77;

  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: -0.5px;

  cursor: pointer;
  outline: none;
`;

// (공통 스타일) 이미지 수정/추가 버튼
const ImgBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.5px;

  cursor: pointer;
`;

// (BoothEditPage) 부스 썸네일 수정
const boxType = {
  1: css`
    padding-top: 143px;
    width: 350px;
    height: 197px;
  `,
  2: css`
    padding-top: 162px;
    width: 170px;
    height: 284px;
  `
};

const btnType = {
  1: css`
    padding: 10px 133px;
    width: 350px;
    height: 54px;
    font-weight: 700;
    line-height: 20px; /* 125% */
  `,
  2: css`
    padding: 49px 43px;
    width: 170px;
    height: 122px;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
  `
};

const BImgContainer = styled.div`
  ${({ type }) => boxType[type] || boxType[1]}

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(${({ prevUrl }) => prevUrl}) 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
`;

const BImgEditBtn = styled(ImgBtn)`
  ${({ type }) => btnType[type] || btnType[1]}

  background: rgba(0, 0, 0, 0.34);
  border-radius: 0px 0px 15px 15px;
`;

// (MenuAddPage) 메뉴 썸네일 추가
const MImgContainer = styled.div`
  width: 170px;
  height: 197px;

  border-radius: 20px;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(${({ prevUrl }) => prevUrl}) 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MImgAddBtn = styled(ImgBtn)`
  width: 170px;
  height: 54px;
  padding: 10px;
  margin-top: 143px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0px 0px 20px 20px;
`;

export const S = {
  Wrapper,
  Box,
  Title,
  InputContainer,
  SubmitBtn,
  BImgContainer,
  BImgEditBtn,
  MImgContainer,
  MImgAddBtn
};
