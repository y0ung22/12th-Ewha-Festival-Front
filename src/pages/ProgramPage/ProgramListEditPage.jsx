import { S } from './components/Program.style';

import TopBar from '../../_common/TopBar';
import Footer from '../../_common/Footer';
import TFBoothList from './components/TFBoothList';

const ProgramListEditPage = () => {
  return (
    <>
      <S.Wrapper>
        <TopBar isMenu={true} />
        <S.Container>
          <TFBoothList />
        </S.Container>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default ProgramListEditPage;
