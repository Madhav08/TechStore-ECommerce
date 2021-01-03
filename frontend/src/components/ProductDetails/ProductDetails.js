import React from 'react';
import {
  ProductDesc,
  ProductDetailsContainer,
  ProductImage,
  ProductRatings,
  ProductPrice,
  ProductLink,
} from './ProductDetails.elements';

const ProductDetails = ({ name, image, id, description, price, rating }) => {
  return (
    <ProductDetailsContainer>
      <ProductImage src={image} />
      <ProductLink to={`/products/${id}`}>
        <ProductDesc>{name}</ProductDesc>
      </ProductLink>
      <ProductRatings>{rating} from of 5 reviews</ProductRatings>
      <ProductPrice>&#36; {price}</ProductPrice>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
