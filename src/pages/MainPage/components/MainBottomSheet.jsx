import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useDragControls } from 'framer-motion';

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
    path: '/notice'
  },
  {
    id: 4,
    title: '축제 일정\n보러가기',
    guide: '3일 간의 일정을\n확인해 보세요',
    image: num4,
    path: '/program'
  },
  {
    id: 5,
    title: '주요 시설\n위치찾기',
    guide: '쓰레기통과 그릇 반납\n장소 위치를 확인해요',
    image: num7,
    path: '/facility'
  },
  {
    id: 6,
    title: '배리어프리\n확인하기',
    guide: '배리어프리 정보를\n확인해 보세요',
    image: num8,
    path: '/barrierfree'
  },
  {
    id: 7,
    title: '우리 학교\n대동제 소개',
    guide: '우리 학교의\n대동제를 알아봐요',
    image: num5,
    path: '/about'
  },
  {
    id: 8,
    title: '만든이들',
    guide: '대동제 운영에\n참여한 사람들이에요',
    image: num6,
    path: '/makers'
  }
];

const MainBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dragControls = useDragControls();
  const animateState = isOpen ? 'opened' : 'closed';

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('bottomSheetContainer').style.overflowY = isOpen
        ? 'scroll'
        : 'none';
    }, 300);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleDragEnd = (event, info) => {
    const offsetThreshold = 150;
    const deltaThreshold = 5;
    const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
    const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;
    const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

    if (!isOverThreshold) return;

    const newIsOpened = info.offset.y < 0;
    setIsOpen(newIsOpened);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <ToggleButton onClick={handleCloseModal}>
          나의 스크랩북 열기
        </ToggleButton>
      )}
      <BottomSheetContainer
        id='bottomSheetContainer'
        initial='closed'
        animate={animateState}
        variants={{
          opened: { top: `10rem` },
          closed: { top: '44rem' }
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
        drag='y'
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <Wrapper onPointerDown={e => dragControls.start(e)}>
          <HandlerContainer />
          <BoxContainer>
            {BoxList.map(item => (
              <MainBox key={item.id} item={item} />
            ))}
          </BoxContainer>
        </Wrapper>
      </BottomSheetContainer>
    </>
  );
};

export default MainBottomSheet;

const BottomSheetContainer = styled(motion.div)`
  position: absolute;
  z-index: 150;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  border-radius: 1.875rem 1.875rem 0rem 0rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem 1.875rem 0rem 0rem;
  border: 1px solid var(--gray04, #c1d9cc);
  background: var(--wh01, #fff);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HandlerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 0 1.0625rem 1.875rem;
  gap: 0.875rem 0.625rem;
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
