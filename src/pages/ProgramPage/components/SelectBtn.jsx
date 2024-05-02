import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Vector } from '../../../assets/icons/vector-white.svg';

import PlaceSheet from './PlaceSheet';

const SelectBtn = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setIsOpen(!isOpen)}>
        {props.typeList[props.selectedType]} <Vector />
      </Wrapper>
      {isOpen && (
        <SheetWrapper>
          <SheetBackground onClick={() => setIsOpen(!isOpen)} />
          <PlaceSheet {...props} />
        </SheetWrapper>
      )}
    </>
  );
};

export default SelectBtn;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.0625rem;
  justify-content: center;
  align-items: center;

  width: max-content;
  height: max-content;

  gap: 0.1875rem;

  border-radius: 1.875rem;
  border: 1px solid var(--green02, #03d664);
  background: var(--green_01, #00f16f);

  //글씨 관련 스타일
  color: var(--wh);
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.03125rem;

  cursor: pointer;
`;

const SheetWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 100;
`;

const SheetBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
