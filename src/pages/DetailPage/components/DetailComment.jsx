import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { S } from '../Detail.style';

import Comment from './Comment';
import { ReactComponent as Summit } from '../images/arrow-circle-up.svg';

const DetailComment = ({ c }) => {
  // 방명록 입력창 자동 높이 조절
  const textarea = useRef();
  const handleChange = e => {
    setNewComment(e.target.value);
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const [newComment, setNewComment] = useState('');
  const OnSubmit = e => {
    if (newComment.trim() !== null) {
      e.preventDefault();
      setNewComment('');
    }
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
            value={newComment}
            onChange={e => handleChange(e)}
          />
          <Summit onClick={e => OnSubmit(e)} />
        </Input>
      </Container>
    </>
  );
};

export default DetailComment;

const Container = styled.div`
  margin-bottom: 5.31rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;
`;

const Input = styled.form`
  display: flex;
  width: 100%;
  padding: 0.6875rem 0.875rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray02);
  background: var(--gray03);

  textarea {
    width: 100%;
    color: var(--bk01);
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: -0.03125rem;

    ::placeholder {
      color: var(--gray05);
    }
  }
`;
