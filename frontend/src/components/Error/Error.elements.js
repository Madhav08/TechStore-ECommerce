import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 1300px;
  border: 1px solid red;
  background: #ffcccb;
  color: red;
  padding: 16px;
  margin: 0 80px 0 0;

  @media screen and (max-width: 768px) {
    margin: 0 35px 0 0;
    width: 341px;
  }
`;

export const ErrorText = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
