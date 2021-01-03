import React from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { HomeContainer, HomeHeading, HomeScreen } from './Home.elements';
import products from '../../products';

const Home = () => {
  return (
    <HomeScreen>
      <HomeHeading>LATEST PRODUCTS</HomeHeading>
      <HomeContainer>
        {products.map((product) => (
          <ProductDetails
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </HomeContainer>
    </HomeScreen>
  );
};

export default Home;
