/** @format */

import axios from "../helpers/axios";
import { cartConstants, userConstants } from "./constants";
import store from "../store";





export const getAddress = () => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/user/getaddress`);
      dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST });
      if (res.status === 200) {
        const {
          userAddress: { address },
        } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/user/address/create`, { payload });
      dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST });
      if (res.status === 201) {
        console.log(res);
        const {
          address: { address },
        } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
/////////////////////
export const removeAddressList = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.REMOVE_USER_ADDRESS_REQUEST });
      const res = await axios.post(`/user/address/removeAddress`, { payload });
      if (res.status === 202) {

        dispatch({ type: userConstants.REMOVE_USER_ADDRESS_SUCCESS });
        dispatch(getAddress());
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.REMOVE_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const updatedAddress = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let address = localStorage.getItem("address")
      ? JSON.parse(localStorage.getItem("address"))
      : null;

    console.log("upppppppppp");

    if (auth.authenticate) {
      localStorage.removeItem("address");
      // dispatch(getWishlistItems());
      if (address) {
        const payload = {
          wishlistItems: Object.keys(address).map((key, index) => {
            return {
              product: address[key]._id,
              quantity: address[key].qty,
              name: address[key].name,
              price: address[key].price,
              img: address[key].img,
              size: address[key].size,
              color: address[key].color,
            };
          }),
        };
        if (Object.keys(address).length > 0) {
          const res = await axios.post(`/user/wishlist/addtowishlist`, payload);
          if (res.status === 201) {
            dispatch(getAddress());
          }
        }
      }
    } else {
      if (address) {
        dispatch({
          type: userConstants.ADD_TO_WISHLIST_SUCCESS,
          payload: { address },
        });
      }
    }
  };
};

//////////////////////
export const addOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/addOrder`, payload);
      dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
      if (res.status === 201) {
        console.log(res);
        const { order } = res.data;
        dispatch({
          type: cartConstants.RESET_CART,
        });
        dispatch({
          type: userConstants.ADD_USER_ORDER_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const cancleOrder = (payload) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.CANCLE_USER_ORDER_REQUIEST });
    try {
      const res = await axios.post("/cancleOrderDetails", payload);
      if (res.status === 201) {
        const { order } = res.data;
        dispatch(getOrder(payload));
        dispatch({
          type: userConstants.CANCLE_USER_ORDER_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.CANCLE_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/getOrders`);
      dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { orders } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/getOrder`, payload);
      dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
      if (res.status === 200) {
        const { order, hasItem } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
          payload: { order, hasItem },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrdersByPin = (payload) => {
  return async (dispatch) => {
    const { pinCode } = payload;
    try {
      const res = await axios.post("/getOrdersByPin", { pinCode });
      console.log(res);
      dispatch({ type: userConstants.GET_USER_ORDER_BY_PIN_REQUEST });
      if (res.status === 200) {
        dispatch({
          type: userConstants.GET_USER_ORDER_BY_PIN_SUCCESS,
          payload: { order: res.data.order },
        });
      }

      if (res.status === 400) {
        dispatch({
          type: userConstants.GET_USER_ORDER_BY_PIN_FAILED,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
