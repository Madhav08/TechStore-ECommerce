import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import { HomeContainer, HomeHeading, HomeScreen } from './Home.elements';
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
          <Loader />
        ) : error ? (
          <Error />
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
