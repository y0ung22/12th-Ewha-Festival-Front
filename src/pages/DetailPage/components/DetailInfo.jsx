import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorIcon } from '../../../assets/icons/vector.svg';
import { mapData } from './mapData';

const DetailInfo = ({ b, program = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function getImgByLocation(location) {
    const map = mapData.find(item => item.location === location);
    return map ? map.img : null;
  }

  const mapImg = getImgByLocation(b.college);

  return (
    <>
      <Container>
        <div>
          <span>위치</span>
          <div className='column'>
            {program ? (
              <span>{b.place}</span>
            ) : (
              <>
                <span>
                  {b.college} {b.number}
                </span>
                {b.performance || <img src={mapImg} alt='mapImg' />}
              </>
            )}
          </div>
        </div>
        <div>
          <span>운영시간</span>
          <span>
            {program
              ? b.days &&
                b.days.map((day, index) => (
                  <p key={index}>
                    {day.date}일 - {day.start_time} ~ {day.end_time}
                  </p>
                ))
              : b.days && b.days.map((day, index) => <p key={index}>{day}</p>)}
          </span>
        </div>
        <div>
          <span>소개글</span>
          <span className={`${program || isExpanded || 'hidden'}`}>
            {b.description}
          </span>
          {program || (
            <Vector
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            />
          )}
        </div>
      </Container>
      {!program && <GreenLine />}
    </>
  );
};

export default DetailInfo;

const Container = styled.div`
  margin-top: 1.44rem;
  margin-bottom: 2.19rem;
  display: flex;
  flex-direction: column;
  gap: 1.0625rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    gap: 1.125rem;

    color: var(--bk01);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: -0.03125rem;
    white-space: pre-line;

    span:nth-child(1) {
      width: 3.4375rem;
      flex-shrink: 0;
      font-weight: 600;
    }

    .hidden {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .column {
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        font-weight: 400;
      }

      img {
        width: 100%;
      }
    }
  }
`;

const Vector = styled(VectorIcon)`
  margin-left: auto;
  width: 1.1875rem;
  height: 1.1875rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
`;

const GreenLine = styled.div`
  margin-left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  background: #f2f2f2;
`;
