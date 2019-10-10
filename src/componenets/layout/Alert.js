import React from "react";

const Alert = ({ error }) => {
  return (
    error !== null && (
      <div className={`alert-${error.color}`}>
        <i className="fas fa-info-circle"></i> {error.Msg}
      </div>
    )
  );
};

export default Alert;
