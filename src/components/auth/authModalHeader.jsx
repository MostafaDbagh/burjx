import React from "react";
import image from '../../assests/images/logo.png'
const AuthHeader = ({title, subtitle }) => {
  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
      <img src={image} alt="auth-header" width="260" height="100" />
      <h5
        className="modal-title text-center"
        style={{ fontFamily: "lufga-medium", marginBottom: subtitle ? "0.5rem" : "2rem" }}
      >
        {title}
      </h5>
      {subtitle && (
        <p className="text-center text-muted px-2 mb-4" style={{ fontSize: "0.95rem" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default AuthHeader;
