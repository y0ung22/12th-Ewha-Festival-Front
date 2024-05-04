import React, { useState } from 'react';
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
      is_soldout // True = 운영 중
    };

    try {
      await PostMenu(id, data);
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
