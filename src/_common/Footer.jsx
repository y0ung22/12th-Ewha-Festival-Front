import React from 'react';
import { styled } from 'styled-components';

//images
import likelion from '../assets/icons/footer-likelion.png';
import instagram from '../assets/icons/footer-instagram.svg';
import github from '../assets/icons/footer-github.svg';

const Footer = () => {
  return (
    <Wrapper>
      <div>멋쟁이 사자처럼 12기 | Likelion Ewha - 12th</div>
      <div>
        <a href='https://linktr.ee/likelion.ewha'>
          <img src={likelion} alt='likelion logo' />
        </a>
        <a
          href='
        https://www.instagram.com/likelion_ewha/ '
        >
          <img src={instagram} alt='instagram logo' />
        </a>
        <a href='https://github.com/EWHA-LIKELION'>
          <img src={github} alt='github logo' />
        </a>
      </div>
      <div>Copyright ⓒ Likelion Ewha 12th. All Rights Reserved.</div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  position: relative;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 158.08px;
  flex-shrink: 0;
  z-index: 99999;

  margin-top: auto;
  transform: translateY(-100%);

  background: #efefef;
  border-top: 1.04px solid #9b9b9b;

  color: #9b9b9b;
  text-align: center;

  div:nth-child(1) {
    margin-top: 20.84px;
    height: 34px;
    font-size: 10.4px;
    font-weight: 500;
    line-height: 16.64px;
  }

  div:nth-child(2) {
    margin-top: 19.16px;
    margin-bottom: 19.37px;
    display: flex;
    gap: 16px;
  }

  div:nth-child(3) {
    font-size: 8.32px;
    font-weight: 300;
    line-height: normal;
  }
`;
