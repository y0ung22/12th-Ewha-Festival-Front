import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { B } from './components/Booth.style';

// components
import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import BoothThumbnail from './components/BoothThumbnail';
import BoothTime from './components/BoothTime';
import BoothOpened from './components/BoothOpened';

const BoothEditPage = () => {
  const formRef = useRef();
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState('');
  const [realtime, setRealtime] = useState('');
  const [day, setDay] = useState({
    data: '',
    start_time: '',
    end_time: ''
  });
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [opened, setOpened] = useState(true);

  const handleImgUpload = file => {
    setThumbnail(file);
  };

  const handleDayEdit = days => {
    setDay(days);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }
    formData.append('name', name);
    formData.append('realtime', realtime);
    day.forEach((time, index) => {
      formData.append(`day[${index}][date]`, time.date);
      formData.append(`day[${index}][start_time]`, time.start_time);
      formData.append(`day[${index}][end_time]`, time.end_time);
    });
    formData.append('description', description);
    formData.append('contact', contact);
    formData.append('opened', opened);
    // axios.patch
  };

  return (
    <>
      <TopBar />
      <Wrapper>
        <form ref={formRef} onSubmit={handleSubmit}>
          <BoothThumbnail onImgUpload={handleImgUpload} />
          <B.Box>
            <B.Title>부스 이름</B.Title>
            <B.InputContainer num='20px'>
              <textarea
                id='name'
                onChange={e => setName(e.target.value)}
                placeholder='부스명을 입력해주세요(최대 14자)'
                maxLength='14'
              >
                {name}
              </textarea>
            </B.InputContainer>
          </B.Box>
          <B.Box num='35px'>
            <B.Title>실시간 공지사항</B.Title>
            <B.InputContainer>
              <textarea
                id='realtime'
                onChange={e => setRealtime(e.target.value)}
                placeholder='실시간으로 알리고 싶은 정보를 작성해주세요(최대 100자)'
                maxLength='100'
              >
                {realtime}
              </textarea>
            </B.InputContainer>
          </B.Box>
          <B.Box num='37px'>
            <B.Title>부스 운영시간</B.Title>
            <BoothTime onDayEdit={handleDayEdit} />
          </B.Box>
          <B.Box num='69px'>
            <B.Title>부스 소개글</B.Title>
            <B.InputContainer>
              <textarea
                id='description'
                onChange={e => setDescription(e.target.value)}
                placeholder='부스에 대해 알리는 소개글을 작성해주세요(최대 100자)'
                maxLength='100'
              >
                {description}
              </textarea>
            </B.InputContainer>
          </B.Box>
          <B.Box num='76px'>
            <B.Title>부스 운영진 연락처</B.Title>
            <B.InputContainer num='40px'>
              <textarea
                id='contact'
                onChange={e => setContact(e.target.value)}
                placeholder='문의를 위한 부스 운영진 연락처를 남겨주세요&#13;&#10;예) 카카오톡 오픈채팅 링크'
              >
                {contact}
              </textarea>
            </B.InputContainer>
          </B.Box>
          <B.Box>
            <B.Title>운영여부</B.Title>
            <BoothOpened opened={opened} setOpened={setOpened} />
          </B.Box>
          <B.SubmitBtn type='submit'>작성 완료</B.SubmitBtn>
        </form>
      </Wrapper>
      <Footer />
    </>
  );
};

export default BoothEditPage;

const Wrapper = styled.div`
  height: 100%;
  background-color: white !important;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
