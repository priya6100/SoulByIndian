/** @format */

import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  priceRange: {},
  productsByPrice: {},
  pageRequest: false,
  page: {},
  error: null,
  productDetails: {},
  loading: false,
  filteredItems: [],
  price: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.product,
        filteredItems: action.payload.product,
      };
      break;
    case productConstants.FILTER_PRODUCTS_BY_PRICE:
      state = {
        ...state,
        filteredItems: action.payload.filteredItems,
        products: action.payload.products,
      };
      break;
    case productConstants.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        filteredItems: action.payload.products,
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_REQUEST:
      state = {
        ...state,

        pageRequest: true,
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_SUCCESS:
      state = {
        ...state,
        page: action.payload.page,
        pageRequest: false,
      };

      break;
    case productConstants.GET_PRODUCT_PAGE_FAILURE:
      state = {
        ...state,

        pageRequest: false,
        error: action.payload.error,
      };
      break;
    case productConstants.GET_PRODUCTS_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCTS_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails,
      };
      break;
    case productConstants.GET_PRODUCTS_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
