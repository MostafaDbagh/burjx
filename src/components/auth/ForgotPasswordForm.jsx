import React from "react";
import logo from '../../assests/images/logo.png'

const ForgotPasswordForm= () => {
  return (
    <>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <img src={logo} alt="toma-boutique" width="260" height="100" />
        <h5 className="modal-title text-center mb-3">Forgot password</h5>
        <p className="text-center mb-4">
          We’ll send a verification code to this email address
        </p>

        <div className="mb-2 w-100 d-flex flex-column">
          <label htmlFor="forgotEmail" className="form-label w-100 auth-label">Enter your email address</label>
          <input
            id="forgotEmail"
            type="email"
            className="auth-input mb-2"
            placeholder="you@example.com"
          />
        </div>

        <div className="alert alert-danger mb-3 py-2 px-3" role="alert" style={{ fontSize: '0.875rem' }}>
          No account associated with this email address
        </div>

        <button className="btn auth-btn w-100 mb-2">Next</button>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
