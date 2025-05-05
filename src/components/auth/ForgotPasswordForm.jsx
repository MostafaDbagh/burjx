import React from "react";
import AuthHeader from "./authModalHeader";
const ForgotPasswordForm = ({setStep}) => {
  return (
    <>
      <AuthHeader
        title="Forgot password"
        subtitle="We’ll send a verification code to this email address"
      />

      <div className="mb-2 w-100 d-flex flex-column">
        <label htmlFor="forgotEmail" className="form-label w-100 auth-label">
          Enter your email address
        </label>
        <input
          id="forgotEmail"
          type="email"
          className="auth-input mb-2"
          placeholder="you@example.com"
        />
      </div>

      <div
        className="alert alert-danger mb-3 py-2 px-3"
        role="alert"
        style={{ fontSize: "0.875rem" }}
      >
        No account associated with this email address
      </div>

      <button className="btn auth-btn w-100 mb-2" onClick={()=>setStep('verifyReset')}>Next</button>
    </>
  );
};

export default ForgotPasswordForm;
