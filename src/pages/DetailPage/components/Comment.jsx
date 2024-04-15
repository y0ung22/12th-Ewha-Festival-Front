import React, { useState } from 'react';
import styled from 'styled-components';

const Comment = ({ c }) => {
  return (
    <Box>
      <Writer>
        <div
          style={{
            color: c.manager ? 'var(--purple)' : 'var(--green02)'
          }}
        >
          {c.nickname}
        </div>
        {c.mine && (
          <div>
            <span>삭제</span>
            <Bar />
            <span>수정</span>
          </div>
        )}
      </Writer>
      <div>{c.content}</div>
      <span>작성시간 {c.created_at}</span>
    </Box>
  );
};

export default Comment;

const Box = styled.div`
  display: flex;
  width: 100%;
  padding: 11px 14px;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid var(--gray02);
  background: var(--wh);
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  color: var(--bk01);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  span {
    margin-left: auto;
    color: var(--gray01);
    text-align: right;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
`;

const Writer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div:nth-child(1) {
    font-weight: 800;
  }
  span {
    font-weight: 600;
  }
`;

const Bar = styled.svg`
  margin: auto 4px;
  width: 1px;
  height: 12px;
  background: var(--gray01);
  flex-shrink: 0;
`;
