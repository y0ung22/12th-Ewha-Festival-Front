import React, { useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';

const TopBar = ({ isMenu = false, backLink }) => {
  // const navigate = useNavigate();

  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const handleBackClick = () => {
    // backLink ? navigate(backLink) : navigate(-1);
  };

  return (
    <>
      <Wrapper>
        {isMenu ? (
          <Menu onClick={() => setSideBarOpen(true)} />
        ) : (
          <Back onClick={handleBackClick} />
        )}
        <span>2024 이화여대 대동제</span>
      </Wrapper>
      {/* {isSideBarOpen && <SideBar setSideBarOpen={setSideBarOpen} />} */}
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

  span {
    margin: 61px 19px 23px auto;
    color: var(--bk01);
    text-align: right;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
`;

const Menu = styled(MenuIcon)`
  margin: 60px auto 26px 20px;
`;

const Back = styled(BackIcon)`
  margin: 57px auto 23px 20px;
`;
