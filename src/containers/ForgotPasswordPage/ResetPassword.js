/** @format */

import React, { useState, useEffect } from "react";
// import authSvg from "../../../assests/forget.svg";
import { ToastContainer, toast } from "react-toastify";
import { Redirect, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { checkPassword, changePasswordPage, signout } from "../../actions";
import Layout from "../../components/Layout";
import "tailwindcss/tailwind.css";
import "./style.css";

const ResetPassword = ({ history }) => {
  const dispatch = useDispatch();

  const changePassword = useSelector((state) => state.changePassword);

  const { status, changedPass, checkedPass } = changePassword;

  const auth = useSelector((state) => state.auth);
  const { email } = auth.user;
  const [inputNewPass, setInputNewPass] = useState("");
  const [changePass, setChangePass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    console.log(status, "status");
    switch (status) {
      case "checking password":
        toast.info(`checking password`);
        break;
      case "checking password success":
        toast.success(`password checked`);

        const changePasswordData = {
          changePass,
          confirmPass,
          email,
        };

        dispatch(changePasswordPage(changePasswordData));

        break;
      case "checking password failed":
        toast.error(`wrong password, please enter the correct password`);
        break;
      case "changing password":
        toast.info(`changing password`);
        break;
      case "changing password success":
        toast.success(`password changing, now redirect to dashboard`);

        dispatch(signout());

        break;
      case "changing password failed":
        toast.error(`password not match, please enter the same password`);
        break;
      case "changing password error":
        toast.error(
          `password change error, please try again!!! we will refresh the page`
        );
        window.location.reload();
        break;
      default:
        break;
    }
  }, [status]);

  const handleSubmitNewPass = (e) => {
    e.preventDefault();

    const checkPasswordData = {
      pass: inputNewPass,
      email,
    };

    dispatch(checkPassword(checkPasswordData));

    return 0;
  };

  return (
    <Layout>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <ToastContainer />
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 pt-10 pb-16 rounded border-solid border shadow">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Change Password
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                enter you old password to Confirm
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleSubmitNewPass}>
                <div className="mb-6">
                  <div>
                    <label
                      for="main"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      {"password"}
                    </label>
                    <input
                      type={"password"}
                      name="main"
                      id="main"
                      placeholder={"Password"}
                      onChange={(e) => setInputNewPass(e.target.value)}
                      value={inputNewPass}
                      pattern={".{8,20}"}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      for="change-password"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Change Password
                    </label>
                    <input
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      type="password"
                      id="change-password"
                      name="change-password"
                      placeholder="Change Password"
                      onChange={(e) => setChangePass(e.target.value)}
                      value={changePass}
                    />
                  </div>
                  <div>
                    <label
                      for="re-password"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Re-Enter Password
                    </label>
                    <input
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      type="password"
                      id="re-password"
                      name="re-password"
                      placeholder="Confirm Change Password"
                      onChange={(e) => setConfirmPass(e.target.value)}
                      value={confirmPass}
                    />
                  </div>
                </div>
                <div className="mb-6 flex justify-center">
                  <button
                    type="submit"
                    className="w-1/2 px-1 py-2 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
