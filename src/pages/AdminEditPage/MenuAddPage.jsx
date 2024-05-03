import React, { useState } from 'react';
import { S } from './components/AdminEdit.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import MenuThumAdd from './components/MenuThumAdd';
import MenuVegan from './components/MenuVegan';
import MenuOpened from './components/MenuOpened';

const MenuAddPage = () => {
  const [img, setImg] = useState(null);
  const [menu, setMenu] = useState('');
  const [price, setPrice] = useState('');
  const [vegan, setVegan] = useState('');
  const [opened, setOpened] = useState(true);

  const handleImgUpload = file => {
    setImg(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const is_soldout = opened;

    const data = {
      img,
      menu,
      price,
      vegan,
      is_soldout // True가 운영 중
    };

    // POST 로직 -> 추후 별도 API 파일에 작성 예정
  };

  return (
    <>
      <TopBar />
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <MenuThumAdd onImgUpload={handleImgUpload} />
          <S.Box num={'25px'}>
            <S.Title text={'메뉴 이름'} />
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
            <S.Title text={'가격'} />
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
            <S.Title text={'비건 여부'} />
            <MenuVegan setVegan={setVegan} />
          </S.Box>
          <S.Box num={'40px'}>
            <S.Title text={'운영여부'} />
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
