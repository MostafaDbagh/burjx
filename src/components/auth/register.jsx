import React from "react";
import logo from '../../assests/images/logo.png'


const RegisterForm = ({ setStep, setEmail }) => {
  return (
    <>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <img src={logo} alt="toma-boutique" width="260" height="100" />
        <h5 className="modal-title text-center mb-5" style={{ fontFamily: "lufga-medium" }}>
          Create a new Toma Account
        </h5>
      </div>

      <div className="mb-2 w-100 d-flex flex-column">
        <label htmlFor="registerEmail" className="form-label w-100 auth-label">Email</label>
        <input
          id="registerEmail"
          type="email"
          className="mb-1 auth-input"
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        {true && <span className="text-danger text-left d-block auth-danger">Please enter a valid email</span>}
      </div>

      <div className="mb-2 w-100 d-flex flex-column">
        <label htmlFor="registerPassword" className="form-label w-100 auth-label">Password</label>
        <input
          id="registerPassword"
          type="password"
          className="auth-input mb-1"
          placeholder="Password"
        />
        {false && <span className="text-danger small d-block">Password must be at least 6 characters</span>}
      </div>

      <div className="mb-1 w-100 d-flex flex-column">
        <label htmlFor="confirmPassword" className="form-label w-100 auth-label">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          className="auth-input mb-1"
          placeholder="Confirm Password"
        />
        {false && <span className="text-danger small">Passwords do not match</span>}
      </div>

      <button className="btn auth-btn mb-5" onClick={() => setStep("otp")}>
        Next
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <span className="toma-primary cursor-pointer" onClick={() => setStep("login")}>
          Log in
        </span>
      </p>
    </>
  );
};

export default RegisterForm;
