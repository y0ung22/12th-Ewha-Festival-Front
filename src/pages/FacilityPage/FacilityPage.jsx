import { S } from './components/Facility.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import CampusMap from './components/CampusMap';

const FacilityPage = () => {
  return (
    <S.Wrapper>
      <TopBar isMenu={true} />
      <S.Container>
        <CampusMap />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default FacilityPage;
