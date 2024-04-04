function CategoryDetails() {
    return (
        <>
            <div style="clear:both;">
            </div>
            <section>
                <div class="container">
                    <div style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Chicken</li>
                        </ol>
                    </div>
                    <h6 class="text-danger">Chicken</h6>
                </div>
                <hr />
                <div class="product-filter-main-wrapper float_left ptb-0 mt-4">
                    <div class="container">
                        <div class="row">

                            <div class="custom-tbs-content float_left">
                                <div id="Beef" class="tabcontent" style="display: block;">
                                    <div class="product-new-filter-block">
                                        <?php
                                        view_details();
                                        get_unique_categories();

  // $ip = getIPAddress();  
  // echo 'User Real IP Address - '.$ip;  

?>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-filter-main-wrapper float_left ptb-0 mt-4">
                    <div class="container">
                        <div class="row">
                            <div class="custom-tbs-content float_left">
                                <div id="Beef" class="tabcontent" style="display: block;">
                                    <div class="product-new-filter-block">
                                        <div class="col-lg-4 custom-tabs-prdt">
                                            <div class="product-thumbnail">
                                                <a href="javascript:;">
                                                    <img src="images/Chicken/chiku4.jpg" class="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div class="product-body p-4">
                                                <h5 class="product-title">
                                                    <a href="product-single.html" title="Beef">Chicken Boneless - Mini Bites</a>
                                                    <p class="product-text">Juicy, tender goodness of Chicken in a mouthful</p>
                                                </h5>
                                                <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center mb-5">
                                                    <a href="#" class="px-0 pt-2"><span class="product-price">349₹ <span>299₹</span></span></a>
                                                    <a href="#" class="custom-btn btn btn-sm btn-shop mb-5">Add Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 custom-tabs-prdt">
                                            <div class="product-thumbnail">
                                                <a href="javascript:;">
                                                    <img src="images/Chicken/chiku5.jpg" class="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div class="product-body p-4">
                                                <h5 class="product-title">
                                                    <a href="product-single.html" title="Beef">Chicken Curry Cut - Large Pieces </a>
                                                    <p class="product-text">Bone-in | Large cuts | Curry Cut</p>
                                                </h5>
                                                <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center mb-5">
                                                    <a href="#" class="px-0 pt-2"><span class="product-price">269₹<span>199₹</span></span></a>
                                                    <a href="#" class="custom-btn btn btn-sm btn-shop mb-5">Add Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 custom-tabs-prdt">
                                            <div class="product-thumbnail">
                                                <a href="javascript:;">
                                                    <img src="images/Chicken/chiku6.jpg" class="img-fluid" alt="img" />
                                                </a>
                                            </div>
                                            <div class="product-body p-4">
                                                <h5 class="product-title">
                                                    <a href="product-single.html" title="Beef">Premium Chicken Thigh Boneless </a>
                                                    <p class="product-text">Boneless</p>
                                                </h5>
                                                <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                                    <a href="#" class="px-0 pt-2"><span class="product-price">249₹ <span>199₹</span></span></a>
                                                    <a href="#" class="custom-btn btn btn-sm btn-shop">Add Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="product-filter-main-wrapper float_left ptb-0 mt-4">
                        <div class="container">
                            <div class="row">

                                <div class="custom-tbs-content float_left">
                                    <div id="Beef" class="tabcontent" style="display: block;">
                                        <div class="product-new-filter-block">
                                            <div class="col-lg-4 custom-tabs-prdt">
                                                <div class="product-thumbnail">
                                                    <a href="javascript:;">
                                                        <img src="images/Chicken/chiku7.jpg" class="img-fluid" alt="img" />
                                                    </a>
                                                </div>
                                                <div class="product-body p-4">
                                                    <h5 class="product-title">
                                                        <a href="product-single.html" title="Beef">Chicken Mince (Keema) </a>
                                                        <p class="product-text">Keema | Boneless</p>
                                                    </h5>
                                                    <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                    <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center mb-5">
                                                        <a href="#" class="px-0 pt-2"><span class="product-price">299₹<span>249₹</span></span></a>
                                                        <a href="#" class="custom-btn btn btn-sm btn-shop mb-5">Add Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 custom-tabs-prdt">
                                                <div class="product-thumbnail">
                                                    <a href="javascript:;">
                                                        <img src="images/Chicken/chiku8.jpg" class="img-fluid" alt="img" />
                                                    </a>
                                                </div>
                                                <div class="product-body p-4">
                                                    <h5 class="product-title">
                                                        <a href="product-single.html" title="Beef">Chicken Drumstick fresh chicken</a>
                                                        <p class="product-text">Bone-IN</p>
                                                    </h5>
                                                    <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                    <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center mb-5">
                                                        <a href="#" class="px-0 pt-2"><span class="product-price">149₹ <span>99₹</span></span></a>
                                                        <a href="#" class="custom-btn btn btn-sm btn-shop mb-5">Add Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 custom-tabs-prdt">
                                                <div class="product-thumbnail">
                                                    <a href="javascript:;">
                                                        <img src="images/Chicken/chiku9.jpg" class="img-fluid" alt="img" />
                                                    </a>
                                                </div>
                                                <div class="product-body p-4">
                                                    <h5 class="product-title">
                                                        <a href="product-single.html" title="Beef">Chicken Breast Boneless (Large Pack)</a>
                                                        <p class="product-text">Fillet | Boneless</p>
                                                    </h5>
                                                    <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                    <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                                        <a href="#" class="px-0 pt-2"><span class="product-price">149₹ <span>129₹</span></span></a>
                                                        <a href="#" class="custom-btn btn btn-sm btn-shop">Add Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="container">
                            <div class="row">

                                <div class="custom-tbs-content float_left">
                                    <div id="Beef" class="tabcontent" style="display: block;">
                                        <div class="product-new-filter-block">
                                            <div class="col-lg-4 custom-tabs-prdt">
                                                <div class="product-thumbnail">
                                                    <a href="javascript:;">
                                                        <img src="images/Chicken/chiku10.jpg" class="img-fluid" alt="img" />
                                                    </a>
                                                </div>
                                                <div class="product-body p-4">
                                                    <h5 class="product-title">
                                                        <a href="product-single.html" title="Beef">Chicken Liver </a>
                                                        <p class="product-text">Offal Cuts | Cleaned | Fresh</p>
                                                    </h5>
                                                    <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                    <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center mb-5">
                                                        <a href="#" class="px-0 pt-2"><span class="product-price">125₹<span>185₹</span></span></a>
                                                        <a href="#" class="custom-btn btn btn-sm btn-shop mb-5">Add Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 custom-tabs-prdt">
                                                <div class="product-thumbnail">
                                                    <a href="javascript:;">
                                                        <img src="images/Chicken/chiku11.jpg" class="img-fluid" alt="img" />
                                                    </a>
                                                </div>
                                                <div class="product-body p-4">
                                                    <h5 class="product-title">
                                                        <a href="product-single.html" title="Beef">Chicken Gizzard</a>
                                                        <p class="product-text">Offal Cuts | Cleaned | Fresh</p>
                                                    </h5>
                                                    <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                    <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center mb-5">
                                                        <a href="#" class="px-0 pt-2"><span class="product-price">149₹ <span>99₹</span></span></a>
                                                        <a href="#" class="custom-btn btn btn-sm btn-shop mb-5">Add Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 custom-tabs-prdt">
                                                <div class="product-thumbnail">
                                                    <a href="javascript:;">
                                                        <img src="images/Chicken/chiku12.jpg" class="img-fluid" alt="img" />
                                                    </a>
                                                </div>
                                                <div class="product-body p-4">
                                                    <h5 class="product-title">
                                                        <a href="product-single.html" title="Beef">Country Chicken / Nattu Koli Curry Cut</a>
                                                        <p class="product-text">with Skin | Medium cut</p>
                                                    </h5>
                                                    <p class="product-text product-text-bg p-1 text-center">Weight: 500gms | 6-7 pieces | Serves 2 </p>
                                                    <div class="d-grid mt-4 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                                        <a href="#" class="px-0 pt-2"><span class="product-price">149₹ <span>129₹</span></span></a>
                                                        <a href="#" class="custom-btn btn btn-sm btn-shop">Add Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </>
                )
}

export default CategoryDetails;