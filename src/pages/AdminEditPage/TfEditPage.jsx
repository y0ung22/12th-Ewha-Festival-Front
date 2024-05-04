import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { S } from './components/AdminEdit.style';

// components
import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import BoothThumbnail from './components/BoothThumbnail';
import BoothTime from './components/BoothTime';
import BoothOpened from './components/BoothOpened';

// API
import { GetTFBoothInfo } from '../../api/tf';
import { PatchTFBooth } from '../../api/tf';

const TfEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef();
  const [thumnail, setThumnail] = useState(null);
  const [name, setName] = useState('');
  const [realtime, setRealtime] = useState('');
  const [days, setDays] = useState([]);
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [opened, setOpened] = useState(true);

  const [boothData, setBoothData] = useState({
    thumnail: null,
    name: '',
    realtime: '',
    days: [],
    description: '',
    contact: '',
    opened: true
  });

  useEffect(() => {
    GetTFBoothInfo(id)
      .then(res => setBoothData(res))
      .catch();
  }, [id]);

  const handleImgUpload = file => {
    setThumnail(file);
  };

  const handleDaysEdit = days => {
    setDays(days);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    if (boothData.thumnail) {
      formData.append('thumnail', thumnail);
    }

    const otherData = {
      name: boothData.name,
      realtime: boothData.realtime,
      days: boothData.days,
      description: boothData.description,
      contact: boothData.contact,
      opened: boothData.opened
    };

    try {
      await PatchTFBooth({ boothId: id, formData, otherData });
      //alert('부스 정보가 성공적으로 수정되었습니다.');
      //navigate(`/detail/${id}`);
    } catch (error) {
      alert('부스 정보 수정에 실패했습니다.');
    }
  };

  console.log('!!initialTime:', boothData.days);

  return (
    <>
      <TopBar />
      <S.Wrapper>
        <form ref={formRef} onSubmit={handleSubmit}>
          <BoothThumbnail
            onImgUpload={handleImgUpload}
            initialThum={boothData.thumnail}
            type1='2'
            type2='2'
          />
          <S.Box>
            <S.Title text={'부스 이름'} />
            <S.InputContainer>
              <textarea
                id='name'
                value={boothData.name}
                onChange={e =>
                  setBoothData({ ...boothData, name: e.target.value })
                }
                placeholder='부스명을 입력해주세요(최대 14자)'
                maxLength='14'
              >
                {name}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title text={'실시간 공지사항'} />
            <S.InputContainer num='80px'>
              <textarea
                id='realtime'
                value={boothData.realtime}
                onChange={e =>
                  setBoothData({ ...boothData, realtime: e.target.value })
                }
                placeholder='실시간으로 알리고 싶은 정보를 작성해주세요(최대 100자)'
                maxLength='100'
              >
                {realtime}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title text={'부스 운영시간'} />
            <BoothTime
              onDayEdit={handleDaysEdit}
              initialTime={boothData.days}
            />
          </S.Box>
          <S.Box>
            <S.Title text={'부스 소개글'} />
            <S.InputContainer num='200px'>
              <textarea
                id='description'
                value={boothData.description}
                onChange={e =>
                  setBoothData({ ...boothData, description: e.target.value })
                }
                placeholder='부스에 대해 알리는 소개글을 작성해주세요(최대 300자)'
                maxLength='300'
              >
                {description}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title text={'부스 운영진 연락처'} />
            <S.InputContainer num='40px'>
              <textarea
                id='contact'
                onChange={e =>
                  setBoothData({ ...boothData, contact: e.target.value })
                }
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
          <S.SubmitBtn type='submit' num1='35px'>
            작성 완료
          </S.SubmitBtn>
        </form>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default TfEditPage;
