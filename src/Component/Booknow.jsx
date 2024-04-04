function Booknow() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div id="accordion" class="checkout">
                            <div class="panel checkout-step">
                                <div> <span class="checkout-step-number"><i class="fa-solid fa-user" style="color: #ffbb00;"></i></span>
                                    <h4 class="checkout-step-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" style="text-decoration: none;"  > Account</a></h4>
                                </div>
                                <div id="collapseOne" class="collapse in">
                                    <div class="checkout-step-body">
                                        <p>To Place Your Order Now, Login Your Existing Account or Signup</p>
                                        <p>Already Have an Account? <a href="#" class="text-warning" style="text-decoration: none;">Login to your account</a></p>
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <div class="checkout-login">
                                                    <form>
                                                        <div class="login-phone">
                                                            <input type="text" class="form-control" placeholder="Phone Number" />
                                                        </div>
                                                        <a class="btn btn-default bg-warning text-white " role="button" data-toggle="collapse" href="#otp-verifaction" >Next</a>
                                                         {/* add class disabled to inactive button*/}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="collapse" id="otp-verifaction">
                                            <div class="otp-verifaction">
                                                <div class="row">
                                                    <div class="col-lg-8">
                                                        <div class="row">
                                                            <div class="form-group">
                                                                <label class="col-md-12 control-label sr-only" for="Phone">Phone</label>
                                                                <div class="col-md-3">
                                                                    <input id="number" name="number" type="text" placeholder="0" class="form-control input-md" required />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <input id="number" name="number" type="text" placeholder="0" class="form-control input-md" required />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <input id="number" name="number" type="text" placeholder="0" class="form-control input-md" required />
                                                                </div>
                                                                <div class="col-md-3 ">
                                                                    <input id="number" name="number" type="text" placeholder="0" class="form-control input-md" required />
                                                                </div>
                                                            </div>
                                                            {/* Button  */}
                                                            <div class="form-group">
                                                                <label class="control-label sr-only" for="next">next</label>
                                                                <div class="col-md-12">
                                                                    <a class="collapsed btn btn-default bg-warning text-white btn-lg" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Verify OTP</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel checkout-step">
                                <div role="tab" id="headingTwo"> <span class="checkout-step-number"><i class="fa-solid fa-location-dot" style="color: #ff9500;"></i></span>
                                    <h4 class="checkout-step-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" style=
                                        "text-decoration: none;" > Delivery Address </a> </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse">
                                    <div class="checkout-step-body">
                                        <div class="checout-address-step">
                                            <div class="row">
                                                <form class="">
                                                    {/* Multiple Radios (inline) */}
                                                    <div class="form-group">
                                                        <label class="col-md-12  control-label" for="address"></label>
                                                        <div class="col-md-12 ">
                                                            <label class="radio-inline" for="address-0">
                                                                <input type="radio" name="address" id="address-0" value="Home" checked="checked" /> Home </label>
                                                            <label class="radio-inline" for="address-1">
                                                                <input type="radio" name="address" id="address-1" value="Office" /> Office </label>
                                                            <label class="radio-inline" for="address-2">
                                                                <input type="radio" name="address" id="address-2" value="Other" /> Other </label>
                                                        </div>
                                                    </div>
                                                    {/* Text input */}
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <label class="control-label" for="name">Name</label>
                                                            <input id="name" name="name" type="text" placeholder="Name" class="form-control input-md" required />
                                                        </div>
                                                    </div>
                                                    {/* Text input */}
                                                    <div class="form-group">
                                                        <label class="col-md-12 control-label" for="flat">Flat / House / Office No.</label>
                                                        <div class="col-md-12">
                                                            <input id="flat" name="flat" type="text" placeholder="address" class="form-control input-md" required />
                                                        </div>
                                                    </div>
                                                    {/* Text input */}
                                                    <div class="form-group">
                                                        <label class="col-md-12 control-label" for="street">Street / Society / Office Name</label>
                                                        <div class="col-md-12">
                                                            <input id="street" name="street" type="text" placeholder="Street Address" class="form-control input-md" />
                                                        </div>
                                                    </div>
                                                    {/* Text input */}
                                                    <div class="form-group">
                                                        <label class="col-md-12 control-label" for="Locality">Locality</label>
                                                        <div class="col-md-12">
                                                            <input id="Locality" name="Locality" type="text" placeholder="Bhubaneshwar" class="form-control input-md" required />
                                                        </div>
                                                    </div>
                                                    {/* Button  */}
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <button id="singlebutton" name="singlebutton" class="btn btn-warning ">Save</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <a class="collapsed btn btn-default btn-warning px-5" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"> Next </a>
                                    </div>
                                </div>
                            </div>

                            <div class="panel checkout-step">
                                <div role="tab" id="headingFour"> <span class="checkout-step-number"><i class="fa-solid fa-money-bill" style="color: #ff9500;"></i></span>
                                    <h4 class="checkout-step-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" style="text-decoration: none;"  > Payment </a> </h4>
                                </div>
                                <div id="collapseFour" class="panel-collapse collapse">
                                    <div class="checkout-step-body">
                                        Payment Mode
                                        <a href="payment.php" class="btn btn-default btn-warning">Proccess to payment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Chicken(Boneless)
                                    <p>Odissa</p>
                                </h5>
                                <label for="">Chicken Wings</label>
                                <button class="bg-warning text-white border-white px-3 mt-2">-</button>
                                <button class="bg-warning text-white border-white px-3 mt-2">1</button>
                                <button class="bg-warning text-white border-white px-3 mt-2">+</button>
                                <a href="#" style="nav-link" class="px-3 text-dark">RS 299</a>

                                <div class="border px-2">
                                    <input type="checkbox" />Opt in for No-Contact Delivery
                                        <p>Unwell Or avoiding contact? Please select no-contact delivery.Partner will safely place the order outside your door (not For COD)</p>
                                </div>

                                <div class="row">
                                    <p class="mt-3"><strong class="px-2">Bill Details</strong></p>
                                    <div class="col-lg-6">
                                        <p>Item Total</p>
                                        <p>Delivery Fee | 6.9km</p>
                                        <p>Packing and GST</p>
                                        <p>Discount</p>
                                        <hr />
                                            <p><strong>Total Pay</strong></p>
                                    </div>
                                    <div class="col-lg-6 justify-content-end align-items-end">
                                        <p>299₹</p>
                                        <p>49₹</p>
                                        <p>49₹</p>
                                        <p>-29₹</p>
                                        <hr />
                                            <p>299₹</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div>

                            <div class="border mt-4 border-success ">
                                <p class="mt-5 px-3">Savings Of RS 200₹</p>
                            </div>


                            <div class="card mt-3">
                                <div class="card-body border">
                                    <p>Review your order details and address to avoid cancellations</p>
                                    <p class="text-warning"> NOTE: If you cancel within 60seconds of placing order, a 100% refund will be issued. no refund for cancellation made after 60 seconds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booknow;