import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MenuPagenation = ({ totalSlides, currentPage, onPageChange }) => {
  return (
    <PageNum>
      {Array.from({ length: totalSlides }, (_, index) => (
        <li key={index} onClick={() => onPageChange(index)}>
          <button
            style={{
              backgroundColor:
                currentPage === index ? 'var(--green02)' : 'var(--gray04)'
            }}
          />
        </li>
      ))}
    </PageNum>
  );
};

export default MenuPagenation;

const PageNum = styled.ul`
  margin-top: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;

  button {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;
