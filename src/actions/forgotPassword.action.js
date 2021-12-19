/** @format */

import axios from "../helpers/axios";
import { forgotPasswordConstants } from "./constants";

export const checkEmail = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`forgot-password/check-email`, data);
      const { otp, email } = res.data;
      console.log(res);
      dispatch({
        type: forgotPasswordConstants.GET_FORGOT_PASSWORD_REQUEST,
        payload: { email },
      });
      if (res.status === 200) {
        dispatch({
          type: forgotPasswordConstants.GET_FORGOT_PASSWORD_SUCCESS,
          payload: { otp, email },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: forgotPasswordConstants.GET_FORGOT_PASSWORD_FAILURE,
          payload: { error, email },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkOtp = (data) => {
  return async (dispatch) => {
    try {
      const { otp, inputOtp } = data;

      dispatch({
        type: forgotPasswordConstants.GET_CHECK_OTP_REQUEST,
      });

      if (otp === inputOtp) {
        dispatch({
          type: forgotPasswordConstants.GET_CHECK_OTP_SUCCESS,
        });
      } else {
        dispatch({
          type: forgotPasswordConstants.GET_CHECK_OTP_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePassword = (data) => {
  return async (dispatch) => {
    const { confirmPass, pass, email } = data;
    try {
      dispatch({
        type: forgotPasswordConstants.GET_CHANGE_PASSWORD_REQUEST,
      });

      if (confirmPass === pass) {
        const res = await axios.post("/forgot-password/change-password", {
          email,
          password: pass,
        });

        if (res.status === 200) {
          dispatch({
            type: forgotPasswordConstants.GET_CHANGE_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: forgotPasswordConstants.GET_CHANGE_PASSWORD_ERROR,
          });
        }
      } else {
        dispatch({
          type: forgotPasswordConstants.GET_CHANGE_PASSWORD_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
