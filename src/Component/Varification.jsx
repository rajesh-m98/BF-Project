const Verification = () => {
    return (
        <>
            <div class="container">
                <div class="card mt-4">
                    <div class="card-header">
                        <h1 class="text-center">Verify Mobile Number - LaravelTuts.com</h1>
                    </div>
                    <div class="card-body">
                        <form action="otp.php" method="post">
                            <div class="mt-4">
                                <label for="mobile">Mobile</label>
                                <input type="number" name="moblie_no" class="form-control" placeholder="Enter mobile no" value="<?php echo $mobile_number;?>" />
                            </div>

                            <div class="mt-4">
                                <label for="otp">OTP</label>
                                <input type="number" name="otp" class="form-control" placeholder="Enter OTP" />
                            </div>
                            <div class="text-center mt-4">
                                <input type="submit" name="verify" value="verify" class="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verification;