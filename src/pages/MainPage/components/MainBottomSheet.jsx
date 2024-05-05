import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation, useDragControls } from 'framer-motion';

import MainBox from './MainBox';
import Footer from '../../../_common/Footer';

//images
import num1 from '../images/main-1.png';
import num2 from '../images/main-2.png';
import num3 from '../images/main-3.png';
import num4 from '../images/main-4.png';
import num5 from '../images/main-5.png';
import num6 from '../images/main-6.png';
import num7 from '../images/main-7.png';
import num8 from '../images/main-8.png';

const BoxList = [
  {
    id: 1,
    title: '부스 목록\n보러가기',
    guide: '올해 꼭 가야하는\n부스를 찾아봐요',
    image: num1,
    path: '/boothlist'
  },
  {
    id: 2,
    title: '공연 목록\n보러가기',
    guide: '멋진 공연을\n놓치지 마세요',
    image: num2,
    path: '/perflist'
  },
  {
    id: 3,
    title: 'TF팀 공지\n보러가기',
    guide: '실시간 공지를\n볼 수 있어요',
    image: num3,
    path: '/'
  },
  {
    id: 4,
    title: '축제 일정\n보러가기',
    guide: '3일 간의 일정을\n확인해 보세요',
    image: num4,
    path: '/'
  },
  {
    id: 5,
    title: '쓰레기통\n위치찾기',
    guide: '쓰레기통 위치를\n확인해 보세요',
    image: num7,
    path: '/'
  },
  {
    id: 6,
    title: '배리어프리\n확인하기',
    guide: '배리어프리 정보를\n확인해 보세요',
    image: num8,
    path: '/'
  },
  {
    id: 7,
    title: '우리 학교\n대동제 소개',
    guide: '우리 학교의\n대동제를 알아봐요',
    image: num5,
    path: '/'
  },
  {
    id: 8,
    title: '만든이들',
    guide: '대동제 운영에\n참여한 사람들이에요',
    image: num6,
    path: '/'
  }
];

const MainBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const dragControls = useDragControls();

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
    controls.start(isOpen ? 'closed' : 'opened');
    window.scrollTo(0, 0);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.y < 0) {
      setIsOpen(true);
      window.scrollTo(0, 0);
      controls.start('opened');
    } else {
      setIsOpen(false);
      controls.start('closed');
    }
  };

  return (
    <>
      {isOpen && (
        <ToggleButton onClick={toggleBottomSheet}>
          나의 스크랩북 열기
        </ToggleButton>
      )}
      <motion.div
        initial='closed'
        animate={controls}
        variants={{
          opened: { y: '-35.5rem' },
          closed: { y: '0%' }
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        drag='y'
        dragControls={dragControls}
        dragConstraints={{ top: -300, bottom: 0 }}
        onDragEnd={handleDragEnd}
        style={{ zIndex: 10, width: '100%' }}
      >
        <Wrapper>
          {BoxList.map(item => (
            <MainBox key={item.id} item={item}></MainBox>
          ))}
        </Wrapper>
        <Footer />
      </motion.div>
    </>
  );
};

export default MainBottomSheet;

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 1.875rem 1.0625rem;
  gap: 0.875rem 0.625rem;
  border-radius: 1.875rem 1.875rem 0rem 0rem;
  border: 1px solid var(--gray04, #c1d9cc);
  background: var(--wh01, #fff);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 5.5rem;
  z-index: 20;

  display: inline-flex;
  padding: 0.625rem 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 1.875rem;
  border: 1px solid var(--gray02, #f2f2f2);
  background: var(--wh, #fff);

  color: var(--green02, #03d664);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 117.647% */
  letter-spacing: -0.03125rem;

  cursor: pointer;
`;
