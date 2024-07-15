import React from "react";
import "./index.css";
import SideImage from "../../../assets/images/loginSideImage.png";
import GoogleIcon from "../../../assets/images/googleIcon.png";
import { TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="container">
      <div className="loginBanner">
        <img src={SideImage} height={700} />
      </div>
      <div className="form-container">
        <div className="heading">
          <p className="heading">{"Log in to Website"}</p>
          <p className="sub-heading">{"Enter your details below"}</p>
        </div>
        <div className="heading-container">
          <TextField placeholder="Email" variant="standard" className="input" />
          <TextField
            placeholder="Password"
            type="password"
            variant="standard"
            className="input"
          />

        <div className="button-container" >
          <div className="login-btn" >
          <p style={{ color: '#fafafa' }} className="login-text">{'Log In'}</p>
          </div>
        <p className="forgot-text" >{'Forget Password?'}</p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
