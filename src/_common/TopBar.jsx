import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';
import { ReactComponent as LogoGreen } from '../assets/icons/LiberEwha-green.svg';
import { ReactComponent as LogoWhite } from '../assets/icons/LiberEwha-white.svg';

import Sidebar from './Sidebar';

const TopBar = ({
  isMenu = false,
  isMain = false,
  isAbout = false,
  isWhite = false,
  backLink
}) => {
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleBackClick = () => {
    backLink ? navigate(backLink) : navigate(-1);
  };

  return (
    <>
      <Wrapper
        style={{
          backgroundColor: isAbout
            ? 'rgba(255, 255, 255, 0.4)'
            : !isMain && 'var(--wh)',
          backdropFilter: isAbout && 'blur(2px)'
        }}
      >
        {isMenu ? (
          <Menu
            onClick={() => setSidebarOpen(true)}
            fill={isMain ? '#F7F7F7' : '#8E8E8E'}
          />
        ) : (
          <Back onClick={handleBackClick} />
        )}
        <div onClick={() => navigate('/')}>
          {isWhite ? <LogoWhite /> : <LogoGreen />}
        </div>
      </Wrapper>
      {isSidebarOpen && <Sidebar {...{ isSidebarOpen, setSidebarOpen }} />}
    </>
  );
};

export default React.memo(TopBar);

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.5rem;
  flex-shrink: 0;
  z-index: 99;

  @media (min-width: 576px) {
    width: 24.375rem;
    margin: 0 auto;
  }

  div {
    margin: 3.81rem 1.19rem 1.44rem auto;
  }
`;

const Menu = styled(MenuIcon)`
  margin: 3.75rem auto 1.63rem 1.25rem;
  cursor: pointer;
`;

const Back = styled(BackIcon)`
  margin: 3.56rem auto 1.44rem 1.25rem;
  cursor: pointer;
`;
