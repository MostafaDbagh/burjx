import React, { useState } from "react";
import "./style.css";

import LoginForm from "../auth/login";
import RegisterForm from "../auth/register";
import ForgotPasswordForm from "../auth/ForgotPasswordForm";
import ResetPasswordForm from "../auth/ResetPasswordForm";
import OtpVerificationForm from "../auth/OtpVerificationForm";
import VerifyAndResetPasswordForm from "../auth/verifyResetPasswordForm";

const authSteps = {
  login: LoginForm,
  register: RegisterForm,
  forgot: ForgotPasswordForm,
  reset: ResetPasswordForm,
  otp: OtpVerificationForm,
  verifyReset: VerifyAndResetPasswordForm,
};

const AuthModal = ({ setActiveModal }) => {
  const [step, setStep] = useState("register");

  const renderContent = () => {
    const StepComponent = authSteps[step];
    return StepComponent ? <StepComponent setStep={setStep} /> : null;
  };

  return (
    <div className="modal d-block modal-overlay">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow position-relative">
          <button
            type="button"
            className="btn-close position-absolute custom-close-btn"
            aria-label="Close"
            style={{ top: "16px", right: "16px" }}
            onClick={() => setActiveModal(null)}
          ></button>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
