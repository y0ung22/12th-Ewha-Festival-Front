import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { S } from './components/Detail.style';

import TopBar from '../../_common/TopBar';
import DetailBanner from './components/DetailBanner';
import DetailInfo from './components/DetailInfo';
import DetailMenu from './components/DetailMenu';
import DetailComment from './components/DetailComment';

import { GetBooth } from '../../api/booth';

const DetailPage = () => {
  const { id } = useParams();
  const [boothData, setBoothData] = useState();
  const [render, setRender] = useState(1);
  const rendering = () => setRender(render + 1);

  useEffect(() => {
    GetBooth(id)
      .then(res => setBoothData(res))
      .catch();
  }, [render]);

  return (
    <S.Wrapper>
      <TopBar />
      <S.Container>
        {boothData && (
          <>
            <DetailBanner b={boothData} />
            <DetailInfo b={boothData} />
            {boothData.performance || <DetailMenu m={boothData.menus} />}
            <DetailComment
              c={boothData.comments}
              bId={boothData.id}
              rendering={rendering}
            />
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default DetailPage;
