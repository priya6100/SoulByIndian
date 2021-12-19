/** @format */

import { forgotPasswordConstants } from "../actions/constants";

const initialState = {
  email: "",
  otp: "",
  status: "",
  checking: false,
  checked: false,
  checkingOtp: false,
  checkedOtp: false,
  checkingNewPass: false,
  checkedNewPass: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case forgotPasswordConstants.GET_FORGOT_PASSWORD_REQUEST:
      state = {
        ...state,
        checking: true,
        status: `checking email`,
      };
      break;
    case forgotPasswordConstants.GET_FORGOT_PASSWORD_SUCCESS:
      state = {
        ...state,
        email: action.payload.email,
        otp: action.payload.otp,
        status: `checking email success`,
        checking: false,
        checked: true,
      };
      break;
    case forgotPasswordConstants.GET_FORGOT_PASSWORD_FAILURE:
      state = {
        ...state,
        status: `checking email failed`,
        checking: false,
        message: action.payload.error,
      };
      break;
    case forgotPasswordConstants.GET_CHECK_OTP_REQUEST:
      state = {
        ...state,
        status: `checking otp`,
        checkingOtp: true,
      };
      break;
    case forgotPasswordConstants.GET_CHECK_OTP_SUCCESS:
      state = {
        ...state,
        status: `checking otp success`,
        checkingOtp: false,
        checkedOtp: true,
      };
      break;
    case forgotPasswordConstants.GET_CHECK_OTP_FAILURE:
      state = {
        ...state,
        status: `checking otp failed`,
        checkingOtp: false,
      };
      break;
    case forgotPasswordConstants.GET_CHANGE_PASSWORD_REQUEST:
      state = {
        ...state,
        status: `changing password`,
        checkingNewPass: true,
      };
      break;
    case forgotPasswordConstants.GET_CHANGE_PASSWORD_SUCCESS:
      state = {
        ...state,
        status: `changing password success`,
        checkingNewPass: false,
        checkedNewPass: true,
      };
      break;
    case forgotPasswordConstants.GET_CHANGE_PASSWORD_FAILURE:
      state = {
        ...state,
        status: `changing password failed`,
        checkingNewPass: false,
      };
      break;
    case forgotPasswordConstants.GET_CHANGE_PASSWORD_ERROR:
      state = {
        ...state,
        status: `changing password error`,
        checkingNewPass: false,
      };
      break;
  }
  return state;
};
