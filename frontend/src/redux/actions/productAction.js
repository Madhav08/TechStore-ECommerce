import axios from 'axios';
import {
  PRODUCT_REQUEST,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_REQUEST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_REQUEST_FAIL, payload: err.message });
  }
};
