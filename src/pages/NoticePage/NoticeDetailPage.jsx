import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import { CommonBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';
import Modal from '../../_common/Modal';

const NoticeDetailPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    id: 1,
    user: 1,
    title: '제모옥',
    content: '내요옹',
    created_at: '2022-08-28',
    updated_at: '2022-08-28'
  });

  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지사항</S.MainText>
        <S.Container>
          <S.GreenLine />
          <S.Title>{data.title}</S.Title>
          <S.GreenLine />
          <S.Content>{data.content}</S.Content>
          <Writer>
            <span>(준)축제준비위원회</span>
            <span>{data.updated_at || data.created_at}</span>
          </Writer>
          <S.GreenLine />
          {/* 사용자 ID에 따라 가시 여부 조정 */}
          <S.BtnContainer>
            <CommonBtn onClick={() => setDeleteModal(true)}>삭제</CommonBtn>
            <CommonBtn
              color='green'
              onClick={() =>
                navigate(`/notice/edit`, {
                  state: data
                })
              }
            >
              수정
            </CommonBtn>
          </S.BtnContainer>
        </S.Container>
        <Footer />
      </S.Wrapper>

      {deleteModal && (
        <Modal
          msgType={1}
          title='공지 삭제'
          msg1='해당 공지사항을 삭제하시겠습니까?'
          msg2='삭제된 글은 다시 불러올 수 없습니다.'
          option={2}
          setIsModalOpen={setDeleteModal}
        />
      )}
    </>
  );
};

export default NoticeDetailPage;

const Writer = styled.div`
  margin: 0 9px 15px auto;
  display: flex;
  flex-direction: column;
  align-items: end;

  span:nth-child(1) {
    color: var(--green01);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.5px;
  }

  span:nth-child(2) {
    color: var(--gray05);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.5px;
  }
`;
