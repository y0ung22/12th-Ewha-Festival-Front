import styled from 'styled-components';

const ListBox = () => {
  return (
    <Container>
      <div>[공지] 공지사항</div>
      <div>
        <span>TF팀</span>
        <span>2024-02-15</span>
      </div>
    </Container>
  );
};

export default ListBox;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  border-radius: 15px;
  border: 1px solid var(--gray04);
  background: var(--wh);

  div:nth-child(1) {
    color: var(--bk01);
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 10px;

    span:nth-child(1) {
      color: var(--green_01);
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.5px;
    }

    span:nth-child(2) {
      color: var(--gray05);
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: -0.5px;
    }
  }
`;
