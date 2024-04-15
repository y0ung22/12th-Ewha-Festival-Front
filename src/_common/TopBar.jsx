import React, { useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';
import { ReactComponent as LogoGreen } from '../assets/icons/LiberEwha-green.svg';
import { ReactComponent as LogoWhite } from '../assets/icons/LiberEwha-white.svg';

import Sidebar from './Sidebar';

const TopBar = ({ isMenu = false, isWhite = false, backLink }) => {
  // const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleBackClick = () => {
    // backLink ? navigate(backLink) : navigate(-1);
  };

  return (
    <>
      <Wrapper>
        {isMenu ? (
          <Menu onClick={() => setSidebarOpen(true)} />
        ) : (
          <Back onClick={handleBackClick} />
        )}
        <div>{isWhite ? <LogoWhite /> : <LogoGreen />}</div>
      </Wrapper>
      {isSidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
    </>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 104px;
  flex-shrink: 0;

  div {
    margin: 61px 19px 23px auto;
  }
`;

const Menu = styled(MenuIcon)`
  margin: 60px auto 26px 20px;
`;

const Back = styled(BackIcon)`
  margin: 57px auto 23px 20px;
`;
