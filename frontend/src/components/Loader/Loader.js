import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Loading = styled(ReactLoading)`
  margin: 140px 40vw;
`;

const Loader = () => <Loading type={'bubbles'} color='#364F6B' />;

export default Loader;
