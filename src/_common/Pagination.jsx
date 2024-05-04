import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

import vector from '../assets/icons/page-vector.svg';

const Pagination = ({ total, page, setPage, bottom }) => {
  const [phase, setPhase] = useState(1);

  const limit = 5; // 한 페이지에 보여줄 개수
  const totalPhase = Math.ceil(total / limit);

  const displayList =
    phase === totalPhase ? total - (totalPhase - 1) * limit : limit;

  useEffect(() => {
    setPhase(Math.ceil(page / limit));
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Wrapper style={{ marginBottom: bottom && bottom }}>
      <div>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <img src={vector} alt='' style={{ transform: 'scaleX(-1)' }} />
        </Button>
      </div>

      <NumberDiv>
        {Array(displayList)
          .fill()
          .map((_, i) => {
            const displayPage = (phase - 1) * limit + (i + 1);
            return (
              <PageButton
                key={displayPage}
                onClick={() => setPage(displayPage)}
                current={page === displayPage ? 'page' : undefined}
              >
                {displayPage}
              </PageButton>
            );
          })}
      </NumberDiv>

      <div>
        <Button onClick={() => setPage(page + 1)} disabled={page === total}>
          <img src={vector} alt='' />
        </Button>
      </div>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 3.75rem 0 8.875rem;

  div {
    display: flex;
    flex-direction: row;
  }
`;

const Button = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
`;

const NumberDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

const PageButton = styled.div`
  display: flex;
  width: 2.375rem;
  padding: 0.5rem 1.0625rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.625rem;
  border: 1px solid var(--gray02);
  background: var(--gray03);

  color: var(--gray01);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 133.333% */
  letter-spacing: -0.03125rem;

  cursor: pointer;

  &[current] {
    border: 1px solid var(--green02);
    background: var(--green01);
    color: var(--wh);
  }
`;
