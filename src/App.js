import React from 'react';
import GlobalStyles from './statics/styles/GlobalStyle';

import BoothEditPage from './pages/AdminEditPage/BoothEditPage';
import MenuEditPage from './pages/AdminEditPage/MenuEditPage';
import MenuEditDetailPage from './pages/AdminEditPage/MenuEditDetailPage';
import MenuAddPage from './pages/AdminEditPage/MenuAddPage';
import MakersPage from './pages/Makerspage/Makerspage';

function App() {
  return (
    <>
      <GlobalStyles />
      <MenuEditPage />
      <MakersPage />
      <GlobalStyles />
      <BoothEditPage />
      <MenuEditDetailPage />
      <MenuAddPage />
    </>
  );
}

export default App;
