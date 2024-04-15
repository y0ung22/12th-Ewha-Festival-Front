import styled from 'styled-components';

import MainBox from './MainBox';

//images
import num1 from '../images/main-1.png';
import num2 from '../images/main-2.png';
import num3 from '../images/main-3.png';
import num4 from '../images/main-4.png';
import num5 from '../images/main-5.png';
import num6 from '../images/main-6.png';
import num7 from '../images/main-7.png';

const BoxList = [
  {
    id: 1,
    title: '부스 목록\n보러가기',
    guide: '올해 꼭 가야하는\n부스를 찾아봐요',
    image: num1,
    path: '/'
  },
  {
    id: 2,
    title: '공연 목록\n보러가기',
    guide: '멋진 공연을\n놓치지 마세요',
    image: num2,
    path: '/'
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
    title: '우리 학교\n대동제 소개',
    guide: '올해 꼭 가야하는\n부스를 찾아봐요',
    image: num5,
    path: '/'
  },
  {
    id: 6,
    title: '만든이들',
    guide: '대동제 사이트를\n만든이들',
    image: num6,
    path: '/'
  },
  {
    id: 7,
    title: '쓰레기통\n위치찾기',
    guide: '쓰레기통은\n어디에?!',
    image: num7,
    path: '/'
  }
];

const MainBottomSheet = () => {
  return (
    <Wrapper>
      {BoxList.map(item => (
        <MainBox key={item.id} item={item}></MainBox>
      ))}
    </Wrapper>
  );
};

export default MainBottomSheet;

const Wrapper = styled.div`
  position: relative;
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
