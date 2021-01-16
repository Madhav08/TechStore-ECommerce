import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';

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
  height: 200px;

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

    ${(props) =>
      props.disabled &&
      css`
        background: darkgrey;
        color: black;
      `}
  }

  ${(props) =>
    props.disabled &&
    css`
      background: lightgrey;
      border: lightgrey;
      color: black;
      cursor: default;
    `}
`;

export const ProductQty = styled(ProductPrice)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.4rem;
  user-select: none;
`;

export const AddIcon = styled(CgMathPlus)`
  font-size: 2rem;
  font-weight: 500;
  border-radius: 50%;
  border: 1px solid #4dc6ce;
  margin-left: 16px;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const MinusIcon = styled(CgMathMinus)`
  font-size: 2rem;
  font-weight: 500;
  border-radius: 50%;
  border: 1px solid #4dc6ce;
  margin-right: 16px;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;
