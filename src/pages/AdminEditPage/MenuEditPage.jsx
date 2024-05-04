import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import GoMenuEdit from './components/GoMenuEdit';
import GoMenuAdd from './components/GoMenuAdd';

// import { menuData } from './components/mock'; // 임시 목데이터
import { GetMenuList } from '../../api/booth';

const MenuEditPage = () => {
  const { id } = useParams();
  const [menuList, setMenuList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetMenuList(id)
      .then(res => setMenuList(res))
      .catch();
  }, [id]);

  // GoMenuEdit 클릭 핸들러
  const handleEditClick = menuId => {
    navigate(`/menuedit/${id}/${menuId}`);
  };

  // GoMenuAdd 클릭 핸들러
  const handleAddClick = () => {
    navigate('/menuadd');
  };

  return (
    <>
      <TopBar />
      <Wrapper>
        <Container>
          <Title>수정할 메뉴를 선택해주세요</Title>
          <List dataLength={menuList.length}>
            {menuList.map((item, index) => (
              <div onClick={() => handleEditClick(item.id)} key={index}>
                <GoMenuEdit
                  key={index}
                  menu={item.menu}
                  price={item.price}
                  img={item.img}
                  is_soldout={item.is_soldout}
                  boothId={id}
                  menuId={item.id}
                />
              </div>
            ))}
            <div onClick={handleAddClick}>
              <GoMenuAdd />
            </div>
          </List>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
};

export default MenuEditPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 218px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Title = styled.div`
  color: var(--bk01);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.5px;

  padding: 0px 20px;
`;

const List = styled.div`
  width: 390px;
  display: flex;
  padding: 0px 20px;
  justify-content: ${({ dataLength }) =>
    dataLength % 2 === 0 ? 'flex-start' : 'center'};
  align-items: flex-start;
  align-content: flex-start;
  gap: 14px 10px;
  flex-wrap: wrap;
`;
