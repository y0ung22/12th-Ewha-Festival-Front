import React, { useState, useRef } from 'react';
import { S } from './components/AdminEdit.style';

// components
import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import BoothThumbnail from './components/BoothThumbnail';
import BoothTime from './components/BoothTime';
import BoothOpened from './components/BoothOpened';

const BoothEditPage = () => {
  const formRef = useRef();
  const [thumnail, setThumnail] = useState(null);
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
    setThumnail(file);
  };

  const handleDayEdit = days => {
    setDay(days);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    if (thumnail) {
      formData.append('thumnail', thumnail);
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

    // PATCH 로직 -> 추후 별도 API 파일에 작성 예정
  };

  return (
    <>
      <TopBar />
      <S.Wrapper>
        <form ref={formRef} onSubmit={handleSubmit}>
          <BoothThumbnail onImgUpload={handleImgUpload} />
          <S.Box>
            <S.Title text={'부스 이름'} />
            <S.InputContainer>
              <textarea
                id='name'
                onChange={e => setName(e.target.value)}
                placeholder='부스명을 입력해주세요(최대 14자)'
                maxLength='14'
              >
                {name}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box num='35px'>
            <S.Title text={'실시간 공지사항'} />
            <S.InputContainer num='80px'>
              <textarea
                id='realtime'
                onChange={e => setRealtime(e.target.value)}
                placeholder='실시간으로 알리고 싶은 정보를 작성해주세요(최대 100자)'
                maxLength='100'
              >
                {realtime}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box num='37px'>
            <S.Title text={'부스 운영시간'} />
            <BoothTime onDayEdit={handleDayEdit} />
          </S.Box>
          <S.Box num='69px'>
            <S.Title text={'부스 소개글'} />
            <S.InputContainer num='80px'>
              <textarea
                id='description'
                onChange={e => setDescription(e.target.value)}
                placeholder='부스에 대해 알리는 소개글을 작성해주세요(최대 100자)'
                maxLength='100'
              >
                {description}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box num='76px'>
            <S.Title text={'부스 운영진 연락처'} />
            <S.InputContainer num='40px'>
              <textarea
                id='contact'
                onChange={e => setContact(e.target.value)}
                placeholder='문의를 위한 부스 운영진 연락처를 남겨주세요&#13;&#10;예) 카카오톡 오픈채팅 링크'
              >
                {contact}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title text={'운영여부'} />
            <BoothOpened opened={opened} setOpened={setOpened} />
          </S.Box>
          <S.SubmitBtn type='submit'>작성 완료</S.SubmitBtn>
        </form>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default BoothEditPage;
