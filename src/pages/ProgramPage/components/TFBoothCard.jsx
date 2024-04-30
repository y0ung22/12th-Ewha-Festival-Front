import styled from 'styled-components';

const TFBoothCard = ({ d }) => {
  return (
    <Card>
      <BackgroundImg src={d.thumnail} />
      <Bottom>
        <h3>{d.name}</h3>
        <div>
          <span>{d.place}</span>
          <span>{d.place}</span>
        </div>
      </Bottom>
      {false && <ClosedSign>운영종료</ClosedSign>}
    </Card>
  );
};

export default TFBoothCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 17.75rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray04, #c1d9cc);
  background: var(--wh);
  overflow: hidden;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.81rem 0.94rem 1.06rem;
  width: 100%;
  height: 7.625rem;
  flex-shrink: 0;
  background: var(--bk02);

  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.03125rem;

  h3 {
    color: var(--wh);
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    color: var(--gray01);
    font-size: 0.75rem;
  }
`;

const ClosedSign = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0.9375rem;
  background: var(--green05, rgba(0, 241, 111, 0.4));

  color: var(--wh);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.25rem;
  letter-spacing: -0.01875rem;
`;
