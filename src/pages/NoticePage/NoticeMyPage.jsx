import React from 'react';
import styled from 'styled-components';

import TopBar from '../../_common/TopBar';
import ListBox from './components/ListBox';
import Footer from '../../_common/Footer';

const NoticeListPage = () => {
  return (
    <>
      <Wrapper>
        <TopBar />
        <MainText>내가 올린 글</MainText>
        <List>
          <ListBox />
          <ListBox />
        </List>
        {/* <Footer /> */}
      </Wrapper>
    </>
  );
};

export default NoticeListPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MainText = styled.div`
  margin-top: 37px;
  margin-bottom: 30px;

  color: var(--bk01);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.5px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 0 20px;
`;
