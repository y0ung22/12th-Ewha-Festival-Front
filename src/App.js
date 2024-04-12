import React from 'react';
import GlobalStyles from './statics/styles/GlobalStyle';

import BoothEditPage from './pages/AdminEditPage/BoothEditPage';
import MakersPage from './pages/Makerspage/Makerspage';

function App() {
  return (
    <>
      <GlobalStyles />
      <BoothEditPage />
      <MakersPage />
    </>
  );
}

export default App;
