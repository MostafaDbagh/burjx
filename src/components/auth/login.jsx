

import React from "react";
import logo from '../../assests/images/logo.png'


const LoginForm = ({ setStep }) => {
  return (
    <>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <img src={logo} alt="toma-boutique" width="260" height="100" />
        <h5 className="modal-title text-center mb-5" style={{ fontFamily: "lufga-medium" }}>
          Login with Email
        </h5>
      </div>

      <div className="mb-2 w-100 d-flex flex-column">
        <label htmlFor="loginEmail" className="form-label w-100 auth-label">Email</label>
        <input
          id="loginEmail"
          type="email"
          className="auth-input mb-1"
          placeholder="Enter email..."
        />
        {false && <span className="text-danger text-left d-block auth-danger">Invalid email address</span>}
      </div>

      <div className="mb-2 w-100 d-flex flex-column">
        <label htmlFor="loginPassword" className="form-label w-100 auth-label">Password</label>
        <input
          id="loginPassword"
          type="password"
          className="auth-input mb-1"
          placeholder="Password"
        />
        {false && <span className="text-danger small d-block">Incorrect password</span>}
      </div>

      <div className="mb-3 text-start px-4">
        <span className="toma-primary cursor-pointer">Forgot password?</span>
      </div>

      <button className="btn auth-btn mb-5">Login</button>

      <p className="text-center">
        New to Toma?
        <span className="toma-primary cursor-pointer mx-1" onClick={() => setStep("register")}>
          Create an account
        </span>
      </p>
    </>
  );
};

export default LoginForm;
