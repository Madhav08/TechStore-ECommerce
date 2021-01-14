import {
  PRODUCT_REQUEST,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_REQUEST_SUCCESS,
  PRODUCT_DETAILS_REQUEST_FAIL,
} from '../constants/productConstants';

const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    case PRODUCT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { productReducer, productDetailsReducer };
