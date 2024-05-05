import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Logout } from '../../../api/auth';

const MainBox = ({ item, isAdmin = false }) => {
  const navigate = useNavigate();

  const handleClick = path => {
    if (path === 'setLogout') {
      Logout();
    } else {
      navigate(path);
    }
  };

  return (
    <Wrapper isAdmin={isAdmin} onClick={() => handleClick(item.path)}>
      <Title isAdmin={isAdmin}>{item.title}</Title>
      <Guide isAdmin={isAdmin}>{item.guide}</Guide>
      <Background src={item.image} alt='' isAdmin={isAdmin} />
    </Wrapper>
  );
};

export default MainBox;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  aspect-ratio: ${props =>
    props.isAdmin ? '9.125 / 11.375' : '10.625 / 12.3125'};

  width: 100%;
  height: 100%;
  max-width: ${props => (props.isAdmin ? '11rem' : '12.5rem')};
  flex-shrink: 0;

  padding: ${props =>
    props.isAdmin ? '0.8rem 0.75rem' : '1.5rem 1.12rem 1.31rem'};
  overflow: hidden;

  color: ${props => (props.isAdmin ? '#000' : 'var(--green06, #006c31)')};

  border-radius: 1.25rem;
  border: 1px solid var(--gray04, #c1d9cc);
  background: ${props =>
    props.isAdmin
      ? '#fff'
      : 'linear-gradient(0deg,rgba(0, 255, 117, 0.2) 22.21%,rgba(217, 217, 217, 0) 119.97%)'};
`;

const Title = styled.div`
  position: relative;
  z-index: 2;
  white-space: pre-line;

  font-size: ${props => (props.isAdmin ? '1rem' : '1.25rem ')};
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; /* 110% */
  letter-spacing: -0.03125rem;
`;

const Guide = styled.div`
  position: relative;
  z-index: 2;

  white-space: pre-line;
  font-size: ${props => (props.isAdmin ? '0.65rem' : '0.75rem')};
  font-style: normal;
  font-weight: ${props => (props.isAdmin ? '700' : '800')};
  line-height: 1rem; /* 133.333% */
  letter-spacing: -0.03125rem;
`;

const Background = styled.img`
  position: absolute;
  top: ${props => (props.isAdmin ? '0.81rem' : '1.5rem')};
  left: ${props => (props.isAdmin ? '1.97rem' : '3.31rem')};

  width: ${props => (props.isAdmin ? '9.3125rem' : '9.125rem')};
  height: ${props => (props.isAdmin ? '9.3125rem' : '10.125rem')};
  flex-shrink: 0;
`;
