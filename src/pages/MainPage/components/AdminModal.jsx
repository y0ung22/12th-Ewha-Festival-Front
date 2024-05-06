import { useState } from 'react';
import styled, { css } from 'styled-components';

const AdminModal = ({ setIsModal, onClickYes }) => {
  const [clicked, setClicked] = useState(false);
  // 모달 열기
  const handleOnClickYes = () => {
    setClicked(true);
    setTimeout(() => {
      onClickYes();
      setClicked(false);
    }, 380);
  };

  // 모달 닫기
  const handleClose = () => {
    setClicked(true);
    setTimeout(() => {
      setIsModal(false);
      setClicked(false);
    }, 380);
  };

  return (
    <ModalWrapper>
      <Background onClick={handleClose} />
      <Wrapper clicked={clicked}>
        <Title>공지사항</Title>
        <Contents>
          <PurTitle>다회용기 관련 안내</PurTitle>
          <BlackContent>
            {
              '축제 중 사용하신 다회용기는\n생활환경관에 있는 중앙환경동아리 이큐브와\n아임에코 부스에 반납해주세요.'
            }
          </BlackContent>
          <Line />
          <PurTitle>본무대 입장 및 관람 안내</PurTitle>
          <BoxContainer>
            <MiniBox>
              <BlockBox>입장대상</BlockBox>
              <BlackContent>팔찌를 착용한 이화여자대학교 학부생</BlackContent>
            </MiniBox>
            <MiniBox>
              <BlockBox>입장시간</BlockBox>
              <BlackContent>14:00 ~ 18:20</BlackContent>
              <Notice>
                *안전한 무대 입장을 위해 무대 입장 마감인 6시 20분 전까지 입장
                부탁드립니다.
              </Notice>
            </MiniBox>
            <MiniBox>
              <BlockBox>입장구역</BlockBox>
              <div className='zoneBox'>
                <Zone>A-D 구역 팔찌 착용</Zone>

                <BlackContent>조형예술대학건물쪽 입구</BlackContent>
              </div>
              <div className='zoneBox'>
                <Zone>E-H 구역 팔찌 착용</Zone>
                <BlackContent>이화동산쪽 입구</BlackContent>
              </div>
            </MiniBox>
          </BoxContainer>
          <Btn>
            <BtnNo onClick={handleClose}>닫기</BtnNo>
            <BtnYes onClick={handleOnClickYes}>하루동안 보지않기</BtnYes>
          </Btn>
        </Contents>
      </Wrapper>
    </ModalWrapper>
  );
};

export default AdminModal;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99997;

  animation: ${({ clicked }) =>
    clicked ? 'modalClose 0.4s' : 'modalOpen 0.4s'};

  @keyframes modalClose {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes modalOpen {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 34.6875rem;
  border-radius: 0.625rem;
  background: var(--wh);
  z-index: 99998;

  animation: ${({ clicked }) =>
    clicked ? 'modalClose 0.4s' : 'modalOpen 0.4s'};

  @keyframes modalClose {
    from {
      opacity: 1;
      transform: ease-in-out;
    }

    to {
      opacity: 0;
      transform: ease-in-out;
    }
  }

  @keyframes modalOpen {
    from {
      opacity: 0;
      transform: ease-out-in;
    }
    to {
      opacity: 1;
      transform: ease-out-in;
    }
  }
`;

const Title = styled.div`
  width: 20rem;
  height: 3.25rem;
  flex-shrink: 0;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background: var(--purple);

  color: var(--wh);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.03125rem;
  padding: 1.06rem 0;
`;

const Line = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.81rem;

  width: 18.78125rem;
  height: 0rem;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: var(--gray02);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.38rem 1.78rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
`;

const MiniBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.44rem;

  .zoneBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PurTitle = styled.div`
  margin-bottom: 0.69rem;
  color: var(--purple);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BlackContent = styled.div`
  width: 16.4375rem;
  color: var(--bk01);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
`;

const BlockBox = styled.div`
  width: 3.1rem;
  display: flex;
  padding: 0.3125rem 0.375rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.25rem;
  border: 1px solid var(--gray05);
  background: var(--wh);

  color: var(--gray05);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Notice = styled.div`
  width: 10.4375rem;
  color: var(--bk01);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Zone = styled.div`
  width: 10.4375rem;
  color: var(--bk01);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.56rem;
  margin: 1.25rem auto 1.81rem auto;
`;

const ButtonBase = styled.div`
  display: flex;
  width: 7.25rem;
  height: 1.875rem;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;
`;

const BtnNo = styled(ButtonBase)`
  border: 1px solid var(--gray02);
  background-color: var(--gray03);
  color: var(--gray01);
  cursor: pointer;
`;

const BtnYes = styled(ButtonBase)`
  border: 1px solid var(--green02);
  background-color: var(--green01);
  color: var(--wh);
  cursor: pointer;
`;
