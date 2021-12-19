/** @format */

import axios from "../helpers/axios";
import { changePasswordConstants } from "./constants";

export const checkPassword = ({ pass, email }) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: changePasswordConstants.GET_CHECK_PASSWORD_PAGE_REQUEST,
      });

      console.log(email, pass, " this email");

      const res = await axios.post("/signin", {
        email,
        password: pass,
      });

      console.log(res);

      if (res.status === 200) {
        dispatch({
          type: changePasswordConstants.GET_CHECK_PASSWORD_PAGE_SUCCESS,
        });
      } else {
        dispatch({
          type: changePasswordConstants.GET_CHECK_PASSWORD_PAGE_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePasswordPage = (data) => {
  return async (dispatch) => {
    const { confirmPass, changePass, email } = data;
    try {
      dispatch({
        type: changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_REQUEST,
      });

      if (confirmPass === changePass) {
        const res = await axios.post("/forgot-password/change-password", {
          email,
          password: changePass,
        });

        if (res.status === 200) {
          dispatch({
            type: changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_SUCCESS,
          });
        } else {
          dispatch({
            type: changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_ERROR,
          });
        }
      } else {
        dispatch({
          type: changePasswordConstants.GET_CHANGE_PASSWORD_PAGE_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
