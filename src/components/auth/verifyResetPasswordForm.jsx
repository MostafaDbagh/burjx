import React, { useState } from "react";
import logo from "../../assests/images/logo.png";
import AuthHeader from "./authModalHeader";

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
    <>
      <AuthHeader
        title="Choose a new password"
        subtitle="To secure your account and log in faster, choose a strong password you haven’t used before."
      />

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
    </>
  );
};

export default VerifyResetPasswordStep;
