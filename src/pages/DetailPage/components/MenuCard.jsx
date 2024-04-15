import styled from 'styled-components';

import { ReactComponent as ScrapOff } from '../../../assets/icons/scrap-off.svg';
import { ReactComponent as ScrapOn } from '../../../assets/icons/scrap-on.svg';

const MenuCard = ({ item }) => {
  return (
    <Card>
      {item.is_liked ? <ScrapOn /> : <ScrapOff />}
      <div>
        <span>{item.name}</span>
        <span>{item.price}원</span>
      </div>
    </Card>
  );
};

export default MenuCard;

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

    span:nth-child(2) {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.5px;
    }
  }
`;
