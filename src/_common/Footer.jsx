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

export default React.memo(Footer);

const Wrapper = styled.div`
  position: relative;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 9.88rem;
  flex-shrink: 0;
  background: #efefef;
  border-top: 0.065rem solid #9b9b9b;

  color: #9b9b9b;
  text-align: center;

  div:nth-child(1) {
    margin-top: 1.3rem;
    height: 2.125rem;
    font-size: 0.65rem;
    font-weight: 500;
    line-height: 1.04rem;
  }

  div:nth-child(2) {
    margin-top: 1.2rem;
    margin-bottom: 1.21rem;
    display: flex;
    gap: 1rem;
  }

  div:nth-child(3) {
    font-size: 0.52rem;
    font-weight: 300;
    line-height: normal;
  }
`;
