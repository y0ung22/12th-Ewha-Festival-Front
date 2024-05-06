import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { S } from './components/AdminEdit.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import MenuThumEdit from './components/MenuThumEdit';
import MenuVegan from './components/MenuVegan';
import MenuOpened from './components/MenuOpened';

import { GetMenuDetail } from '../../api/booth';
import { PatchMenu } from '../../api/booth';

const MenuEditDetailPage = () => {
  const { boothId, menuId } = useParams();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [menuData, setMenuData] = useState({
    img: null,
    menu: '',
    price: '',
    vegan: '',
    opened: true
  });

  // 페이지 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    GetMenuDetail(boothId, menuId)
      .then(res => setMenuData(res))
      .catch();
  }, [boothId, menuId]);

  const handleImgUpload = file => {
    setImg(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();

    if (img) {
      formData.append('img', img);
    }
    formData.append('menu', menuData.menu);
    formData.append('price', menuData.price);
    formData.append('vegan', menuData.vegan);
    formData.append('is_soldout', menuData.opened);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      await PatchMenu(boothId, menuId, formData);
      alert('메뉴가 성공적으로 수정되었습니다.');
      navigate(`/menuedit/${boothId}`);
    } catch (error) {
      alert('메뉴 수정에 실패하였습니다.');
    }
  };

  return (
    <>
      <S.Wrapper>
        <TopBar />
        <S.Container>
          <form onSubmit={handleSubmit}>
            <MenuThumEdit
              onImgUpload={handleImgUpload}
              initialThum={menuData.img}
            />
            <S.Box num={'25px'}>
              <S.Title>메뉴 이름</S.Title>
              <S.InputContainer>
                <textarea
                  id='menu'
                  value={menuData.menu}
                  onChange={e =>
                    setMenuData({ ...menuData, menu: e.target.value })
                  }
                  placeholder='메뉴명을 입력해주세요(최대 14자)'
                  maxLength='14'
                />
              </S.InputContainer>
            </S.Box>
            <S.Box num={'17px'}>
              <S.Title>가격</S.Title>
              <S.InputContainer>
                <textarea
                  id='price'
                  value={menuData.price}
                  onChange={e =>
                    setMenuData({ ...menuData, price: e.target.value })
                  }
                  placeholder='가격을 입력해주세요 예) 4000'
                  maxLength='14'
                />
              </S.InputContainer>
            </S.Box>
            <S.Box num={'40px'}>
              <S.Title>비건 여부</S.Title>
              <MenuVegan
                setVegan={newVegan =>
                  setMenuData({ ...menuData, vegan: newVegan })
                }
              />
            </S.Box>
            <S.Box num={'40px'}>
              <S.Title>운영 여부</S.Title>
              <MenuOpened
                opened={menuData.opened}
                setOpened={newOpened =>
                  setMenuData({ ...menuData, opened: newOpened })
                }
              />
            </S.Box>
            <S.SubmitBtn num1={'48px'} type='submit'>
              작성 완료
            </S.SubmitBtn>
          </form>
        </S.Container>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default MenuEditDetailPage;
