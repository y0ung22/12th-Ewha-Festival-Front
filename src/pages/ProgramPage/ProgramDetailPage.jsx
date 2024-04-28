import React from 'react';
import styled from 'styled-components';
import TopBar from '../../_common/TopBar';
import { programData } from './components/mock';
import ProgramBanner from './components/ProgramBanner';
import ProgramInfo from './components/ProgramInfo';

const ProgramDetailPage = () => {
  return (
    <>
      <Wrapper>
        <TopBar />
        <Container>
          <ProgramBanner b={programData} />
          <ProgramInfo b={programData} />
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
