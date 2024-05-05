import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;
  width: 100%;
  min-height: 26.9rem;
  padding: 0 1.25rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--wh);
`;

const MainText = styled.div`
  margin-top: 37px;
  margin-bottom: 31px;

  color: var(--bk01);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.5px;
`;

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 412px;
`;

const Title = styled.div`
  margin: 21px auto 22px 10px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.5px;
`;

const TitleInput = styled.input`
  margin: 21px 10px 22px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.5px;

  &::placeholder {
    color: var(--gray01);
  }
`;

const Content = styled.div`
  margin: 25px 10px 0;
  min-height: 220px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.5px;
`;

const ContentInput = styled.textarea`
  margin: 25px 10px 34px;
  min-height: 242px;

  color: var(--bk01);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.5px;

  &::placeholder {
    color: var(--gray01);
  }
`;

const GreenLine = styled.div`
  width: 100%;
  height: 1px;
  background: var(--green01);
`;

const BtnContainer = styled.div`
  margin: 30px 0 58px auto;
  display: flex;
  gap: 10px;
`;

export const S = {
  ListWrapper,
  List,
  Wrapper,
  MainText,
  Container,
  Title,
  TitleInput,
  Content,
  ContentInput,
  GreenLine,
  BtnContainer
};
