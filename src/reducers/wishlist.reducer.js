/** @format */

import { wishlistConstants } from "../actions/constants";

const initState = {
  wishlistItems: {
    // 123: {
    //     _id: 123,
    //     name: 'Samsung mobile',
    //     img: 'some.jpg',
    //     price: 200,
    //     qty: 1,
    // }
  },
  updatingWishlist: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case wishlistConstants.ADD_TO_WISHLIST_REQUEST:
      state = {
        ...state,
        updatingWishlist: true,
      };
      break;
    case wishlistConstants.ADD_TO_WISHLIST_SUCCESS:
      state = {
        ...state,
        wishlistItems: action.payload.wishlistItems,
        updatingWishlist: false,
      };
      break;
    case wishlistConstants.ADD_TO_WISHLIST_FAILURE:
      state = {
        ...state,
        updatingWishlist: false,
        error: action.payload.error,
      };
      break;
    case wishlistConstants.RESET_WISHLIST:
      state = {
        ...initState,
      };
      break;
  }
  return state;
};
