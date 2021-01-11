import { combineReducers } from 'redux';
import productReducer from '../reducers/productReducer';

export default combineReducers({
  productList: productReducer,
});
