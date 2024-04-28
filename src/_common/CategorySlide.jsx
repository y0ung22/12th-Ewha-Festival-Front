import React, { useState } from 'react';
import styled from 'styled-components';

const CategorySlide = ({ options }) => {
  const [select, setSelect] = useState(options[0]);

  const handleOption = selectedOption => {
    setSelect(selectedOption);
  };

  return (
    <>
      <Wrapper>
        {options.map(opt => (
          <CategoryBtn
            key={opt}
            onClick={() => handleOption(opt)}
            selected={select === opt}
          >
            {opt}
          </CategoryBtn>
        ))}
      </Wrapper>
    </>
  );
};

export default CategorySlide;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 2.25rem;

  justify-content: center;
  align-items: center;
  gap: -0.375rem;
  border-radius: 1.875rem;
  background: #c1d9cc;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  align-self: flex-start;
  margin-bottom: 1.25rem;
`;

const CategoryBtn = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 0.5rem 1.0625rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;

  border: 1px solid ${props => (props.selected ? '#03D664' : 'transparent')};
  background: ${props =>
    props.selected ? 'var(--green_01, #00F16F)' : 'transparent'};

  color: var(--wh);
  text-align: center;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.03125rem;
`;
