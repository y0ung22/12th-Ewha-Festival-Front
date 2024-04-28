import React, { useState } from 'react';
import { S } from './Detail.style';

import TopBar from '../../_common/TopBar';
import DetailBanner from './components/DetailBanner';
import DetailInfo from './components/DetailInfo';
import DetailMenu from './components/DetailMenu';
import DetailComment from './components/DetailComment';

const DetailPage = () => {
  const [boothData, setBoothData] = useState({
    day: [
      '10일 수요일 - 10:00~15:00',
      '11일 목요일 - 10:00~15:00',
      '12일 금요일 - 10:00~15:00'
    ],
    menus: [
      {
        id: 1,
        name: '일이',
        img: '메뉴 이미지 url!!',
        price: 2000,
        is_soldout: true,
        is_liked: true
      }
    ],
    comments: [
      {
        id: 6,
        nickname: '나는 관리자',
        content: '내용',
        created_at: '5월 10일 13시 14분',
        mine: false,
        manager: true
      },
      {
        id: 7,
        nickname: '나는 사용자',
        content: '안녕하세요',
        created_at: '5월 11일 10시 20분',
        mine: true,
        manager: false
      }
    ]
  });

  return (
    <S.Wrapper>
      <TopBar />
      <S.Container>
        <DetailBanner b={boothData} />
        <DetailInfo b={boothData} />
        {boothData.performance || <DetailMenu m={boothData.menus} />}
        <DetailComment c={boothData.comments} />
      </S.Container>
    </S.Wrapper>
  );
};

export default DetailPage;
