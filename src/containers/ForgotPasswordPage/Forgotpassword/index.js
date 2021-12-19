/** @format */

import React, { useState, useEffect } from "react";
// import authSvg from "../../../assests/forget.svg";
import { ToastContainer, toast } from "react-toastify";
import { Redirect, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { checkEmail, checkOtp, changePassword } from "../../../actions";
import Layout from "../../../components/Layout";
import "tailwindcss/tailwind.css";
import "./style.css";

const ForgetPassword = ({ history }) => {
  const dispatch = useDispatch();

  const forgotPassword = useSelector((state) => state.forgotPassword);
  const { status, checked, otp, checkedOtp } = forgotPassword;

  const [email, setEmail] = useState("");
  const [inputOtp, setInputOtp] = useState("");

  const [inputNewPass, setInputNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    console.log(forgotPassword.status, "status");
    switch (forgotPassword.status) {
      case "checking email":
        toast.info(`checking email ${email}`);

        break;
      case "checking email success":
        toast.success(
          `OTP code is sending to email ${email}, check your inbox!! make sure you check spam`
        );
        break;
      case "checking email failed":
        toast.error(`no such account with email ${email}`);
        break;
      case "checking otp":
        toast.info(`checking otp`);
        break;
      case "checking otp success":
        toast.success(`otp verified, lets change the password`);
        break;
      case "checking otp failed":
        toast.error(`otp code not match, please input the correct otp code`);
        break;
      case "changing password":
        toast.info(`changing password`);
        break;
      case "changing password success":
        toast.success(`password changing, now redirect to dashboard`);

        setRedirect(true);
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
  }, [forgotPassword.status]);

  const handleSubmitEmail = (e) => {
    e.preventDefault();

    const forgotPasswordData = {
      email,
    };

    dispatch(checkEmail(forgotPasswordData));

    return 0;
  };

  if (forgotPassword.error) {
    toast.warning(status);
    return 0;
  }

  const handleSubmitOtp = (e) => {
    e.preventDefault();

    const submitOtpData = {
      otp,
      inputOtp,
    };

    dispatch(checkOtp(submitOtpData));
    return 0;
  };

  const handleSubmitNewPass = (e) => {
    e.preventDefault();

    const submitNewPass = {
      confirmPass,
      pass: inputNewPass,
      email,
    };

    dispatch(changePassword(submitNewPass));
    return 0;
  };

  if (redirect) {
    console.log("redirect ", redirect);
    return <Redirect push to="/" />;
  }

  return (
    <Layout>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <ToastContainer />
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 pt-10 pb-16 rounded border-solid border shadow">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Forget Password
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                enter your email to start reset your password
              </p>
            </div>
            <div className="m-7">
              <form
                onSubmit={
                  checkedOtp
                    ? handleSubmitNewPass
                    : checked
                    ? handleSubmitOtp
                    : handleSubmitEmail
                }>
                <div className="mb-6">
                  <label
                    for="main"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {checkedOtp
                      ? "password"
                      : checked
                      ? "OTP Code"
                      : "Email Address"}
                  </label>
                  <input
                    type={checkedOtp ? "password" : checked ? "text" : "email"}
                    name="main"
                    id="main"
                    placeholder={
                      checkedOtp
                        ? "Password"
                        : checked
                        ? "OTP Code"
                        : "your@email.com"
                    }
                    onChange={(e) =>
                      checkedOtp
                        ? setInputNewPass(e.target.value)
                        : checked
                        ? setInputOtp(e.target.value)
                        : setEmail(e.target.value)
                    }
                    value={
                      checkedOtp ? inputNewPass : checked ? inputOtp : email
                    }
                    pattern={
                      checkedOtp ? ".{8,20}" : checked ? ".{6,6}" : ".{0,40}"
                    }
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {checkedOtp ? (
                    <>
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
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPass(e.target.value)}
                        value={confirmPass}
                      />
                    </>
                  ) : (
                    <></>
                  )}
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

export default ForgetPassword;
