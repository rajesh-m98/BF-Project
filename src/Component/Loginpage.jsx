import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Register from "./Register"; // Import the Register component here
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import Google from "./images/google.jpg"


const LoginPage = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [inputs, setInputs] = useState(["", "", "", ""]); // Four input blocks
  const [showRegister, setShowRegister] = useState(false);

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    const isAllFilled = newInputs.every((input) => input !== "");
    if (isAllFilled) {
      const enteredOtp = newInputs.join("");
      console.log("Entered OTP:", enteredOtp);
      setOtpVerified(true); 
    }
  };

  useEffect(() => {
    let timer;
    if (otpVerified) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [otpVerified]);

  useEffect(() => {
    if (countdown === 0) {
      setShowRegister(true);
    }
  }, [countdown]);

  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-body">
        <div className="text-center">
          <p className="mt-3 text-dark">
            <Link to='/Login.jsx' className="fs-5 fw-bolder text-decoration-none text-dark">Login</Link>
          </p>
        </div>
        <div className="mt-2">
          <form action="" method="" className="loginform">
            <label id="phnumber" className="text-danger">Mobile Number</label>
            <input className="form-control border-1" type="text" name="phnmuner" id="phnnumber" style={{ width: '100%', margin: '2px 0' }} fdprocessedid="tgzud" />
            <button className="btn btn w-100 mt-3 text-dark" type="button" style={{ backgroundColor: '#ffde59' }} onClick={handleSendOtp} disabled={otpSent} >{otpSent ? "OTP Sent" : "Send OTP"} </button>
          </form>
          <div className="container">
            {!showRegister && (
              <div>
                {otpSent && (
                  <div className="mt-4 px-5 mx-3 d-flex" style={{ gap: "10px" }}>
                    {inputs.map((input, index) => (
                      <input key={index} type="text" maxLength="1" className="form-control mb-2 mr-sm-2" style={{ width: "35px" }} value={input} onChange={(e) => handleInputChange(index, e.target.value)} />
                    ))}
                  </div>
                )}
                {otpVerified && (<p>Opening Register Page in {countdown} seconds...</p>)}
              </div>
            )}
            {showRegister && <Register />}
          </div>
          <p className="fs-6 fw-bold text-dark text-center p-2 mt-2">OR Login with Google Account</p>
        </div>
        <div className="text-center">
          <a href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&amp;access_type=online&amp;client_id=112669432284-pbhp3ee08vbhan990fpr40fv4qnag7oo.apps.googleusercontent.com&amp;redirect_uri=http%3A%2F%2Flocalhost%2FDELIAURA%2FDELIAURA%2520-%2520Website-V2%2F&amp;state&amp;scope=email%20profile&amp;approval_prompt=auto">
            <img src={Google} className="img-fluid w-25 text-center" />
          </a>
        </div>
        <div className="mt-3">
          <p className="fs-6 text-center">Shop from anywhere download our app now</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={GoogleApp} className="img-fluid h-75" />
          </div>
          <div className="col-lg-6">
            <img src={AppleStore} className="img-fluid h-75" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
