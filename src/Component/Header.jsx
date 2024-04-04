import React from "react";

const Header = () => {
    return (
        <div>
            <div id="preloader" style={{ display: 'none' }}>
                <div id="status" style={{ display: 'none' }}>
                    <img src="images/loader.gif" id="preloader_image" alt="loader" />
                </div>
            </div>
            {/* Top to return */}
            <a href="javascript:;" id="return-to-top" class="change-bg2" style={{ display: 'none' }}> <i class="fas fa-angle-double-up"></i></a>

            {/* header start  */}
            <div class="main-header-wrapper1 float_left">
                <div class="sb-main-header1">
                    <div class="menu-items-wrapper menu-item-wrapper3 d-xl-block d-lg-block d-md-none d-sm-none d-none">

                        <div class="top-header-wrapper float_left">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9 col-sm-9 col-xs-6">
                                        <ul class="contact-details">
                                            <li><a href="tel:+917848973214"><i class="fa fa-phone px-2"></i>7848973214 </a>
                                            </li>
                                            <li class="hidden-xs"><a href="mailto:customercare@deliuara.com"><i class="fa fa-envelope"></i>&nbsp;&nbsp;customercare@deliuara.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xs-6">
                                        <ul class="social-list">
                                            <li>
                                                <a href="login.html" class="text-white" >
                                                    Why Us |</a>
                                            </li>
                                            <li>
                                                <a href="login.html" class="text-white"> Sell With Us |</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* top header */}

                        {/* logo header starts */}
                        <div class="container">
                            <div class="top-header2 col-lg-12 d-flex flex-column justify-content-center d-block">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-5 col-xs-4 d-inline pt-0">
                                                <div class="sidebar_logo pt-0  d-inline  d-flex justify-content-center align-items-center">
                                                    <a href="index.php" class='pt-0 mt-2 mb-2 mx-2 ' >
                                                        <img src="images/logo.png" alt="img" class='img-fluid pt-0 mt-0 mb-3 mx-3 mb-0' width="212" height="auto" /></a>
                                                </div>
                                            </div>
                                            <div class="col-md-2 col-sm-3 col-xs-4 d-inline mx-5 mt-4">
                                                <ul class="contact-details mt-3 d-inline  d-flex">
                                                    <li class="mt-1">
                                                        <select>
                                                            <option value="#">Location</option>
                                                            <option value="bhuvaneshwr">bhuvaneshwr</option>
                                                            <option value="bhuvaneshwr">orissa</option>
                                                        </select>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="row">
                                            <div class="col-md-1 col-lg-3 col-sm-3 col-xs-6 d-inline mt-3" >
                                                <ul class="social-list d-inline mt-3 d-flex justify-content-end">
                                                    <li>
                                                        <a href="profile.php" class="fs-6"><i class="fa fa-user fs-6" aria-hidden="true"></i>
                                                            Profile</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div class="col-md-9 col-lg-9 col-sm-4 col-xs-6 d-inline mt-4">
                                                <ul class="social-list mb-4 d-inline  d-flex justify-content-center">

                                                    <li class="nav-link "><i class="fa fa-sign-in-alt" aria-hidden="true"></i>
                                                        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" class="fs-6">
                                                            Login</a>
                                                        <a href="signup.php" class="fs-6">/
                                                            SignUp</a>
                                                    </li>

                                                    <li class="nav-link "><span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                                        {/* calling cart function  */}
                                                    </li>     <a class="fs-6" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" href="javascript:;"><sup></sup> cart&nbsp;</a>


                                                    <li class="nav-link px-4 d-flex d-inline">
                                                        <a class="px-1 fs-6" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" href="javascript:;">Welcome Guest</a>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                        {/* Login Modal Section Start */}


                                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                            <div class="offcanvas-header">
                                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div class="offcanvas-body">
                                                <div class="text-center">
                                                    <img src="./images/logo.png" class="img-fluid" />
                                                    <p class="mt-2 text-dark">Login / Create account to manage orders</p>
                                                </div>
                                                <div class="mt-2">
                                                    <form action="" method="" class="loginform" >
                                                        <label id="phnumber" class="text-danger">Mobile Number</label>
                                                        <input type="text" name="phnmuner" id="phnnumber" style={{ width: '100%', margin: '2px 0', boxSizing: 'border-box', border: 'none', borderBottom: '1px solid black' }} />
                                                        <button class="btn btn w-100 mt-3 text-dark" type="button" style={{ backgroundColor: '#ffde59' }}>Send OTP</button>
                                                    </form>
                                                </div>
                                                <div class="mt-5">
                                                    <p class="fs-6 text-center">Shop from anywhere download our app now</p>

                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <img src="./images/google-store.png" class="img-fluid" />
                                                    </div>
                                                    <div class="col-lg-6 mt-3">
                                                        <img src="./images/app-store.png" class="img-fluid" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Login Modal Section End  */}

                                        {/* cart page popup start   */}
                                        <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></div>

                                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                            <div class="offcanvas-header">
                                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Order Summary</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div class="offcanvas-body">

                                                <p class="cart-delivery px-5">Your cart value is less than ₹499 & delivery charge applies</p>
                                                <div class="card pb-5">
                                                    <p class="px-5 card-title"><b>Chicken Boneless-Mini Bites</b></p>

                                                    <div class="d-grid  gap-2 d-sm-flex justify-content-sm-start">

                                                        <ul>
                                                            <li >₹ 299</li>
                                                            <li class="pieces">1 Pieces</li>
                                                            <li style={{ textDecoration: 'line-through' }}>₹ 399</li>
                                                        </ul>

                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                        {/* cart page popup end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* logo header stops */}

                        <div class="float_left">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 col-md-1">

                                        <div class="navbar navbar-expand-lg" >
                                            <ul class="navbar-nav">
                                                <li class="nav-item menu-click4 ps-rel">
                                                    <a class="nav-link" href="chicken.php">Chicken
                                                        <span><i class="fas fa-chevron-down"></i></span>
                                                    </a>

                                                </li>
                                                <li class="nav-item  menu-click5 ps-rel ">
                                                    <a class="nav-link" href="#">Sea Food <span><i class="fas fa-chevron-down"></i></span></a>
                                                    <ul class="dropdown-items menu-open5">
                                                        <li><a href="seafood.php">See Food</a></li>
                                                        <li><a href="prawns&crabs.php">Praws & Crabs</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="egg.php">Egg</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="mutton.php">Mutton</a>
                                                </li>

                                                <li class="nav-item menu-click3 ps-rel">
                                                    <a class="nav-link" href="coldcut.php">Cold Cuts <span><i class="fas fa-chevron-down"></i></span></a>
                                                    <ul class="dropdown-items menu-open3">
                                                        <li><a href="product.html">Product</a></li>
                                                        <li><a href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                                        <li><a href="product-right-sidebar.html">Product Right Sidebar</a></li>
                                                        <li><a href="product-single.html"> Product Single</a></li>
                                                        <li><a href="checkout.html"> Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item menu-click ps-rel">
                                                    <a class="nav-link" href="readytocook.php">Ready To Cook
                                                        <span><i class="fas fa-chevron-down"></i></span>
                                                    </a>
                                                    <ul class="dropdown-items menu-open">
                                                        <li>
                                                            <a href="javascript:;">Blog Category <span><i class="fas fa-chevron-right"></i></span></a>
                                                            <ul class="sub-dropdown">
                                                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">Blog Single <span><i class="fas fa-chevron-right"></i></span></a>
                                                            <ul class="sub-dropdown">
                                                                <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                                                <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="display_all.php">All </a>
                                                </li>
                                            </ul>
                                            <div class=" col-md-3 offset-lg-1">
                                                <form action="search_product.php" method="get" class=" d-flex justify-content-end align-self-end">
                                                    <input type="text" class="form-control frm-search px-5" placeholder="Search" name="search_data" aria-label="Search" />
                                                    <input type="submit" class="btn btn-outline-success" name="search_data_product" value="search" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* responsive menu bar start  */}
                    <div class="mobile-menu-wrapper d-xl-none d-lg-none d-md-block d-sm-block">
                        <div class="container">
                            <div class="row">
                                <div class=" col-md-4 col-sm-4 col-6">
                                    <div class="mobile-logo">
                                        <a href="index.html">
                                            <img src="images/logo.jpg" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8 col-6">
                                    <div class="d-flex  justify-content-end">
                                        <div class="social-media-icons">
                                            <ul>
                                                <li class="login-btn">
                                                    <a href="javascript:;">
                                                        Cart<span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                                    </a>
                                                    <div class="user-text">
                                                        <p>Item <span>View Cart</span> </p>
                                                        <div class="cart-list">
                                                            <h5>Bee Meat <span>1 x $258.00</span></h5>
                                                        </div>
                                                        <div class="cart-right">
                                                            <img alt="img" src="images/pm3.gif" />
                                                            <div class="close_btn">
                                                                <i class="fa fa-times"></i>
                                                            </div>
                                                        </div>
                                                        <div class="total">
                                                            <p>Sub Total: <span>$ 289.00</span> </p>
                                                        </div>
                                                        <div class="btn-cart">
                                                            <a href="cart.html"><i class="fas fa-shopping-cart"></i>&nbsp; View Cart</a>
                                                            <a href="checkout.html"><i class="fas fa-share"></i>&nbsp; Checkout</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="toggle-main-wrapper mt-2" id="sidebar-toggle">
                                                <span class="line"></span>
                                                <span class="line"></span>
                                                <span class="line"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 ">
                                    <div class="col-md-2 col-sm-2 col-xs-2 d-flex flex-column d-inline pt-0">
                                        <div class="sidebar_logo pt-0 mt-0 d-inline">
                                            <a href="index.html"><img src="images/logo.png" alt="img" class="img-fluid pt-0" width="97" height="27px" /></a>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-4 d-flex flex-column pt-0">
                                        <ul class="contact-details d-inline">
                                            <li class="">
                                                <select>
                                                    <option value="#">Location</option>
                                                    <option value="bhuvaneshwr">bhuvaneshwr</option>
                                                    <option value="bhuvaneshwr">bhuvaneshwr</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-2 col-sm-2 col-xs-2 d-flex flex-column d-inline pt-0">
                                        <ul class="social-list  d-inline  ">
                                            <li>
                                                <a href="login.html"><i class="fa fa-user" aria-hidden="true"></i>
                                                    Profile</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="col-md-2 col-sm-2 col-xs-2">
                                        <ul class="social-list d-inline">

                                            <li>
                                                <a href="login.html"><i class="fa fa-user" aria-hidden="true"></i>
                                                    Login/SignUp</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="col-md-2 col-sm-2 col-xs-2 ">
                                        <ul class="social-list d-inline">
                                            <li>
                                                <a href="login.html"><i class="fa fa-user" aria-hidden="true"></i>
                                                    Cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div id="sidebar">
                <div class="sidebar_logo">
                    <a href="index.html"><img src="images/logo.jpg" alt="img" /></a>
                </div>
                <div id="toggle_close">×</div>
                <div id="cssmenu">
                    <ul class="float_left">
                        <li class="has-sub">
                            <a href="">Home</a>
                            <ul>
                                <li><a href="index.html">Home 01</a></li>
                                <li><a href="index2.html">Home 02</a></li>
                            </ul>
                        </li>
                        <li><a href="about-us.html">about</a></li>

                        <li class="has-sub">
                            <a href="">Shop</a>
                            <ul>
                                <li><a href="product.html">Product</a></li>
                                <li><a href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                <li><a href="jproduct-right-sidebar.html">Product Right Sidebar</a></li>
                                <li><a href="product-single.html">Product Single</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                        </li>
                        <li class="has-sub">
                            <a href="">Blog</a>
                            <ul>
                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li class="border-none"><a href="store.html">Store</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header