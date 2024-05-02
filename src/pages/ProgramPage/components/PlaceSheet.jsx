import styled from 'styled-components';

import { CommonBtn } from '../../../_common/Button';

const PlaceSheet = props => {
  return (
    <Wrapper>
      <Question>어디로 갈까요?</Question>
      <SelectBox>
        {props.typeList &&
          props.typeList.map((item, index) => (
            <PlaceBtn
              key={index}
              onClick={() => props.setSelectedType(index)}
              color={props.selectedType === index ? 'green' : ''}
            >
              {item}
            </PlaceBtn>
          ))}
      </SelectBox>
      <Guide>
        {props.typeList[props.selectedType]}에서 참여할 수 있는 체험을
        알아봐요🍀
      </Guide>
    </Wrapper>
  );
};

export default PlaceSheet;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 1.875rem 1.4375rem 9.75rem 1.4375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;

  background: var(--wh, #fff);
  z-index: 101;
`;

const Question = styled.span`
  color: var(--bk01, #000);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.625rem;
  flex-wrap: wrap;
`;

const PlaceBtn = styled(CommonBtn)`
  cursor: pointer;
`;

const Guide = styled.span`
  color: var(--gray01, #bbb);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.03125rem;
`;
