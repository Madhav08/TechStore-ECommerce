import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartScreenContainer = styled.div`
  margin-top: 95px;
`;

export const CartHeading = styled.h3`
  margin: 14px 80px;
  letter-spacing: 4px;
  word-spacing: 18px;
  font-size: 1.8rem;
  font-weight: 500;

  @media screen and (max-width: 760px) {
    margin: 14px 20px;
  }
`;

export const CartScreenDiv = styled.div`
  margin: 14px 80px;
  width: 80vw;
  border: 1px solid lightgray;

  @media only screen and (max-width: 768px) {
    margin: 14px 20px;
    width: 90vw;
  }
`;

export const ProductDesc = styled.div`
  border-bottom: 1.3px solid lightgray;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;

  &::last-child {
    border-bottom: none;
  }
`;

export const ProductImg = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 8px;
`;

export const ProductName = styled(Link)`
  margin-left: 16px;
  font-size: 1.1rem;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

export const ProductPrice = styled.p`
  margin-left: 16px;
`;

export const ProductQty = styled.p``;
