import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './Notice.style';

import TopBar from '../../_common/TopBar';
import { CommonBtn } from '../../_common/Button';
import Footer from '../../_common/Footer';
import TitleInput from './components/TitleInput';
import ContentInput from './components/ContentInput';
import Modal from '../../_common/Modal';

import { PostNotice } from '../../api/tf';

const NoticeWritePage = () => {
  const navigate = useNavigate();

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

  const [cancelModal, setCancelModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const SubmitModalOpen = () => {
    if (newTitle.trim() !== '' && newContent.trim() !== '') {
      setSubmitModal(true);
    }
  };

  const OnSubmit = () => {
    PostNotice(newTitle, newContent).then(navigate('/notice')).catch();
  };

  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.MainText>공지 작성하기</S.MainText>
        <S.Container>
          <TitleInput newTitle={newTitle} handleTitle={handleTitle} />
          <ContentInput newContent={newContent} handleContent={handleContent} />
          <S.BtnContainer>
            <CommonBtn onClick={() => setCancelModal(true)}>취소</CommonBtn>
            <CommonBtn color='green' onClick={SubmitModalOpen}>
              완료
            </CommonBtn>
          </S.BtnContainer>
        </S.Container>
        <Footer />
      </S.Wrapper>

      {cancelModal && (
        <Modal
          msgType={1}
          title='공지 작성 취소'
          msg1='공지사항 작성을 취소하시겠습니까?'
          msg2='작성된 내용은 저장되지 않습니다.'
          option={2}
          setIsModalOpen={setCancelModal}
          onClickYes={() => navigate(-1)}
        />
      )}

      {submitModal && (
        <Modal
          msgType={1}
          title='공지 작성 완료'
          msg1='공지사항 작성을 완료하시겠습니까?'
          option={2}
          setIsModalOpen={setSubmitModal}
          onClickYes={OnSubmit}
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

export default NoticeWritePage;
