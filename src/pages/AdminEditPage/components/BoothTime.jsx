import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Modal from '../../../_common/Modal';

import check_gray from '../images/check_gray.svg';
import check_green from '../images/check_green.svg';

const BoothTime = ({ onDayEdit, initialTime }) => {
  const defaultDays = [
    { date: 8, day: '수요일' },
    { date: 9, day: '목요일' },
    { date: 10, day: '금요일' }
  ];

  console.log(initialTime);
  const [rows, setRows] = useState(
    defaultDays
      .map(day => {
        const initialData = initialTime.find(
          time => time.date === day.date
        ) || {
          start_time: '',
          end_time: ''
        };
        return {
          ...day,
          ...initialData,
          selected: !!initialData.start_time && !!initialData.end_time
        };
      })
      .map(day => ({
        ...day,
        start_time: day.start_time || '',
        end_time: day.end_time || ''
      }))
  );
  console.log(rows);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 유효한 입력 형식인지 검증
  const isValidFormat = time => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(time);
  };

  useEffect(() => {
    onDayEdit(rows.filter(row => row.selected));
  }, [rows]);

  const handleRowClick = index => {
    const updatedRows = rows.map((row, i) =>
      i === index
        ? {
            ...row,
            selected: !row.selected,
            start_time: row.selected ? row.start_time : '',
            end_time: row.selected ? row.end_time : ''
          }
        : row
    );
    setRows(updatedRows);
  };

  const handleInputChange = (index, type, value) => {
    // 입력 값 업데이트
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [type]: value } : row
    );
    setRows(updatedRows);
  };

  const handleInputBlur = (index, type, value) => {
    // 입력 형식 검증 -> 경고 모달
    if (type === 'start_time' || type === 'end_time') {
      if (!isValidFormat(value)) {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    }
  };

  return (
    <>
      <Wrapper>
        {rows.map((row, index) => (
          <RowContainer key={row.date}>
            <CheckIcon
              src={row.selected ? check_green : check_gray}
              onClick={() => handleRowClick(index)}
            />
            <Text style={{ width: '62px' }}>
              <Text style={{ width: '62px' }}>
                {row.date}일 {row.day}
              </Text>
            </Text>
            <InputContainer>
              <input
                type='text'
                value={row.start_time}
                onChange={e =>
                  handleInputChange(index, 'start_time', e.target.value)
                }
                onBlur={e =>
                  handleInputBlur(index, 'start_time', e.target.value)
                }
                placeholder='예)9:00'
                disabled={!row.selected}
              />
            </InputContainer>
            <Text>~</Text>
            <InputContainer>
              <input
                type='text'
                value={row.end_time}
                onChange={e =>
                  handleInputChange(index, 'end_time', e.target.value)
                }
                onBlur={e => handleInputBlur(index, 'end_time', e.target.value)}
                placeholder='예)13:00'
                disabled={!row.selected}
              />
            </InputContainer>
          </RowContainer>
        ))}
      </Wrapper>
      {isModalOpen && (
        <Modal
          title='정보 수정 오류'
          msg1='제시된 형식에 알맞게 다시 작성해주세요'
          msg2={`😮\n올바른 시간 형식으로 입력해주세요.`}
          setIsModalOpen={setIsModalOpen}
          msgType={2}
        />
      )}
    </>
  );
};

export default BoothTime;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const CheckIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Text = styled.div`
  color: var(--bk01);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.5px;
`;

const InputContainer = styled.div`
  input {
    display: flex;
    width: 73px;
    padding: 11px 14px;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
    border-radius: 10px;
    border: 1px solid #e7e7e7;
    background: linear-gradient(334deg, var(--wh) 71.49%, var(--wh) 169%);
    box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
  }

  input::placeholder {
    color: var(--gray01);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    letter-spacing: -0.5px;
  }
`;
