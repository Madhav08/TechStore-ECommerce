import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import {
  HomeContainer,
  HomeHeading,
  HomeScreen,
  Loading,
} from './Home.elements';
import { listProducts } from '../../redux/actions/productAction';

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <HomeScreen>
      <HomeHeading>LATEST PRODUCTS</HomeHeading>
      <HomeContainer>
        {loading ? (
          <Loading type={'spin'} color='#364F6B' />
        ) : (
          products.map((product) => (
            <ProductDetails
              key={product._id}
              id={product._id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              rating={product.rating}
            />
          ))
        )}
      </HomeContainer>
    </HomeScreen>
  );
};

export default Home;
