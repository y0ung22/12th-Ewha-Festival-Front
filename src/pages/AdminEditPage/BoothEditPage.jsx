import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { B } from './components/Booth.style';

// components
import BoothThumbnail from './components/BoothThumbnail';
import BoothTime from './components/BoothTime';
import BoothOpened from './components/BoothOpened';

// GlobalStyle Background 말고 흰 배경 적용
const Wrapper = styled.div`
  height: 100%;
  background-color: white;
`;

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
    // axios.patch
  };

  return (
    <Wrapper>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='wrapper'>
          <B.Title>대표 사진</B.Title>
          <BoothThumbnail onImgUpload={handleImgUpload} />
          <B.Title>부스 이름</B.Title>
          <B.InputContainer>
            <input
              id='name'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </B.InputContainer>
          <B.Title>실시간 공지사항</B.Title>
          <B.InputContainer>
            <input
              id='realtime'
              type='text'
              value={realtime}
              onChange={e => setRealtime(e.target.value)}
            />
          </B.InputContainer>
          <B.Title>부스 운영시간</B.Title>
          <BoothTime onDayEdit={handleDayEdit} />
          <B.Title>부스 소개글</B.Title>
          <B.InputContainer>
            <input
              id='description'
              type='text'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </B.InputContainer>
          <B.Title>부스 운영진 연락처</B.Title>
          <B.InputContainer>
            <input
              id='contact'
              type='text'
              value={contact}
              onChange={e => setContact(e.target.value)}
            />
          </B.InputContainer>
          <B.Title>운영여부</B.Title>
          <BoothOpened />
          <B.SubmitBtn type='submit'>작성 완료</B.SubmitBtn>
        </div>
      </form>
    </Wrapper>
  );
};

export default BoothEditPage;
