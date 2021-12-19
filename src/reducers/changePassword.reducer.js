/** @format */

import { changePasswordConstants } from "../actions/constants";

const initialState = {
  checkedPass: false,
  changedPass: false,
  changingPass: false,
  checkingPass: false,
  status: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case changePasswordConstants.GET_CHECK_PASSWORD_PAGE_REQUEST:
      state = {
        ...state,
        checkingPass: true,
        status: `checking password`,
      };
      break;
    case changePasswordConstants.GET_CHECK_PASSWORD_PAGE_SUCCESS:
      state = {
        ...state,
        checkedpass: true,
        checkingPass: false,
        status: `checking password success`,
      };
      break;
    case changePasswordConstants.GET_CHECK_PASSWORD_PAGE_FAILURE:
      state = {
        ...state,
        checkingPass: false,
        status: `checking password failed`,
      };
      break;
    case changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_REQUEST:
      state = {
        ...state,
        changingPass: true,
        status: `changing password`,
      };
      break;
    case changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_SUCCESS:
      state = {
        ...state,
        changedPass: true,
        changingPass: false,
        status: `changing password success`,
      };
      break;
    case changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_FAILURE:
      state = {
        ...state,
        changingPass: false,
        status: `changing password failed`,
      };
      break;
    case changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_ERROR:
      state = {
        ...state,
        changingPass: false,
        status: `changing password error`,
      };
      break;
  }
  return state;
};
