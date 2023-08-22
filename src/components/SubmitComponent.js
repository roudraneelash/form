import React from "react";
import { useSelector } from "react-redux";

const SubmitComponent = () => {
  const { fname, lname, email, companyName, employed } = useSelector(
    (state) => state.form
  );
  const handleOkClick = () => {
    // Reload the page
    window.location.reload();
  };
  return (
    <div className="card" style={{ width: "24rem" }}>
      <div className="card-body">
        <h5 className="card-title">Form Details</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          submitted successfully
        </h6>
        <p className="card-text">
          Fname: {fname}
          <br />
          Lname: {lname}
          <br />
          Email: {email}
          <br />
          Employed: {employed}
          <br />
          {companyName && <span>Company Name: {companyName}</span>}
        </p>
        <button className="btn btn-primary" onClick={handleOkClick}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default SubmitComponent;
