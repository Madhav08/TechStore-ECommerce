import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductDescriptionScreen = styled.div`
  margin-top: 95px;
`;

export const ProductDescriptionContainer = styled.div`
  margin: 14px 80px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 960px) {
    margin: 14px 20px;
  }

  @media only screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.img`
  height: 390px;
  width: 430px;

  @media only screen and (max-width: 500px) {
    height: 370px;
    width: 340px;
  }
`;

export const GoBackText = styled(Link)`
  color: black;
  font-size: 1rem;
  text-decoration: none;
  margin-left: 80px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductInfo = styled.div`
  width: 330px;
`;

export const ProductBuy = styled.div`
  border: 1px solid lightgray;
  width: 280px;
  height: 155px;

  @media only screen and (max-width: 960px) {
    grid-area: 1 / 2 / 2 / 3;
  }

  @media only screen and (max-width: 760px) {
    grid-area: 3 / 1 / 4 / 1;
  }
`;

export const ProductName = styled.p`
  text-transform: uppercase;
  font-size: 1.6rem;
`;

export const ProductRatings = styled.p`
  margin-top: 24px;
  padding: 8px;
  font-size: 1.1rem;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;

export const ProductPrice = styled.p`
  border-bottom: 1px solid lightgray;
  padding: 8px;
`;

export const ProductDesc = styled.p`
  padding: 8px;
`;

export const ProductSpan = styled.span`
  float: right;
`;

export const ProductStatus = styled(ProductPrice)``;

export const ProductBtn = styled.button`
  padding: 12px;
  margin: 12px;
  background: #4dc6ce;
  font-size: 0.9rem;
  width: 90%;
  text-transform: uppercase;
  cursor: pointer;
  border: #4dc6ce;
  outline: none;
  font-weight: 600;
  transition: background 0.6s ease;

  &:hover {
    background: #364f6b;
    color: white;
  }
`;
