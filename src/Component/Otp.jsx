import React from "react";

const Otp = () => {
    return (
        <>
            <section class="container-fluid mt-5 d-block">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-4" style="min-width: 500px;">
                        <div class="card bg-white mb-5 mt-5 border-0" style="box-shadow: 0 12px 15px rgba(0, 0, 0, 0.02);">
                            <div class="card-body p-5 text-center">
                                <h6>OTP verification</h6>
                                <p class="pt-3">One Time Password has been sent to your mobile number <b class="text-danger">9600759607</b></p>

                                <div class="otp-field mt-4">
                                    <input type="number" />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                    <input type="number" disabled />
                                </div>

                                <button class="btn btn-warning mb-3 mt-3 text-white" type="button" >
                                    Verify & Continue
                                </button>
                                <button class="btn btn mb-3 mt-3 px-3 mx-3 text-white" type="button" style="background-color:#93B1A6">Cancel</button>

                                <p class="resend text-muted mb-0">
                                    Didn't receive code? <a href="">Request again</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Otp;