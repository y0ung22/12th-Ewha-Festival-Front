import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { S } from './components/AdminEdit.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import GoMenuEdit from './components/GoMenuEdit';
import GoMenuAdd from './components/GoMenuAdd';

import { menuData } from './components/mock'; // 임시 목데이터

const MenuEditPage = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    // GET 로직 -> 추후 별도 API 파일에 작성 예정
  });

  return (
    <>
      <TopBar />
      <S.Wrapper>
        <Container>
          <S.Title text={'수정할 메뉴를 선택해주세요'} />
          <List dataLength={menuData.length}>
            {menuData.map((item, index) => (
              <GoMenuEdit
                key={index}
                menu={item.menu}
                price={item.price}
                img={item.img}
                is_soldout={item.is_soldout}
              />
            ))}
            <GoMenuAdd />
          </List>
        </Container>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default MenuEditPage;

const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 218px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const List = styled.div`
  width: 390px;
  display: flex;
  padding: 0px 17px;
  justify-content: ${({ dataLength }) =>
    dataLength % 2 !== 0 ? 'center' : 'flex-start'};
  align-items: flex-start;
  align-content: flex-start;
  gap: 14px 10px;
  flex-wrap: wrap;
`;
