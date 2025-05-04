import React from "react";
import logo from '../../assests/images/logo.png'

const ResetPasswordForm= () => {
  return (
    <>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <img src={logo} alt="toma-boutique" width="260" height="100" />
        <h5 className="modal-title text-center mb-2" style={{ fontFamily: "lufga-medium" }}>
          Choose a new password
        </h5>
        <p className="text-center text-muted px-2 mb-4" style={{ fontSize: "0.95rem" }}>
          To secure your account and log in faster, choose a strong password you haven’t used before.
        </p>
      </div>

      <div className="mb-3 w-100 d-flex flex-column">
        <label htmlFor="newPassword" className="form-label w-100 auth-label">New Password</label>
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
        <label htmlFor="confirmNewPassword" className="form-label w-100 auth-label">Confirm New Password</label>
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

      <div className="alert alert-secondary d-flex align-items-center gap-2 small mb-4" role="alert">
        <i className="bi bi-info-circle"></i>
        This requires all devices to log in with the new password
      </div>

      <button className="btn btn-secondary w-100" disabled>Submit</button>
    </>
  );
};

export default ResetPasswordForm;
