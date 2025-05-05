import React from "react";
import AuthHeader from "./authModalHeader";
const ResetPasswordForm = ({setStep}) => {
  return (
    <>
      <AuthHeader
        title="Choose a new password"
        subtitle=" To secure your account and log in faster, choose a strong password you haven’t used before."
      />

      <div className="mb-3 w-100 d-flex flex-column">
        <label htmlFor="newPassword" className="form-label w-100 auth-label">
          New Password
        </label>
        <div className="input-group">
          <input
            id="newPassword"
            type="password"
            className="auth-input"
            placeholder="Enter password"
          />
          <span className="input-group-text bg-white border-start-0">
            <i className="bi bi-eye"></i>
          </span>
        </div>
      </div>

      <div className="mb-3 w-100 d-flex flex-column">
        <label
          htmlFor="confirmNewPassword"
          className="form-label w-100 auth-label"
        >
          Confirm New Password
        </label>
        <div className="input-group">
          <input
            id="confirmNewPassword"
            type="password"
            className="auth-input"
            placeholder="Confirm new password"
          />
          <span className="input-group-text bg-white border-start-0">
            <i className="bi bi-eye"></i>
          </span>
        </div>
      </div>

      <div
        className="alert alert-secondary d-flex align-items-center gap-2 small mb-4"
        role="alert"
      >
        <i className="bi bi-info-circle"></i>
        This requires all devices to log in with the new password
      </div>

      <button className="btn btn-secondary w-100"  onClick={()=>setStep('login')} disabled>
        Submit
      </button>
    </>
  );
};

export default ResetPasswordForm;
