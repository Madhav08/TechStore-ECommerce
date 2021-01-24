import styled from 'styled-components';

export const CartScreenContainer = styled.div`
  margin-top: 95px;
`;

export const CartScreenDiv = styled.div`
  border: 1.3px solid lightgray;
  padding: 32px;
`;

export const ProductDesc = styled.div`
  border-bottom: 1.3px solid lightgray;

  &::last-child {
    border-bottom: none;
  }
`;

export const ProductImg = styled.img``;

export const ProductName = styled.p``;

export const ProductPrice = styled.p``;

export const ProductQty = styled.p``;
