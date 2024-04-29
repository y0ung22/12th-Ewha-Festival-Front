import styled from 'styled-components';

import { ReactComponent as ScrapOff } from '../assets/icons/scrap-off.svg';
import { ReactComponent as ScrapOn } from '../assets/icons/scrap-on.svg';

const ScrapCard = ({ item, size }) => {
  return (
    // <Card>
    //   {item.is_liked ? <ScrapOn /> : <ScrapOff />}
    //   <div>
    //     <span>{item.name}</span>
    //     <span>{item.info}</span>
    //   </div>
    //   {item.opened  && <ClosedSign>운영종료</ClosedSign>}
    // </Card>
    <Card size={size}>
      {true ? <ScrapOn /> : <ScrapOff />}
      <SpanDiv size={size}>
        <span>부스명입니다부스명입니다</span>
        <span>생활관 . 음식</span>
      </SpanDiv>
      {true && <ClosedSign>운영종료</ClosedSign>}
    </Card>
  );
};

export default ScrapCard;

const Card = styled.div`
  position: relative;
  width: ${props => (props.size === 'small' ? '9.125rem' : '170px')};
  height: ${props => (props.size === 'small' ? '11.375rem' : '197px')};
  flex-shrink: 0;
  border-radius: ${props => (props.size === 'small' ? '0.9375rem' : '20px')};
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
  overflow: hidden;

  svg {
    position: absolute;
    top: 17px;
    right: 14px;
  }
`;

const SpanDiv = styled.div`
  position: absolute;
  left: ${props => (props.size === 'small' ? '0.75rem' : '17px')};
  right: 17px;
  bottom: ${props => (props.size === 'small' ? '0.62rem' : '14px')};
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: var(--wh);
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.3px;

  span:nth-child(1) {
    width: ${props => (props.size === 'small' ? '7.8rem' : '9rem')};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    font-size: 1rem;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
  }
`;

const ClosedSign = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: var(--green05, rgba(0, 241, 111, 0.4));
  color: var(--wh);

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
`;
