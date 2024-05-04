import React, { useState } from 'react';
import styled from 'styled-components';

const MenuPagenation = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = pageNumber => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <PageNum>
      {pageNumbers.map(number => (
        <li key={number} onClick={() => handleClick(number)}>
          <button
            onClick={() => paginate}
            style={{
              backgroundColor:
                currentPage === number ? 'var(--green02)' : 'var(--gray04)'
            }}
          />
        </li>
      ))}
    </PageNum>
  );
};

export default MenuPagenation;

const PageNum = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;

  button {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;
