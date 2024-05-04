import { useState, useEffect } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import Pagination from '../../_common/Pagination';

import ScrapCard from '../../_common/ScrapCard';
import DaySlider from './components/DaySlider';
import SelectBtn from './components/SelectBtn';

import { GetBoothList } from '../../api/booth';

import { useRecoilState } from 'recoil';
import { PlaceState, DayState } from '../../assets/recoil/apiRecoil';

const BoothListPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(5); // 전체 페이지

  const [selectDay, setSelectDay] = useState(8); //선택 요일
  const [selectPlace, setSelectPlace] = useRecoilState(PlaceState); //선택 장소

  const [boothList, setBoothList] = useState([]);

  useEffect(() => {
    const handleStart = async () => {
      const boothListResult = await GetBoothList(
        '부스',
        selectDay,
        selectPlace['booth'],
        currentPage
      );
      console.log(boothListResult.data, selectDay, selectPlace);
      setBoothList(boothListResult.data);
      setCurrentPage(boothListResult.page);
      setTotalPage(boothListResult.total_page);
      setTotalItems(boothListResult.total);
    };

    handleStart();
  }, [selectDay, selectPlace, currentPage]);

  return (
    <>
      <Wrapper>
        <TopBar isMenu={true} />
        <TopDiv>
          <div className='box'>
            <DaySlider setChoice={setSelectDay} />
            <SelectBtn category={'booth'} />
          </div>
          <TotalBooth>총 {totalItems}개의 부스</TotalBooth>
        </TopDiv>
        <ResultDiv>
          {boothList?.map((item, index) => (
            <ScrapCard key={index} item={item} />
          ))}
        </ResultDiv>

        <Pagination
          total={totalPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </Wrapper>
      <Footer />
    </>
  );
};

export default BoothListPage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 0 1.06rem 158.08px;

  background-color: #fff;
`;

const TopDiv = styled.div`
  width: 100%;

  .box {
    display: flex;
    justify-content: space-between;
  }
`;

const TotalBooth = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  color: var(--gray05, #8e8e8e);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.03125rem;
`;

const ResultDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.875rem 0.625rem;
`;
