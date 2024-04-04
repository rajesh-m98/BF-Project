import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [showConfirmationCodeSection, setShowConfirmationCodeSection] = useState(false);

  const sendConfirmationEmail = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setShowConfirmationCodeSection(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Change Password</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <button type="button" className="btn btn-primary" onClick={sendConfirmationEmail}>Send Confirmation Email</button>
                </div>
                {showConfirmationCodeSection && (
                  <div className="mb-3">
                    <label htmlFor="confirmationCode" className="form-label">Confirmation Code</label>
                    <input type="text" className="form-control" id="confirmationCode" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} required />
                    <Link to='/NewPassword.jsx' type="submit" className="btn btn-success btn-borderless mt-3 text-decoration-none">Confirm</Link>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword
