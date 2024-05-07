import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { S } from './components/Detail.style';

import TopBar from '../../_common/TopBar';
import DetailBanner from './components/DetailBanner';
import DetailInfo from './components/DetailInfo';
import DetailMenu from './components/DetailMenu';
import DetailComment from './components/DetailComment';

import { GetBoothDetail } from '../../api/booth';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [boothData, setBoothData] = useState();
  const [render, setRender] = useState(1);
  const rendering = () => setRender(render + 1);

  useEffect(() => {
    GetBoothDetail(id)
      .then(res => setBoothData(res))
      .catch(error => {
        if (error.response && error.response.status === 404) {
          navigate(-1);
        }
      });
  }, [id, render]);

  const from = sessionStorage.getItem('from') ?? '/';

  return (
    <S.Wrapper>
      <TopBar backLink={from} />
      <S.Container>
        {boothData && (
          <>
            <DetailBanner b={boothData} rendering={rendering} />
            <DetailInfo b={boothData} />
            {boothData.performance || <DetailMenu m={boothData.menus} />}
            <DetailComment bId={boothData.id} />
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default DetailPage;
