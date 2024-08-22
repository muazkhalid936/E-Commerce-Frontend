import React from "react";
import './CSS/Login.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="login-con">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Your Name"></input>
          <input type="email" placeholder="Email Address"></input>
          <input type="password" placeholder="Password"></input>
        </div>

        <button>Continue</button>
        <p className="login-login">
          {" "}
          Already have an account?
          <span><b>Login Here</b></span>
        </p>

        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
