import styled, { css } from 'styled-components';

const Modal = ({ msgType, title, msg1, msg2, option, setIsModalOpen }) => {
  //아니오로  모달 닫기
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <Contents>
          <Msg1 msgType={msgType}>{msg1}</Msg1>
          <Msg2 msgType={msgType}>{msg2}</Msg2>
          <Btn>
            <BtnNo onClick={handleClose}>아니오</BtnNo>
            {option === 2 && <BtnYes>예</BtnYes>}
          </Btn>
        </Contents>
      </Wrapper>
    </>
  );
};

export default Modal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 186px;
  border-radius: 10px;
  background: var(--wh);
  z-index: 101;
`;

const Title = styled.div`
  width: 286px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
  background: var(--green04);

  color: var(--wh);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
  letter-spacing: -0.5px;
  padding: 17px 0;
  margin-bottom: 27px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Msg1 = styled.div`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${props =>
    props.msgType === 2 &&
    css`
      color: #928d8d;
      font-size: 10px;
      font-weight: 400;
    `}
`;

const Msg2 = styled.div`
  color: #928d8d;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;

  ${props =>
    props.msgType === 2 &&
    css`
      color: #000;
      font-size: 14px;
      font-weight: 500;
      margin-top: 16px;
    `}
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  gap: 9px;
`;

const ButtonBase = styled.div`
  display: flex;
  width: 87px;
  height: 30px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.5px;
`;

const BtnNo = styled(ButtonBase)`
  border: 1px solid var(--gray02);
  background-color: var(--gray03);
  color: var(--gray01);
`;

const BtnYes = styled(ButtonBase)`
  border: 1px solid var(--green02);
  background-color: var(--green01);
  color: var(--wh);
`;
