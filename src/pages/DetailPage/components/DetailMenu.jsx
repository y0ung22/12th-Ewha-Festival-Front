import React, { useState } from 'react';
import styled from 'styled-components';
import { S } from './Detail.style';

import MenuCard from './MenuCard';
import MenuPagenation from './MenuPagenation';

const DetailMenu = ({ m }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = m.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <S.SubTitle>메뉴</S.SubTitle>
      <Container>
        <Grid>
          {currentItems.map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </Grid>
        <MenuPagenation
          itemsPerPage={itemsPerPage}
          totalItems={m.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
};

export default DetailMenu;

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem 0.625rem;
  width: fit-content;
`;
