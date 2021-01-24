import { combineReducers } from 'redux';
import {
  productReducer,
  productDetailsReducer,
} from '../reducers/productReducer';
import { cartReducer } from '../reducers/cartReducer';

export default combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
