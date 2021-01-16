import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  ProductQty,
  AddIcon,
  MinusIcon,
} from './ProductDescription.elements';
import { productDetails } from '../../redux/actions/productAction';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
// https://www.npmjs.com/package/react-image-magnify

const ProductDescription = ({ history, match }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetails);
  const { product, error, loading } = productDetail;

  useEffect(() => {
    dispatch(productDetails(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleAdd = () => {
    if (qty === product.countInStock) {
      setQty(qty);
    } else {
      setQty(qty + 1);
    }
  };

  const handleMinus = () => {
    if (qty === 0) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <ProductDescriptionScreen>
      <GoBackText to='/'>Go Back</GoBackText>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
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
              Status:
              <ProductSpan>
                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
              </ProductSpan>
            </ProductStatus>
            <ProductQty>
              <MinusIcon onClick={handleMinus} />
              {qty}
              <AddIcon onClick={handleAdd} />
            </ProductQty>
            <ProductBtn
              onClick={addToCardHandler}
              disabled={
                product.countInStock === 0 ? true : qty === 0 ? true : false
              }
            >
              Add To Cart
            </ProductBtn>
          </ProductBuy>
        </ProductDescriptionContainer>
      )}
    </ProductDescriptionScreen>
  );
};

export default ProductDescription;
