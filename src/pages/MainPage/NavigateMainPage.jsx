import { useState, useEffect } from 'react';

import { getCookie } from '../../api/http';

import MainPage from './MainPage';
import BoothMainPage from './BoothMainPage';
import PerfMainPage from './PerfMainPage';
import TFMainPage from './TFMainPage';

import { useRecoilState } from 'recoil';
import { DayState } from '../../assets/recoil/apiRecoil';

const NavigateMainPage = () => {
  const booth = getCookie('booth') === 'true';
  const performance = getCookie('performance') === 'true';
  const tf = getCookie('tf') === 'true';

  //날짜 자동 설정
  const [selectDay, setSelectDay] = useRecoilState(DayState);

  const today = new Date();
  const day = today.getDate();

  if (day < 8) {
    setSelectDay(8);
  } else if (day > 10) {
    setSelectDay(10);
  } else {
    setSelectDay(day);
  }

  if (performance && booth) {
    return <PerfMainPage />;
  } else if (booth && !performance) {
    return <BoothMainPage />;
  } else if (tf) {
    return <TFMainPage />;
  } else {
    return <MainPage />;
  }
};

export default NavigateMainPage;
