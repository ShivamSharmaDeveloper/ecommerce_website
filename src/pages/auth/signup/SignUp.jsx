import React from "react";
import "./index.css";
import SideImage from "../../../assets/images/loginSideImage.png";
import GoogleIcon from "../../../assets/images/googleIcon.png";
import { TextField } from "@mui/material";

const SignUp = () => {
  return (
    <div className="container">
      <div className="loginBanner">
        <img src={SideImage} height={700} />
      </div>
      <div className="form-container">
        <div className="heading">
          <p className="heading">{"Create an account"}</p>
          <p className="sub-heading">{"Enter your details below"}</p>
        </div>
        <div className="heading-container">
          <TextField placeholder="Name" variant="standard" className="input" />
          <TextField placeholder="Email" variant="standard" className="input" />
          <TextField
            placeholder="Password"
            type="password"
            variant="standard"
            className="input"
          />
          <TextField
            placeholder="Re-Enter Password"
            type="password"
            variant="standard"
            className="input"
          />
          <div className="button">
            <p className="create-button">{"Create Account"}</p>
          </div>
          <div className="google-sign-button">
            <img
              src={GoogleIcon}
              height={24}
              width={24}  
              className="icon"
              alt="Google Icon"
            />
            <p className="google-button-text">{"Sign up with Google"}</p>
          </div>
          <div className="query-container" >
            <p href="./" className="query-text" >{"Already have account?"}</p>
            <a className="login-text" >{"Log in"}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
