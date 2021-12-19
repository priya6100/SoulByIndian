/** @format */

import axios from "../helpers/axios";
import { cartConstants } from "./constants";
import store from "../store";

const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const res = await axios.post(`/user/getCartItems`);
      if (res.status === 200) {
        const { cartItems } = res.data;

        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, newQty = 1) => {
  return async (dispatch) => {
    const {
      cart: { cartItems },
      auth,
    } = store.getState();
    //console.log('action::products', products);
    //const product = action.payload.product;
    //const products = state.products;
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty + newQty)
      : 1;

    cartItems[product._id] = {
      ...product,
      qty,
    };

    const payload = {
      cartItems: [
        {
          product: product._id,
          name: product.name,
          price: product.price,
          img: product.img,
          size: product.size,
          color: product.color,
          quantity: qty,
        },
      ],
    };

    if (auth.authenticate) {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });

      const res = await axios.post(`/user/cart/addtocart`, payload);
      console.log(res);
      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: { cartItems },
      });
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(payload.cartItems));
    }
  };
};

export const removeCartItem = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
      const res = await axios.post(`/user/cart/removeItem`, { payload });
      if (res.status === 202) {
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });

        dispatch(getCartItems());
      } else {
        const { error } = res.data;
        dispatch({
          type: cartConstants.REMOVE_CART_ITEM_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const { auth, cartItems } = store.getState();
    // let cartItems = localStorage.getItem("cart")
    //   ? JSON.parse(localStorage.getItem("cart"))
    //   : null;

    if (auth.authenticate) {
      localStorage.removeItem("cart");
      // dispatch(getCartItems());
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              product: cartItems[key]._id,
              quantity: cartItems[key].qty,
              name: cartItems[key].name,
              price: cartItems[key].price,
              img: cartItems[key].img,
              size: cartItems[key].size,
              color: cartItems[key].color,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/user/cart/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      }
    } else {
      if (cartItems) {
        console.log("update");
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};

export { getCartItems };
