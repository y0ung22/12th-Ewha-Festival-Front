import styled from 'styled-components';

const ProgramCard = ({ d }) => {
  return (
    <Card>
      <BackgroundImg src={d.thumbnail} alt='thumbnail' />
      <Container>
        <div>{d.name}</div>
        <div style={{ fontSize: '0.75rem' }}>
          <span>{d.place}</span>
          <span>{d.time}</span>
        </div>
      </Container>
    </Card>
  );
};

export default ProgramCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  display: flex;
  border-radius: 0.625rem;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    lightgray 50% / cover no-repeat;
  overflow: hidden;
`;

const BackgroundImg = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 1.19rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.13rem;

  color: var(--wh);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  letter-spacing: -0.03125rem;

  div {
    display: flex;
    gap: 0.25rem;
  }
`;
