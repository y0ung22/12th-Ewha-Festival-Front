import styled from 'styled-components';

import { ReactComponent as ScrapOff } from '../../../assets/icons/scrap-off.svg';
import { ReactComponent as ScrapOn } from '../../../assets/icons/scrap-on.svg';

const ScrapCard = ({ item }) => {
  return (
    // <Card>
    //   {item.is_liked ? <ScrapOn /> : <ScrapOff />}
    //   <div>
    //     <span>{item.name}</span>
    //     <span>{item.info}</span>
    //   </div>
    // </Card>
    <Card>
      {true ? <ScrapOn /> : <ScrapOff />}
      <div>
        <span>부스명입니다부스명입니다</span>
        <span>생활관 . 음식</span>
      </div>
    </Card>
  );
};

export default ScrapCard;

const Card = styled.div`
  position: relative;
  width: 170px;
  height: 197px;
  flex-shrink: 0;
  border-radius: 20px;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  svg {
    position: absolute;
    top: 17px;
    right: 14px;
  }

  div {
    position: absolute;
    left: 17px;
    right: 17px;
    bottom: 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    color: var(--wh);
    font-size: 24px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.3px;

    span:nth-child(1) {
      width: 9rem;
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
  }
`;
