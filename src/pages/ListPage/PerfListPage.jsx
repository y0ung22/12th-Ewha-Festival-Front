import { useState, useEffect } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import Pagination from '../../_common/Pagination';

import ScrapCard from '../../_common/ScrapCard';
import DaySlider from './components/DaySlider';
import SelectBtn from './components/SelectBtn';

import { GetBoothList } from '../../api/booth';

import { useRecoilState } from 'recoil';
import { PlaceState, DayState } from '../../assets/recoil/apiRecoil';

const PerfListPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(5); // 전체 페이지

  const [selectDay, setSelectDay] = useState(8); //선택 요일
  const [selectPlace, setSelectPlace] = useRecoilState(PlaceState); //선택 장소

  const [perfList, setPerfList] = useState([]);

  const handleStart = async (day, place, page) => {
    const placeValue = place === '전체' ? null : place;
    const perfListResult = await GetBoothList('공연', day, placeValue, page);
    setPerfList(perfListResult.data);
    setCurrentPage(perfListResult.page);
    setTotalPage(perfListResult.total_page);
    setTotalItems(perfListResult.total);
  };

  useEffect(() => {
    setCurrentPage(1);
    handleStart(selectDay, selectPlace['performance'], 1);
  }, [selectDay, selectPlace]);

  useEffect(() => {
    handleStart(selectDay, selectPlace['performance'], currentPage);
  }, [currentPage]);

  return (
    <>
      <TopBar isMenu={true} />
      <Wrapper>
        <TopDiv>
          <DaySlider setChoice={setSelectDay} />
          <SelectBtn category={'performance'} />
        </TopDiv>
        <TotalBooth>총 {totalItems}개의 공연</TotalBooth>
        <ResultDiv>
          {perfList?.map((item, index) => (
            <ScrapCard key={index} item={item} />
          ))}
        </ResultDiv>

        {totalItems > 10 && (
          <Pagination
            total={totalPage}
            page={currentPage}
            setPage={setCurrentPage}
          />
        )}
      </Wrapper>
    </>
  );
};

export default PerfListPage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
  min-height: 100%;
  padding: 0 1.06rem 3.75rem;

  background-color: #fff;
`;

const TopDiv = styled.div`
  position: sticky;
  top: 104px;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: #fff;
  width: 100%;
`;

const TotalBooth = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  color: var(--gray05, #8e8e8e);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.03125rem;

  margin-bottom: 0.81rem;
`;

const ResultDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 0.875rem 0.625rem;
  height: max-content;
`;
