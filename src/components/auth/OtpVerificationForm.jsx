import React from "react";
import AuthHeader from "./authModalHeader";

const OtpVerificationForm = ({ email }) => {
  return (
    <>
    
<AuthHeader title="Verify Your Email" />

      <p className="text-center mb-2">
        Enter the 6-digit code sent to <strong>{email}</strong>
      </p>

      <div className="d-flex justify-content-center gap-2 mb-2">
        {[1, 2, 3, 4, 5, 6].map((num, i) => (
          <input
            key={num}
            id={`code-${num}`}
            maxLength={1}
            type="text"
            className="form-control text-center fs-4 fw-bold p-2"
            style={{ width: "3rem", height: "3rem" }}
            onKeyUp={(e) => {
              const input = e.currentTarget;
              if (input.value && i < 5) {
                document.getElementById(`code-${num + 1}`)?.focus();
              }
            }}
          />
        ))}
      </div>

      <div className="mb-2 text-center">
        <span className="text-danger small">Invalid OTP code</span>
      </div>

      <button className="btn auth-btn w-100 mb-2">Verify</button>

      <p className="text-center small">
        Didn’t get it? <span className="toma-primary cursor-pointer">Resend</span>
      </p>
    </>
  );
};

export default OtpVerificationForm;
