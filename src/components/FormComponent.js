import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFname,
  updateLname,
  updateEmail,
  updateEmployed,
  updateCompanyName,
} from "../store";
import SubmitComponent from "./SubmitComponent";
import useValid from "../hooks/useValid";

const FormComponent = () => {
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const isValid = useValid(); // Use the hook to get validity status

  // Get state values using useSelector
  const { fname, lname, email, companyName, employed } = useSelector(
    (state) => state.form
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setSubmit(true);
    }
  };

  return (
    <div className="container mt-5">
      {submit && isValid ? (
        <SubmitComponent />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={fname}
                onChange={(e) => dispatch(updateFname(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lname}
                onChange={(e) => dispatch(updateLname(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="employed">Are you employed?</label>
              <select
                className="form-control"
                value={employed}
                id="employed"
                onChange={(e) => dispatch(updateEmployed(e.target.value))}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {employed === "yes" && (
              <div className="form-group">
                <label htmlFor="CompanyName">CompanyName:</label>
                <input
                  type="text"
                  className="form-control"
                  id="CompanyName"
                  value={companyName}
                  onChange={(e) => dispatch(updateCompanyName(e.target.value))}
                />
                {!isValid && (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Enter CompanyName</strong>
                  </div>
                )}
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
