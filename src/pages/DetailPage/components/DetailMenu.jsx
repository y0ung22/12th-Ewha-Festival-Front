import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { S } from './Detail.style';
import { Swiper } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import MenuCard from './MenuCard';
import MenuPagenation from './MenuPagenation';

const DetailMenu = ({ m }) => {
  const [slides, setSlides] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const chunkedSlides = chunkArray(m, 6);
      setSlides(chunkedSlides);
    };

    fetchData();
  }, [m]);

  useEffect(() => {
    if (slides.length > 0) {
      swiperRef.current = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'on',
          clickable: true
        },
        on: {
          slideChange: () => {
            setCurrentPage(swiperRef.current.activeIndex);
          }
        }
      });
    }
  }, [slides]);

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const handlePaginationClick = index => {
    swiperRef.current.slideTo(index);
  };

  return (
    <>
      <S.SubTitle>메뉴</S.SubTitle>
      <Container>
        <SwiperContainer className='swiper-container'>
          <div className='swiper-wrapper grid-container'>
            {slides.map((chunk, index) => (
              <div className='swiper-slide' key={index}>
                {chunk.map((slide, slideIndex) => (
                  <MenuCard key={slideIndex} item={slide} />
                ))}
              </div>
            ))}
          </div>
        </SwiperContainer>
        <MenuPagenation
          totalSlides={Math.ceil(m.length / 6)}
          currentPage={currentPage}
          onPageChange={handlePaginationClick}
        />
      </Container>
    </>
  );
};

export default DetailMenu;

const Container = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: auto;
`;

const SwiperContainer = styled.div`
  width: 350px;

  @media (max-width: 370px) {
    width: 100%;
  }

  .swiper-slide {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.62rem;
    row-gap: 0.88rem;
  }

  .swiper-pagination {
    position: static;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
  }

  .swiper-pagination-bullet span {
    background-color: #007bff;
  }
`;
