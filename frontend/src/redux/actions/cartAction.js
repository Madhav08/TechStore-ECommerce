import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addItem = (id, qty) => async (dispatch) => {
  const { data } = axios.get(`/api/products/${id}`);
  dispatch({ type: CART_ADD_ITEM });
};
