import React from 'react';
import GlobalStyles from './statics/styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { RecoilRoot } from 'recoil';
import TFRoute from './api/auth';
import ReactGA from 'react-ga';

import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginKakaoPage from './pages/LoginPage/LoginKakaoPage';
import SignupKakaoPage from './pages/SignupPage/SignupKakaoPage';

import BoothEditPage from './pages/AdminEditPage/BoothEditPage';

import NavigateMainPage from './pages/MainPage/NavigateMainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import BoothListPage from './pages/ListPage/BoothListPage';
import PerfListPage from './pages/ListPage/PerfListPage';

import MenuEditPage from './pages/AdminEditPage/MenuEditPage';
import MenuEditDetailPage from './pages/AdminEditPage/MenuEditDetailPage';
import MenuAddPage from './pages/AdminEditPage/MenuAddPage';
import PerfEditPage from './pages/AdminEditPage/PerfEditPage';
import TfEditPage from './pages/AdminEditPage/TfEditPage';
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
import BarrierFreePage from './pages/BarrierFreePage/BarrierFreePage';

const gaTrackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
ReactGA.initialize(gaTrackingId);

const history = createBrowserHistory();
history.listen(response => {
  ReactGA.set({ page: response.location.pathname });
  ReactGA.pageview(response.location.pathname);
});

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
            <Route path={'/barrierfree'} element={<BarrierFreePage />} />
            <Route path={'/facility'} element={<FacilityPage />} />
            <Route path={'/my'} element={<MyPage />} />

            {/* 메인 & 목록 & 검색 */}
            <Route path={'/'} element={<NavigateMainPage />} />
            <Route path={'/boothlist'} element={<BoothListPage />} />
            <Route path={'/perflist'} element={<PerfListPage />} />
            <Route path={'/search'} element={<SearchPage />} />

            {/* 부스 & 공연 & 메뉴 수정 및 추가 */}
            <Route path={'/boothedit/:id'} element={<BoothEditPage />} />
            <Route path={'/perfedit/:id'} element={<PerfEditPage />} />
            <Route path={'/tfedit/:id'} element={<TfEditPage />} />
            <Route path={'/menuedit/:id'} element={<MenuEditPage />} />
            <Route
              path={'/menuedit/:boothId/:menuId'}
              element={<MenuEditDetailPage />}
            />
            <Route path={'/menuadd/:id'} element={<MenuAddPage />} />

            {/* TF 공지사항 */}
            <Route path={'/notice'} element={<NoticeListPage />} />
            <Route path={'/notice/:id'} element={<NoticeDetailPage />} />
            <Route
              path={'/notice/write'}
              element={
                <TFRoute>
                  <NoticeWritePage />
                </TFRoute>
              }
            />
            <Route
              path={'/notice/edit'}
              element={
                <TFRoute>
                  <NoticeEditPage />
                </TFRoute>
              }
            />

            {/* 축제 일정 및 TF 부스 */}
            <Route path={'/program'} element={<ProgramListPage />} />
            <Route path={'/program/:id'} element={<ProgramDetailPage />} />
            <Route
              path={'/tfedit'}
              element={
                <TFRoute>
                  <ProgramListEditPage />
                </TFRoute>
              }
            />
            <Route path={'/makers'} element={<MakersPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
