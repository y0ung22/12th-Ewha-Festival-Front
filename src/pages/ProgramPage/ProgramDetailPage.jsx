import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import DetailBanner from '../DetailPage/components/DetailBanner';
import DetailInfo from '../DetailPage/components/DetailInfo';

import { GetTFBoothDetail } from '../../api/tf';

const ProgramDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [boothData, setBoothData] = useState();

  useEffect(() => {
    GetTFBoothDetail(id)
      .then(res => setBoothData(res))
      .catch(error => {
        if (error.response && error.response.status === 404) {
          navigate(-1);
        }
      });
  }, []);

  const from = sessionStorage.getItem('tf-booth-from') ?? '/program';

  return (
    <>
      <Wrapper>
        <TopBar backLink={from} />
        <Container>
          {boothData && (
            <>
              <DetailBanner b={boothData} program={true} />
              <DetailInfo b={boothData} program={true} />
            </>
          )}
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
