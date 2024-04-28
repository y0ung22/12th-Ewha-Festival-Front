import React from 'react';
import GlobalStyles from './statics/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SignupKakaoPage from './pages/SignupPage/SignupKakaoPage';
import BoothEditPage from './pages/AdminEditPage/BoothEditPage';

import MenuEditPage from './pages/AdminEditPage/MenuEditPage';
import MenuEditDetailPage from './pages/AdminEditPage/MenuEditDetailPage';
import MenuAddPage from './pages/AdminEditPage/MenuAddPage';
import MakersPage from './pages/Makerspage/Makerspage';

import MainPage from './pages/MainPage/MainPage';
import BoothListPage from './pages/ListPage/BoothListPage';
import SearchPage from './pages/SearchPage/SearchPage';
import DetailPage from './pages/DetailPage/DetailPage';

import NoticeListPage from './pages/NoticePage/NoticeListPage';
import NoticeDetailPage from './pages/NoticePage/NoticeDetailPage';
import NoticeWritePage from './pages/NoticePage/NoticeWritePage';
import NoticeEditPage from './pages/NoticePage/NoticeEditPage';

import MyPage from './pages/MyPage/MyPage';
import FacilityPage from './pages/FacilityPage/FacilityPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<LoginPage />}></Route>
          <Route path={'/signup'} element={<SignupPage />}></Route>
          <Route path={'/signupkakao'} element={<SignupKakaoPage />}></Route>

          <Route path={'/boothedit'} element={<BoothEditPage />}></Route>
          <Route path={'/detail/:id'} element={<DetailPage />} />

          <Route path={'/notice'} element={<NoticeListPage />} />
          <Route path={'/notice/:id'} element={<NoticeDetailPage />} />
          <Route path={'/notice/write'} element={<NoticeWritePage />} />
          <Route path={'/notice/edit'} element={<NoticeEditPage />} />

          <Route path={'/main'} element={<MainPage />} />
          <Route path={'/boothlist'} element={<BoothListPage />} />

          <Route path={'/my'} element={<MyPage />} />
          <Route path={'/facility'} element={<FacilityPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
