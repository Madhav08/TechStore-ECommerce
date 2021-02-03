import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <div className='xl-screen'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
