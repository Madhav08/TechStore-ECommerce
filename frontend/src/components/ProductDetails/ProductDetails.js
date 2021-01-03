import React from 'react';
import airpods from '../../images/airpods.jpg';
import {
  ProductDesc,
  ProductDetailsContainer,
  ProductImage,
  ProductRatings,
  ProductPrice,
} from './ProductDetails.elements';

const ProductDetails = () => {
  return (
    <ProductDetailsContainer>
      <ProductImage src={airpods} />
      <ProductDesc>Airpods Wireless Bluetooth Headphones</ProductDesc>
      <ProductRatings>3.5 from of 5 reviews</ProductRatings>
      <ProductPrice>&#8377; 14999.99</ProductPrice>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
