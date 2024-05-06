import styled from 'styled-components';

import { ReactComponent as Scrap } from '../../../assets/icons/save-add.svg';

const MoreScapBox = ({ size }) => {
  return (
    <Card size={size}>
      <Scrap />
      <span>{'더 많은 스크랩으로\n채워주세요'}</span>
    </Card>
  );
};

export default MoreScapBox;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  overflow: hidden;

  @media (max-width: 380px) {
    aspect-ratio: 9.125 / 11.375;
    width: 100%;
    height: 100%;
  }

  width: 9.125rem;
  height: 11.375rem;
  flex-shrink: 0;

  border-radius: 0.9375rem;
  border: 1px solid rgba(251, 251, 251, 0.3);
  background: linear-gradient(336deg);
  backdrop-filter: blur(15px);

  svg {
    /* position: absolute;
    top: 3rem;
    right: 3.31rem; */
  }

  span {
    color: var(--wh, #fff);
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 0.9375rem; /* 125% */
    letter-spacing: -0.03125rem;
    white-space: pre-line;
  }
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
