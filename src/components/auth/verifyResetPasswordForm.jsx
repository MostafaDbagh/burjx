import React, { useState } from "react";
import logo from '../../assests/images/logo.png'

const VerifyResetPasswordStep = ({ onSuccess }) => {
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const emailFromStorage = localStorage.getItem("resetEmail");

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/auth/verify-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailFromStorage, otp, newPassword }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Password reset failed");

      setMessage("Password reset successfully!");
      setError("");
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex flex-column gap-2 w-100">

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
      <label className="auth-label form-label">OTP</label>
      <input
        type="text"
        placeholder="Enter OTP"
        className="auth-input"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      </div>

      <div className="mb-3 w-100 d-flex flex-column">
      <label className="auth-label form-label">New Password</label>
      <input
        type="password"
        placeholder="New Password"
        className="auth-input"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        disabled={!otpVerified}
      />
</div>

<div className="mb-3 w-100 d-flex flex-column">
      <label className="auth-label form-label">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        className="auth-input"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={!otpVerified}
      />
</div>
      <button
        className="btn auth-btn"
        onClick={handleResetPassword}
        disabled={!otpVerified}
      >
        Reset Password
      </button>

      {error && <small className="text-danger">{error}</small>}
      {message && <small className="text-success">{message}</small>}
    </div>
  );
};

export default VerifyResetPasswordStep;
