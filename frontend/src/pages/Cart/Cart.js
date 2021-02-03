import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CartScreenContainer,
  CartScreenDiv,
  CartHeading,
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
      <CartHeading>CART</CartHeading>
      <CartScreenDiv>
        {products.map((product) => (
          <ProductDesc>
            <ProductImg src={product.image}></ProductImg>
            <ProductName to={`/products/${product._id}`}>
              {product.name}
            </ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductQty>{3}</ProductQty>
          </ProductDesc>
        ))}
      </CartScreenDiv>
    </CartScreenContainer>
  );
};

export default CartScreen;
