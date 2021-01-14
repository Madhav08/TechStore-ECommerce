import { combineReducers } from 'redux';
import {
  productReducer,
  productDetailsReducer,
} from '../reducers/productReducer';

export default combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
});
