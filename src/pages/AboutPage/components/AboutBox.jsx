import React from 'react';
import styled from 'styled-components';

const AboutBox = ({ t }) => {
  return (
    <Box>
      <div>해방 : </div>
      <span>{t.main}</span>
      <ul>
        {t.sub.map(t => (
          <li>{t}</li>
        ))}
      </ul>
    </Box>
  );
};

export default AboutBox;

const Box = styled.div`
  width: 100%;
  padding: 1.87rem 0;
  border-radius: 0.9375rem;
  background: rgba(217, 217, 217, 0.2);
  backdrop-filter: blur(2px);
  font-weight: 700;
  white-space: pre-line;

  div {
    margin-bottom: 0.62rem;
    font-size: 1.25rem;
  }

  span {
    font-size: 1.125rem;
  }

  ul {
    margin-top: 1.75rem;

    li {
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`;
