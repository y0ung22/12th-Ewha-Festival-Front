import React, { useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';
import { ReactComponent as LogoGreen } from '../assets/icons/LiberEwha-green.svg';
import { ReactComponent as LogoWhite } from '../assets/icons/LiberEwha-white.svg';

const TopBar = ({
  isMenu = false,
  isMain = false,
  isWhite = false,
  backLink
}) => {
  // const navigate = useNavigate();

  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const handleBackClick = () => {
    // backLink ? navigate(backLink) : navigate(-1);
  };

  return (
    <>
      <Wrapper>
        {isMenu ? (
          <Menu
            onClick={() => setSideBarOpen(true)}
            fill={isMain ? '#F7F7F7' : '#8E8E8E'}
          />
        ) : (
          <Back onClick={handleBackClick} />
        )}
        <div>{isWhite ? <LogoWhite /> : <LogoGreen />}</div>
      </Wrapper>
      {/* {isSideBarOpen && <SideBar setSideBarOpen={setSideBarOpen} />} */}
    </>
  );
};

export default TopBar;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 104px;
  flex-shrink: 0;
  z-index: 99999;

  @media (min-width: 576px) {
    width: 390px;
    margin: 0 auto;
  }

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
