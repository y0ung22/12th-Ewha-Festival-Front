import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../../../_common/Modal';

import trash from '../images/trash.svg';

import { DeleteMenu } from '../../../api/booth';

const GoMenuEdit = ({
  menu,
  price,
  img,
  is_soldout,
  boothId,
  menuId,
  onEditClick,
  onMenuDeleted
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const executeDelete = async () => {
    try {
      await DeleteMenu(boothId, menuId);
      alert('메뉴가 성공적으로 삭제되었습니다.');
      toggleModal();
      navigate(`/menuedit/${boothId}`);
      onMenuDeleted();
    } catch (error) {
      alert('메뉴 삭제에 실패했습니다.');
    }
  };

  const handleDelete = e => {
    e.stopPropagation();
    toggleModal();
  };

  return (
    <>
      <Box img={img} onClick={onEditClick}>
        <img src={trash} alt='삭제' onClick={handleDelete} />
        <Name>{menu}</Name>
        <Price>{price}원</Price>
        {is_soldout || <Overlay>운영 종료</Overlay>}
      </Box>
      {isModalOpen && (
        <Modal
          title='메뉴 삭제'
          msg1='메뉴를 삭제하시겠습니까?'
          msg2='삭제된 내용은 되돌릴 수 없습니다'
          msgType={1}
          onClickYes={executeDelete}
        />
      )}
    </>
  );
};

export default GoMenuEdit;

// 품절일 경우
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 10.625rem;
  height: 12.3125rem;
  flex-shrink: 0;

  border-radius: 20px;
  background: rgba(0, 172, 79, 0.58);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--wh);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px; /* 83.333% */
  letter-spacing: -0.3px;

  z-index: 1;
`;

const Box = styled.div`
  position: relative;
  width: 10.625rem;
  height: 12.3125rem;
  flex-shrink: 0;
  border-radius: 20px;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(${({ img }) => img}) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;

  cursor: pointer;

  img {
    position: absolute;
    top: 1.25rem;
    right: 1rem;

    width: 1.625rem;
    height: 1.625rem;
    flex-shrink: 0;

    z-index: 2;
    cursor: grab;
  }
`;

const Name = styled.div`
  position: absolute;
  bottom: 38px;
  left: 17px;

  display: -webkit-box;
  width: 8.5rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  overflow: hidden;
  color: var(--wh);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.01875rem;
`;

const Price = styled.div`
  position: absolute;
  bottom: 0.87rem;
  left: 1.06rem;

  color: var(--wh, #fff);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;
`;
