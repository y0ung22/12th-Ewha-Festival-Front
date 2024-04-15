import React, { useRef } from 'react';
import styled from 'styled-components';
import { S } from '../Detail.style';

import Comment from './Comment';
import { ReactComponent as Summit } from '../images/arrow-circle-up.svg';

const DetailComment = ({ c }) => {
  // 방명록 입력창 자동 높이 조절
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  return (
    <>
      <S.SubTitle>방명록</S.SubTitle>
      <Container>
        {c.map(comment => (
          <Comment key={comment.id} c={comment} />
        ))}
        <Input>
          <textarea
            ref={textarea}
            placeholder='방명록을 남겨주세요'
            rows={1}
            onChange={handleResizeHeight}
          />
          <Summit />
        </Input>
      </Container>
    </>
  );
};

export default DetailComment;

const Container = styled.div`
  margin-bottom: 145px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

const Input = styled.form`
  display: flex;
  width: 100%;
  padding: 11px 14px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  border-radius: 15px;
  border: 1px solid var(--gray02);
  background: var(--gray03);

  textarea {
    width: 100%;
    color: var(--gray05);
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
`;
