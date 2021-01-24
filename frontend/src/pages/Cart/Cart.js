import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CartScreenContainer,
  CartScreenDiv,
  ProductDesc,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductQty,
} from './Cart.elements';
import products from '../../products';

const CartScreen = () => {
  return (
    <CartScreenContainer>
      <CartScreenDiv>
        {products.map((product) => {
          <ProductDesc>
            <ProductImg src={product.image}></ProductImg>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductQty>{3}</ProductQty>
          </ProductDesc>;
        })}
      </CartScreenDiv>
    </CartScreenContainer>
  );
};

export default CartScreen;
