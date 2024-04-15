import React from 'react';
import GlobalStyles from './statics/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import BoothEditPage from './pages/AdminEditPage/BoothEditPage';
import MenuEditPage from './pages/AdminEditPage/MenuEditPage';
import MenuEditDetailPage from './pages/AdminEditPage/MenuEditDetailPage';
import MenuAddPage from './pages/AdminEditPage/MenuAddPage';
import MakersPage from './pages/Makerspage/Makerspage';

import MainPage from './pages/MainPage/MainPage';
import BoothListPage from './pages/ListPage/BoothListPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<LoginPage />}></Route>
          <Route path={'/signup'} element={<SignupPage />}></Route>
          <Route path={'/boothedit'} element={<BoothEditPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
