import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';

import ProgramList from './components/ProgramList';
import TFBoothList from './components/TFBoothList';

const ProgramListPage = () => {
  return (
    <S.Wrapper>
      <TopBar isMenu={true} />
      <S.Container>
        <ProgramList />
        <TFBoothList />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default ProgramListPage;
