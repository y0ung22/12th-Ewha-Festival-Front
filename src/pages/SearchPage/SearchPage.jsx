import { useState, useEffect, useRef, startTransition } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as Info } from '../../assets/icons/info-circle.svg';

import Footer from '../../_common/Footer';
import ScrapSkeleton from '../../_common/ScrapSkeleton';
import ScrapCard from '../../_common/ScrapCard';
import { CommonBtn } from '../../_common/Button';

import useSearchInfiniteQuery from '../../assets/hooks/useSearchInfiniteQuery';

const SearchPage = () => {
  sessionStorage.setItem('from', window.location.pathname);
  const navigate = useNavigate();
  const categoryList = ['전체', '부스', '공연'];

  const [place, setPlace] = useState(categoryList[0]); // 현재 페이지

  const [keyword, setKeyword] = useState('');
  const [reKeyword, setReKeyword] = useState(keyword);

  useEffect(() => {
    const handler = setTimeout(() => {
      setReKeyword(keyword);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  //무한 스크롤 관련 데이터
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '100px'
  });

  const {
    booths,
    totalItem,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useSearchInfiniteQuery(place, reKeyword);

  useEffect(() => {
    if (inView) {
      startTransition(() => {
        fetchNextPage();
      });
    }
  }, [inView]);

  return (
    <>
      <TopWrapper>
        <Back onClick={() => navigate(-1)} />
        <InputBox>
          <Input
            placeholder='검색어를 입력해주세요'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <Search />
        </InputBox>
      </TopWrapper>
      <Wrapper>
        <InfoDiv>
          {totalItem !== 0 && (
            <div className='btnBox'>
              {categoryList.map((item, index) => (
                <PlaceBtn
                  key={index}
                  onClick={() => setPlace(item)}
                  color={place === item ? 'green' : ''}
                >
                  {item}
                </PlaceBtn>
              ))}
            </div>
          )}
        </InfoDiv>
        <ResultDiv>
          {totalItem !== 0 ? (
            <>
              <TotalBooth>총 {totalItem}개의 부스</TotalBooth>
              <div className='infiniteBox'>
                {booths.map(item => (
                  <ScrapCard key={item.id} item={item} />
                ))}
              </div>
              {hasNextPage &&
                (isFetchingNextPage ? (
                  <ScrapSkeleton />
                ) : (
                  <Observer ref={ref} />
                ))}
            </>
          ) : (
            <>
              <div className='no-result' />
              <Info />
              <span className='resultspan'>
                {'검색결과를\n찾을 수 없어요😱'}
              </span>
            </>
          )}
        </ResultDiv>
      </Wrapper>
    </>
  );
};

export default SearchPage;

const TopWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  flex-shrink: 0;
  background-color: #fff;
  z-index: 99;

  gap: 0.94rem;

  @media (min-width: 576px) {
    width: 24.375rem;
    margin: 0 auto;
  }

  div {
    margin: 2.5rem 1.25rem 0.31rem auto;
  }
`;

const Back = styled(BackIcon)`
  margin: 3.56rem auto 1.44rem 1.25rem;
  cursor: pointer;
`;

const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: max-content;

  padding: 0.5625rem 0rem 0.5rem;
  margin-bottom: 0.5625rem;

  border-bottom: 1px solid #000;
`;

const Input = styled.input`
  width: 100%;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 133.333% */
  letter-spacing: -0.03125rem;

  &::placeholder {
    color: var(--gray04, #c1d9cc);
  }
`;

const Search = styled(SearchIcon)`
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding: 0 1.25rem;
`;

const InfoDiv = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
  top: 6.5rem;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  padding: 0 0;
  background-color: #fff;
  width: calc(100% + 1.06rem * 2);

  .btnBox {
    display: flex;
    gap: 0.62rem;
    padding: 0 0 0.6rem;
  }
`;

const PlaceBtn = styled(CommonBtn)`
  cursor: pointer;
`;

const TotalBooth = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  color: var(--gray05, #8e8e8e);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.03125rem;

  margin: 0.33rem 0 0.75rem;
`;

const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 0 3rem;

  .resultspan {
    white-space: pre-line;
    color: var(--green02, #03d664);
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .infiniteBox {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.875rem 0.625rem;
  }

  .no-result {
    margin-top: 20vh;
  }
`;

const Observer = styled.div`
  width: 80vw;
  height: 40px;
`;
