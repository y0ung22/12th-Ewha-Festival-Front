import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { S } from './components/AdminEdit.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import MenuThumAdd from './components/MenuThumAdd';
import MenuVegan from './components/MenuVegan';
import MenuOpened from './components/MenuOpened';

import { PostMenu } from '../../api/booth';

const MenuAddPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [img, setImg] = useState(null);
  const [menu, setMenu] = useState('');
  const [price, setPrice] = useState('');
  const [vegan, setVegan] = useState('');
  const [opened, setOpened] = useState(true);

  // 페이지 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImgUpload = file => {
    setImg(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();

    // 이미지가 있을 경우만 formData에 추가
    if (img) {
      formData.append('img', img);
    }

    // 나머지 데이터는 직접적으로 formData에 추가
    formData.append('menu', menu);
    formData.append('price', price);
    formData.append('vegan', vegan);
    formData.append('is_soldout', opened); // True = 운영 중

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      await PostMenu(id, formData);
      alert('메뉴가 성공적으로 추가되었습니다.');
      navigate(`/menuedit/${id}`);
    } catch (error) {
      alert('메뉴 추가에 실패하였습니다.');
    }
  };

  return (
    <>
      <TopBar />
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <MenuThumAdd onImgUpload={handleImgUpload} />
          <S.Box num={'25px'}>
            <S.Title>메뉴 이름</S.Title>
            <S.InputContainer>
              <textarea
                id='menu'
                onChange={e => setMenu(e.target.value)}
                placeholder='메뉴명을 입력해주세요(최대 14자)'
                maxLength='14'
              >
                {menu}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box num={'17px'}>
            <S.Title>가격</S.Title>
            <S.InputContainer>
              <textarea
                id='price'
                onChange={e => setPrice(e.target.value)}
                placeholder='가격을 입력해주세요 예) 4000'
                maxLength='14'
              >
                {price}
              </textarea>
            </S.InputContainer>
          </S.Box>
          <S.Box num={'40px'}>
            <S.Title>비건 여부</S.Title>
            <MenuVegan setVegan={setVegan} />
          </S.Box>
          <S.Box num={'40px'}>
            <S.Title>운영 여부</S.Title>
            <MenuOpened opened={opened} setOpened={setOpened} />
          </S.Box>
          <S.SubmitBtn num1={'48px'} type='submit'>
            작성 완료
          </S.SubmitBtn>
        </form>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default MenuAddPage;
