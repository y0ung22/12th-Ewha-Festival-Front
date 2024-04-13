import React from 'react';
import GlobalStyles from './statics/styles/GlobalStyle';

import BoothEditPage from './pages/AdminEditPage/BoothEditPage';
import MenuAddPage from './pages/AdminEditPage/MenuAddPage';
import MakersPage from './pages/Makerspage/Makerspage';

function App() {
  return (
    <>
      <GlobalStyles />
      <BoothEditPage />
      <MenuAddPage />
      <MakersPage />
    </>
  );
}

export default App;
