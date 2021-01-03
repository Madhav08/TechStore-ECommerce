import React from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { HomeContainer, HomeHeading } from './Home.elements';

const Home = () => {
  return (
    <>
      <HomeHeading>LATEST PRODUCTS</HomeHeading>
      <HomeContainer>
        <ProductDetails />
        <ProductDetails />
        <ProductDetails />
        <ProductDetails />
        <ProductDetails />
        <ProductDetails />
        <ProductDetails />
      </HomeContainer>
    </>
  );
};

export default Home;
