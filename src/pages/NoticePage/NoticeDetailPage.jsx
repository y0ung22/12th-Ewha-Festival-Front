import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import { CommonBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';
import Modal from '../../_common/Modal';

import { GetNoticeDetail, DeleteNotice } from '../../api/tf';

const NoticeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    GetNoticeDetail(id)
      .then(res => setData(res))
      .catch(error => {
        if (error.response && error.response.status === 404) {
          navigate(-1);
        }
      });
  }, []);

  const [deleteModal, setDeleteModal] = useState(false);

  const OnDelete = () => {
    DeleteNotice(id)
      .then(res => {
        setDeleteModal(false);
        navigate('/notice');
      })
      .catch();
  };

  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지사항</S.MainText>
        <S.Container>
          <S.GreenLine />
          {data && (
            <>
              <S.Title>{data.title}</S.Title>
              <S.GreenLine />
              <S.Content>{data.content}</S.Content>
              <Writer>
                <span>(준)축제준비위원회</span>
                <span>
                  20
                  {data.updated_at.split(' ')[0] ||
                    data.created_at.split(' ')[0]}
                </span>
              </Writer>
            </>
          )}
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
          onClickYes={OnDelete}
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
