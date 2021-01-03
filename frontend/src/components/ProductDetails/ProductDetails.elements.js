import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductDetailsContainer = styled.div`
  border: 1px solid lightgray;
  width: 322px;
`;

export const ProductImage = styled.img`
  padding: 12px;
  height: 285px;
  width: 320px;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductDesc = styled.p`
  margin-left: 12px;
  font-size: 1.1rem;
  width: 250px;
  line-height: 1.6;
  letter-spacing: 1.8px;
`;

export const ProductRatings = styled(ProductDesc)`
  font-size: 0.8rem;
  margin-top: 8px;
`;

export const ProductPrice = styled(ProductDesc)`
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 4px;
`;
