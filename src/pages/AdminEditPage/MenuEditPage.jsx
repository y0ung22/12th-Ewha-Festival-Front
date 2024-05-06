import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import GoMenuEdit from './components/GoMenuEdit';
import GoMenuAdd from './components/GoMenuAdd';

import { GetMenuList } from '../../api/booth';

const MenuEditPage = () => {
  const { id } = useParams();
  const [menuList, setMenuList] = useState([]);
  const navigate = useNavigate();

  // MenuEditPage 컴포넌트 내부
  useEffect(() => {
    fetchMenuList();
  }, [id]);

  const fetchMenuList = () => {
    GetMenuList(id)
      .then(res => setMenuList(res))
      .catch(error =>
        console.error('메뉴 목록을 불러오는데 실패했습니다.', error)
      );
  };

  // GoMenuEdit 클릭 핸들러
  const handleEditClick = menuId => {
    navigate(`/menuedit/${id}/${menuId}`);
  };

  // GoMenuAdd 클릭 핸들러
  const handleAddClick = () => {
    navigate(`/menuadd/${id}`);
  };

  return (
    <>
      <Wrapper>
        <TopBar />
        <Container>
          <Title>수정할 메뉴를 선택해주세요</Title>
          <List dataLength={menuList.length}>
            {menuList.map((item, index) => (
              <div key={index}>
                <GoMenuEdit
                  key={index}
                  menu={item.menu}
                  price={item.price}
                  img={item.img}
                  is_soldout={item.is_soldout}
                  boothId={id}
                  menuId={item.id}
                  onEditClick={() => handleEditClick(item.id)}
                  onMenuDeleted={fetchMenuList}
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
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 13.62rem;
  padding: 0 1.25rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Title = styled.div`
  color: var(--bk01);
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ dataLength }) =>
    dataLength % 2 === 0 ? 'flex-start' : 'center'};
  align-items: flex-start;
  align-content: flex-start;
  gap: 14px 10px;
  flex-wrap: wrap;
`;
