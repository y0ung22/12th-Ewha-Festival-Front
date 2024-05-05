import { useState } from 'react';
import styled, { css } from 'styled-components';

const Modal = ({ msgType, title, msg1, msg2, setIsModalOpen, onClickYes }) => {
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
      setIsModalOpen(false);
      setClicked(false);
    }, 380);
  };

  return (
    <ModalWrapper>
      <Background />
      <Wrapper clicked={clicked}>
        <Title>{title}</Title>
        <Contents>
          <Msg1 {...{ msgType, msg2 }}>{msg1}</Msg1>
          <Msg2 msgType={msgType}>{msg2}</Msg2>
          <Btn>
            {msgType === 1 ? (
              <>
                <BtnNo onClick={handleClose}>아니오</BtnNo>
                <BtnYes onClick={handleOnClickYes}>예</BtnYes>
              </>
            ) : (
              <BtnNo onClick={handleClose}>닫기</BtnNo>
            )}
          </Btn>
        </Contents>
      </Wrapper>
    </ModalWrapper>
  );
};

export default Modal;

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
  width: 17.875rem;
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
  width: 17.875rem;
  height: 3.25rem;
  flex-shrink: 0;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background: var(--green04);

  color: var(--wh);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.03125rem;
  padding: 1.06rem 0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Msg1 = styled.div`
  color: var(--bk01);
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: ${props =>
    props.msgType === 1 ? (props.msg2 ? '1.69rem' : '1.87rem') : '1rem'};
  margin-bottom: ${props => props.msgType === 1 && props.msg2 && '0.37rem'};

  ${props =>
    props.msgType === 2 &&
    css`
      color: #928d8d;
      font-size: 0.625rem;
      font-weight: 400;
    `}
`;

const Msg2 = styled.div`
  color: #928d8d;
  text-align: center;
  font-size: 0.625rem;
  font-weight: 400;

  ${props =>
    props.msgType === 2 &&
    css`
      margin-top: 0.875rem;
      color: var(--bk01);
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.5rem;
      white-space: pre-line;
    `}
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.56rem;
  margin: 1.25rem auto 1.38rem;
`;

const ButtonBase = styled.div`
  display: flex;
  width: 5.4375rem;
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
