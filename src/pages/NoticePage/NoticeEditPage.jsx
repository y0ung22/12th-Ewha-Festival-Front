import React, { useState, useCallback } from 'react';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import { CommonBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';
import TitleInput from './components/TitleInput';
import ContentInput from './components/ContentInput';
import Modal from '../../_common/Modal';

const NoticeEditPage = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [textLimitModal, setTextLimitModal] = useState(false);

  const handleTitle = useCallback(e => {
    setNewTitle(e.target.value);
    if (e.target.value.length === 20) {
      setTextLimitModal(true);
    } else {
      setTextLimitModal(false);
    }
  }, []);

  const handleContent = useCallback(e => {
    setNewContent(e.target.value);
    if (e.target.value.length === 310) {
      setTextLimitModal(true);
    } else {
      setTextLimitModal(false);
    }
  }, []);

  const [deleteModal, setDeleteModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const SubmitModalOpen = () => {
    if (newTitle.trim() !== null && newContent.trim() !== null) {
      setSubmitModal(true);
    }
  };
  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지 수정하기</S.MainText>
        <S.Container>
          <TitleInput handleTitle={handleTitle} />
          <ContentInput handleContent={handleContent} />
          <S.BtnContainer>
            <CommonBtn onClick={() => setDeleteModal(true)}>삭제</CommonBtn>
            <CommonBtn color='green' onClick={SubmitModalOpen}>
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

      {submitModal && (
        <Modal
          msgType={1}
          title='공지 수정 완료'
          msg1='공지사항 수정을 완료하시겠습니까?'
          option={2}
          setIsModalOpen={setSubmitModal}
        />
      )}

      {textLimitModal && (
        <Modal
          msgType={2}
          title='공지 작성 오류'
          msg1='글자 수에 맞추어 작성 내용을 수정해주세요.'
          msg2={`😮 \n 제한된 최대 글자 수를 넘었어요.`}
          setIsModalOpen={setTextLimitModal}
        />
      )}
    </>
  );
};

export default NoticeEditPage;
