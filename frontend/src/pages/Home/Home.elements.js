import styled from 'styled-components';

export const HomeScreen = styled.div`
  margin-top: 95px;
`;

export const HomeContainer = styled.div`
  margin: 14px 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  width: 80vw;

  @media screen and (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    margin: 14px 20px;
  }
`;

export const HomeHeading = styled.h3`
  margin: 14px 80px;
  letter-spacing: 4px;
  word-spacing: 18px;
  font-size: 1.8rem;
  font-weight: 500;

  @media screen and (max-width: 760px) {
    margin: 14px 20px;
  }
`;
