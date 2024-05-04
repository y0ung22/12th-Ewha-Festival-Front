import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';
import { SignupState } from '../../assets/recoil/apiRecoil';

import { KakaoLogin } from '../../api/auth';

const LoginKakaoPage = () => {
  const urlParams = new URL(window.location.toString()).searchParams;
  const AUTHORIZATION_CODE = urlParams.get('code');
  const setUsername = useSetRecoilState(SignupState);

  const getData = async () => {
    const response = await KakaoLogin(AUTHORIZATION_CODE, setUsername);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default LoginKakaoPage;
