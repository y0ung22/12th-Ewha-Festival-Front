import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const DaySlider = ({ setChoice }) => {
  const options = ['수', '목', '금'];
  const [select, setSelect] = useState(options[0]);
  const [highlightStyle, setHighlightStyle] = useState({});
  const optionRefs = useRef(new Array());

  useEffect(() => {
    const current = optionRefs.current[options.indexOf(select)];
    setChoice(options.indexOf(select) + 8);
    if (current) {
      const { offsetLeft: left, clientWidth: width } = current;
      setHighlightStyle({ left, width });
    }
  }, [select]);

  const handleOption = selectedOption => {
    setSelect(selectedOption);
  };

  return (
    <>
      <Wrapper>
        <Highlighter style={highlightStyle} />
        {options.map((opt, index) => (
          <CategoryBtn
            key={opt}
            ref={el => (optionRefs.current[index] = el)}
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

export default DaySlider;

const Highlighter = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  background-color: var(--highlight-color, #00f16f);
  border-radius: 1.875rem;
  transition:
    left 0.3s ease,
    width 0.3s ease;
  z-index: 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: max-content;
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

  //border: 1px solid ${props => (props.selected ? '#03D664' : 'transparent')};
  /*background: ${props =>
    props.selected ? 'var(--green_01, #00F16F)' : 'transparent'};*/

  color: var(--wh);
  text-align: center;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.03125rem;

  cursor: pointer;
  background: transparent;
  position: relative;
  z-index: 1;
`;
