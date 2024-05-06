import React from 'react';
import { S } from './Makers.style';

const TFlist = () => {
  const list1 = [
    '교공24 임수빈',
    '휴기바24 곽정은',
    '불문24 김현아',
    '서양화24 정지은',
    '경영24 정다원',
    '중문22 정다연',
    '융콘24 서지민',
    '체육24 조연아'
  ];
  const list2 = [
    '체육24 김시현',
    '융콘23 임수아',
    '경영24 라피야',
    '사학24 최수영',
    '반도체24 박주혜',
    '수교23 정이지',
    '과교24 남시은',
    '컴공24 신지민',
    '간호23 임세빈'
  ];
  const list3 = [
    '사보24 박예나',
    '소비자23 홍연주',
    '국문24 한누리',
    '스크24 임도은',
    '한음24 정수현',
    '경영24 김혜진',
    '수학24 강하은',
    '중문22 조선경',
    '식영23 민지우'
  ];
  const list4 = [
    '융콘24 하혜윤',
    '건도시24 정재은',
    '독문23 전수현',
    '호크마24 최온유',
    '사학24 강윤희',
    '영문23 김윤서',
    '국사무24 권유빈',
    '통계24 신인조',
    '사복24 정지우',
    '호크마24 윤정서'
  ];
  const list5 = [
    '불문24 서혜진',
    '국문21 김아영',
    '물리23 문소연',
    '기독교23 이주은',
    '독문22 오서희',
    '국문22 최지효',
    '커미22 박수현',
    '경영23 류채연',
    '사회24 장채영',
    '기독교22 이예원',
    '중문24 정민서',
    '중문22 김서현',
    '컴공23 백소영 ',
    '호크마24 이유진'
  ];
  const list6 = [
    '국문24 사니',
    '기후24 신서의',
    '영문24 남하은 ',
    '국사무21 최수연',
    '정외24 김예서'
  ];

  const renderList = list => {
    return list.map((item, index) => <div key={index}>{item}</div>);
  };

  return (
    <S.ListWrapper>
      <S.ListBox>
        <S.Title>홍보팀</S.Title>
        <S.List>{renderList(list1)}</S.List>
      </S.ListBox>
      <S.ListBox>
        <S.Title>부스팀</S.Title>
        <S.List>{renderList(list2)}</S.List>
      </S.ListBox>
      <S.ListBox>
        <S.Title>대외협력팀</S.Title>
        <S.List>{renderList(list3)}</S.List>
      </S.ListBox>
      <S.ListBox>
        <S.Title>무대팀</S.Title>
        <S.List>{renderList(list4)}</S.List>
      </S.ListBox>
      <S.ListBox>
        <S.Title>기획팀</S.Title>
        <S.List>{renderList(list5)}</S.List>
      </S.ListBox>
      <S.ListBox>
        <S.Title>권리팀</S.Title>
        <S.List>{renderList(list6)}</S.List>
      </S.ListBox>
    </S.ListWrapper>
  );
};
export default TFlist;
