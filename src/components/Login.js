/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";
import { googleLogin } from "../actions";

const clientId =
  "800480683042-qdqo4a9hi5dboglr97e4tvmvab0er1lu.apps.googleusercontent.com";

function Login(props) {
  // const responseSuccessGoogle = (response) => {
  //   console.log(response);
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:7000/api/googlelogin",
  //     data: { tokenId: response.tokenId },
  //   }).then((response) => {
  //     console.log("Google login success", response);
  //   });
  // };
  const dispatch = useDispatch();
  const responseErrorGoogle = (response) => {};
  const [showloginButton, setShowloginButton] = useState(true);

  const onLoginSuccess = (res) => {
    axios({
      method: "POST",
      url: "http://localhost:7000/api/googlelogin",
      data: { tokenId: res.tokenId, profileInform: res.profileObj },
    }).then((res) => {
      console.log("Google login success", res);
      const { token, user, message } = res.data;

      console.log(message);
      dispatch(googleLogin({ token, user }));
    });
  };

  const onLoginFailure = (res) => {};

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
  };

  return (
    <div style={{ ...props.style }}>
      <GoogleLogin
        style={{ width: "100%", borderRadius: "25px" }}
        clientId={clientId}
        buttonText={props.buttonText}
        onSuccess={onLoginSuccess}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
export default Login;
