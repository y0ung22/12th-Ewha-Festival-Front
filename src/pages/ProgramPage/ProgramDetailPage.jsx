import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import DetailBanner from '../DetailPage/components/DetailBanner';
import DetailInfo from '../DetailPage/components/DetailInfo';

const ProgramDetailPage = () => {
  const [boothData, setBoothData] = useState({
    days: [
      {
        date: 8,
        start_time: '10:00',
        end_time: '10:00'
      },
      {
        date: 9,
        start_time: '10:00',
        end_time: '10:00'
      },
      {
        date: 10,
        start_time: '10:00',
        end_time: '10:00'
      }
    ]
  });

  return (
    <>
      <Wrapper>
        <TopBar />
        <Container>
          <DetailBanner b={boothData} program={true} />
          <DetailInfo b={boothData} program={true} />
        </Container>
      </Wrapper>
    </>
  );
};

export default ProgramDetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--wh);
`;

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
