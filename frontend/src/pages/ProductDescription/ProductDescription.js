import React from 'react';
import {
  ProductDescriptionScreen,
  ProductImage,
  ProductDescriptionContainer,
  GoBackText,
  ProductInfo,
  ProductBuy,
  ProductName,
  ProductPrice,
  ProductRatings,
  ProductDesc,
  ProductStatus,
  ProductSpan,
  ProductBtn,
} from './ProductDescription.elements';
import products from '../../products';

// https://www.npmjs.com/package/react-image-magnify

const ProductDescription = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <ProductDescriptionScreen>
      <GoBackText to='/'>Go Back</GoBackText>
      <ProductDescriptionContainer>
        <ProductImage src={product.image} />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductRatings>{product.rating}</ProductRatings>
          <ProductPrice>Price: &#x24;{product.price}</ProductPrice>
          <ProductDesc>Description: {product.description}</ProductDesc>
        </ProductInfo>
        <ProductBuy>
          <ProductPrice>
            Price: <ProductSpan>&#x24;{product.price}</ProductSpan>
          </ProductPrice>
          <ProductStatus>
            Status:{' '}
            <ProductSpan>
              {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
            </ProductSpan>
          </ProductStatus>
          <ProductBtn>Add To Cart</ProductBtn>
        </ProductBuy>
      </ProductDescriptionContainer>
    </ProductDescriptionScreen>
  );
};

export default ProductDescription;