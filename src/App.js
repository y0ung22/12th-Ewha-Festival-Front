import React from 'react';
import GlobalStyles from './statics/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginKakaoPage from './pages/LoginPage/LoginKakaoPage';
import SignupKakaoPage from './pages/SignupPage/SignupKakaoPage';
import BoothEditPage from './pages/AdminEditPage/BoothEditPage';

import MainPage from './pages/MainPage/MainPage';
import BoothMainPage from './pages/MainPage/BoothMainPage';
import PerfMainPage from './pages/MainPage/PerfMainPage';
import TFMainPage from './pages/MainPage/TFMainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import BoothListPage from './pages/ListPage/BoothListPage';
import PerfListPage from './pages/ListPage/PerfListPage';

import MenuEditPage from './pages/AdminEditPage/MenuEditPage';
import MenuEditDetailPage from './pages/AdminEditPage/MenuEditDetailPage';
import MenuAddPage from './pages/AdminEditPage/MenuAddPage';
import MakersPage from './pages/Makerspage/Makerspage';

import AboutPage from './pages/AboutPage/AboutPage';
import DetailPage from './pages/DetailPage/DetailPage';

import NoticeListPage from './pages/NoticePage/NoticeListPage';
import NoticeDetailPage from './pages/NoticePage/NoticeDetailPage';
import NoticeWritePage from './pages/NoticePage/NoticeWritePage';
import NoticeEditPage from './pages/NoticePage/NoticeEditPage';

import MyPage from './pages/MyPage/MyPage';
import FacilityPage from './pages/FacilityPage/FacilityPage';
import ProgramListPage from './pages/ProgramPage/ProgramListPage';
import ProgramDetailPage from './pages/ProgramPage/ProgramDetailPage';
import ProgramListEditPage from './pages/ProgramPage/ProgramListEditPage';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path={'/login'} element={<LoginPage />}></Route>
            <Route path={'/signup'} element={<SignupPage />}></Route>
            <Route
              path={'/accounts/kakao/callback'}
              element={<LoginKakaoPage />}
            ></Route>
            <Route path={'/signupkakao'} element={<SignupKakaoPage />}></Route>
            <Route path={'/detail/:id'} element={<DetailPage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/facility'} element={<FacilityPage />} />
            <Route path={'/my'} element={<MyPage />} />

            <Route path={'/'} element={<MainPage />} />
            <Route path={'/booth-main'} element={<BoothMainPage />} />
            <Route path={'/perf-main'} element={<PerfMainPage />} />
            <Route path={'/admin-main'} element={<TFMainPage />} />
            <Route path={'/boothlist'} element={<BoothListPage />} />
            <Route path={'/perflist'} element={<PerfListPage />} />
            <Route path={'/search'} element={<SearchPage />} />

            <Route path={'/boothedit'} element={<BoothEditPage />} />
            <Route path={'/menuedit'} element={<MenuEditPage />} />
            <Route path={'/menuedit/:id'} element={<MenuEditDetailPage />} />
            <Route path={'/menuadd'} element={<MenuAddPage />} />

            <Route path={'/notice'} element={<NoticeListPage />} />
            <Route path={'/notice/:id'} element={<NoticeDetailPage />} />
            <Route path={'/notice/write'} element={<NoticeWritePage />} />
            <Route path={'/notice/edit'} element={<NoticeEditPage />} />

            <Route path={'/program'} element={<ProgramListPage />} />
            <Route path={'/program/:id'} element={<ProgramDetailPage />} />
            <Route path={'/programedit'} element={<ProgramListEditPage />} />
            <Route path={'/makers'} element={<MakersPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
