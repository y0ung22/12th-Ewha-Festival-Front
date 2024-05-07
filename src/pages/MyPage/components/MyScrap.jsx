import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as AddIcon } from '../images/save_add.svg';
import Pagination from '../../../_common/Pagination';
import ScrapBoothCard from './ScrapBoothCard';
import ScrapMenuCard from './ScrapMenuCard';

import { GetScrapBooth } from '../../../api/auth';
import CategorySlide from '../../../_common/CategorySlide';

const MyScrap = () => {
  const options = ['부스', '메뉴', '공연'];
  const [select, setSelect] = useState('부스');
  const handleOption = option => {
    setSelect(option);
  };

  const [scrapBoothList, setScrapBoothList] = useState();
  const [boothList, setBoothList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [perfList, setPerfList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(3); // 전체 페이지

  const [render, setRender] = useState(1);

  useEffect(() => {
    const handleScrap = async () => {
      const scrapData = await GetScrapBooth(select, currentPage);

      setScrapBoothList(scrapData.data);
      if (scrapData.message == '스크랩한 부스 목록 조회 성공') {
        setBoothList(scrapData.data);
      } else if (scrapData.message == '스크랩한 메뉴 목록 조회 성공') {
        setMenuList(scrapData.data);
      } else if (scrapData.message == '스크랩한 공연 목록 조회 성공') {
        setPerfList(scrapData.data);
      } else {
      }

      setTotalPage(scrapData.total_page);
      setCurrentPage(scrapData.page);
      setTotalItems(scrapData.total);
    };

    handleScrap();
  }, [render, select, currentPage]);

  //select 따라서 해당 리스트로 세팅
  const getCurrentList = () => {
    switch (select) {
      case '부스':
        return { list: boothList, Component: ScrapBoothCard };
      case '메뉴':
        return { list: menuList, Component: ScrapMenuCard };
      case '공연':
        return { list: perfList, Component: ScrapBoothCard };
      default:
        return { list: [], Component: null };
    }
  };

  const renderList = () => {
    const { list, Component } = getCurrentList();

    if (list.length === 0) {
      return (
        <NoneWrapper>
          <AddIcon />
          <NoneDiv>스크랩한 내용이 아직 없어요 🥹</NoneDiv>
        </NoneWrapper>
      );
    }

    const itemList = list.map((item, index) => (
      <Component key={index} item={item} />
    ));
    console.log('totalPage ' + totalPage);
    console.log('currentPage ' + currentPage);

    return <ScrapDiv>{itemList}</ScrapDiv>;
  };

  return (
    <>
      <CategorySlide {...{ options, handleOption, select }} />
      <>
        {renderList()}
        {totalItems > 10 && (
          <Pagination
            total={totalPage}
            page={currentPage}
            setPage={setCurrentPage}
            bottom={'4rem'}
          />
        )}
      </>
    </>
  );
};

export default MyScrap;

const ScrapDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.875rem 0.625rem;

  margin-top: 1.25rem;
`;

const NoneWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13.06rem;
`;

const NoneDiv = styled.div`
  color: var(--green02);
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.9375rem; /* 100% */
  letter-spacing: -0.03125rem;
  margin-top: 1rem;
  margin-bottom: 20rem;
`;
