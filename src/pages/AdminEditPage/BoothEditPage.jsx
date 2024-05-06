import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { S } from './components/AdminEdit.style';

// components
import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import BoothThumbnail from './components/BoothThumbnail';
import BoothTime from './components/BoothTime';
import BoothOpened from './components/BoothOpened';

// api
import { GetBoothInfo } from '../../api/booth';
import { PatchBooth } from '../../api/booth';

const BoothEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef();
  const [thumnail, setThumnail] = useState(null);

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
    GetBoothInfo(id)
      .then(res => setBoothData(res))
      .catch();
  }, [id]);

  const handleImgUpload = file => {
    setThumnail(file);
  };

  const [rows, setRows] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const selectedRows = rows.filter(row => row.selected);

    const updatedRows = selectedRows.map(({ date, start_time, end_time }) => ({
      date,
      start_time,
      end_time
    }));

    const formData = new FormData(formRef.current);

    if (thumnail) {
      formData.append('thumnail', thumnail);
    }

    formData.append('name', boothData.name);
    formData.append('realtime', boothData.realtime);
    formData.append('days', JSON.stringify(updatedRows));
    formData.append('description', boothData.description);
    formData.append('contact', boothData.contact);
    formData.append('opened', boothData.opened);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      await PatchBooth(id, formData);
      alert('부스 정보가 성공적으로 수정되었습니다.');
      navigate(`/detail/${id}`);
    } catch (error) {
      alert('부스 정보 수정에 실패했습니다.');
    }
  };

  return (
    <S.Wrapper>
      <TopBar />
      <S.Container>
        <form ref={formRef} onSubmit={handleSubmit}>
          <BoothThumbnail
            onImgUpload={handleImgUpload}
            initialThum={boothData.thumnail}
          />
          <S.Box>
            <S.Title>부스 이름</S.Title>
            <S.InputContainer>
              <textarea
                id='name'
                value={boothData.name}
                onChange={e =>
                  setBoothData({ ...boothData, name: e.target.value })
                }
                placeholder='부스명을 입력해주세요(최대 14자)'
                maxLength='14'
              />
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title>실시간 공지사항</S.Title>
            <S.InputContainer num='80px'>
              <textarea
                id='realtime'
                value={boothData.realtime}
                onChange={e =>
                  setBoothData({ ...boothData, realtime: e.target.value })
                }
                placeholder='실시간으로 알리고 싶은 정보를 작성해주세요(최대 100자)'
                maxLength='100'
              />
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title>부스 운영시간</S.Title>
            <BoothTime
              rows={rows}
              setRows={setRows}
              initialTime={boothData.days}
            />
          </S.Box>
          <S.Box>
            <S.Title>부스 소개글</S.Title>
            <S.InputContainer num='80px'>
              <textarea
                id='description'
                value={boothData.description}
                onChange={e =>
                  setBoothData({ ...boothData, description: e.target.value })
                }
                placeholder='부스에 대해 알리는 소개글을 작성해주세요(최대 100자)'
                maxLength='100'
              />
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title>부스 운영진 연락처</S.Title>
            <S.InputContainer num='40px'>
              <textarea
                id='contact'
                value={boothData.contact}
                onChange={e =>
                  setBoothData({ ...boothData, contact: e.target.value })
                }
                placeholder='문의를 위한 부스 운영진 연락처를 남겨주세요&#13;&#10;예) 카카오톡 오픈채팅 링크'
              />
            </S.InputContainer>
          </S.Box>
          <S.Box>
            <S.Title>운영 여부</S.Title>
            <BoothOpened
              opened={boothData.opened}
              setOpened={newOpened =>
                setBoothData({ ...boothData, opened: newOpened })
              }
            />
          </S.Box>
          <S.SubmitBtn type='submit'>작성 완료</S.SubmitBtn>
        </form>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default BoothEditPage;
