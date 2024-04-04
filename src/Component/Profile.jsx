import React from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCamera, faImage, faIndianRupeeSign, faPhone, faRupee, faShoppingCart, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { Link } from "react-router-dom";
import Google from "./images/google.jpg"
import ProfilePic from "./images/profile_pic_icon.svg"
import CameraIcon from "./images/camera_icon.svg"

const Profile = () => {
    return (
        <>
            <div className="container-fluid bg-dark" id={styles.navbar}>
                <div className="row">
                    <div className="col-md-10">
                        <div className="contact-details d-flex mt-2 mx-5" id={styles.contact}>
                            <a href="tel:+917848973214" className="text-warning text-decoration-none">
                                <FontAwesomeIcon icon={faPhone} className="text-warning mt-1" style={{ fontSize: '9px' }}></FontAwesomeIcon>7848973214 </a>
                            <a href="mailto:customercare@deliuara.com" className="text-warning mx-2 text-decoration-none"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '11px' }} className="text-warning"></FontAwesomeIcon>&nbsp;&nbsp;customercare@deliuara.com</a>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex mt-2">
                        <a href="login.html" className="text-white text-decoration-none"> Why Us |</a>
                        <a href="login.html" className="text-white text-decoration-none"> Sell With Us |</a>
                    </div>
                </div>
            </div>
            <div className="container bg-white" id={styles.logo}>
                <div className="row p-1">
                    <div className="col-md-2 d-inline pt-0">
                        <div className="sidebar_logo">
                            <Link to='/'>
                                <img src={Logo} alt="img" className='img-fluid w-75 mt-2' /></Link>
                        </div>
                    </div>
                    <div className="col-md-2  d-inline mt-4 mx-5">
                        <select id={styles.locationselect} className="text-dark p-1 rounded">
                            <option value="#">Location</option>
                            <option value="bhuvaneshwr">bhuvaneshwr</option>
                            <option value="bhuvaneshwr">orissa</option>
                        </select>
                    </div>
                    <div className="col-md-4 mt-4" id={styles.card}>
                        <form action="search_product.php" method="get" className=" d-flex form-group">
                            <input type="text" className="form-control w-50 h-25 px-2" placeholder="Search" name="search_data" aria-label="Search" />
                            <a type="submit" className="btn btn-outline-success mx-1 p-1" name="search_data_product" value="search" id={styles.search} >Search</a>
                        </form>
                    </div>
                    <div className="col-md-2 d-flex p-4 mt-1" id={styles.profilesignin}>
                        <Link to='/Profile.html' className="text-decoration-none d-flex mx-5 text-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <FontAwesomeIcon icon={faUser} className="mt-1 mx-1"></FontAwesomeIcon>
                            Profile</Link>
                        <Link to='/cart.jsx' className="text-decoration-none d-flex text-dark" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" href="Cart.jsx">
                            <FontAwesomeIcon icon={faShoppingCart} className="mt-1 mx-1"></FontAwesomeIcon><sup className="mt-1 fw-bold">1</sup>
                            cart</Link>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="text-center">
                        <img src={Logo} className="img-fluid w-50" />
                        <p className="mt-3 text-dark"> <a href="./user_area/user_registration.php" className="fs-5 fw-bolder text-decoration-none text-dark">
                            Sign Up&nbsp;/&nbsp;</a>

                            <a className="fs-6" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" href="javascript:;"></a>
                            <Link to='/Login.jsx' className="fs-5 fw-bolder text-decoration-none text-dark">Login</Link>
                        </p>
                    </div>
                    <div className="mt-2">
                        <form action="" method="" className="loginform">
                            <label id="phnumber" className="text-danger">Mobile Number</label>
                            <input type="text" name="phnmuner" id="phnnumber" style={{ width: '100%', margin: '2px 0', boxSizing: 'borderBox', border: 'none', borderBottom: '1px solid black' }} fdprocessedid="tgzud" />
                            <button className="btn btn w-100 mt-3 text-dark" type="button" style={{ backgroundColor: '#ffde59' }} fdprocessedid="fogca">Send OTP</button>
                        </form>
                        <p className="fs-6 fw-bold text-dark text-center p-2 mt-4">OR Login with Google Account</p>

                    </div>
                    <div className="text-center">
                        <a href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&amp;access_type=online&amp;client_id=112669432284-pbhp3ee08vbhan990fpr40fv4qnag7oo.apps.googleusercontent.com&amp;redirect_uri=http%3A%2F%2Flocalhost%2FDELIAURA%2FDELIAURA%2520-%2520Website-V2%2F&amp;state&amp;scope=email%20profile&amp;approval_prompt=auto">
                            <img src={Google} className="img-fluid w-25 text-center" /></a>
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
            <div className="container" id={styles.categories}>
                <div className="row">
                    <div className="col-md-12 d-md-block d-none">
                        <div className="navbar navbar-expand-lg" >
                            <ul className="navbar-nav">
                                <li className="nav-item menu-click4">
                                    <Link to='/chicken.jsx' className="nav-link">CHICKEN
                                    </Link>
                                </li>
                                <li className="nav-item  menu-click5">
                                    <a className="nav-link" href="#">SEA FOOD
                                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Egg.jsx' className="nav-link">EGG</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Mutton.jsx'>MUTTON</Link>
                                </li>
                                <li className="nav-item menu-click3">
                                    <Link className="nav-link" to='/ColdCuts.jsx'>COLD CUTS
                                    </Link>
                                </li>
                                <li className="nav-item menu-click">
                                    <Link className="nav-link" to='/ReadytoCook.jsx'>READY TO COOK
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/All.jsx'>ALL </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="d-flex align-items-start">
                        <div className="col-md-4">

                            <ul className="nav nav-pills flex-column nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold active position-relative"
                                        id="pills-accountdashboard-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-accountdashboard" type="button" role="tab"
                                        aria-controls="pills-accountdashboard" aria-selected="true">Account
                                        Dashboard</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative"
                                        id="pills-accountinformation-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-accountinformation" type="button" role="tab"
                                        aria-controls="pills-accountinformation" aria-selected="false">Account
                                        Information</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative"
                                        id="pills-addressbook-tab" data-bs-toggle="pill" data-bs-target="#pills-addressbook"
                                        type="button" role="tab" aria-controls="pills-addressbook"
                                        aria-selected="false">Address Book</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative" id="pills-myorders-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-myorders" type="button" role="tab"
                                        aria-controls="pills-myorders" aria-selected="false">My Orders</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative"
                                        id="pills-mysavedcards-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-mysavedcards" type="button" role="tab"
                                        aria-controls="pills-mysavedcards" aria-selected="false">My Saved Cards</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative"
                                        id="pills-mydelicash-tab" data-bs-toggle="pill" data-bs-target="#pills-mydelicash"
                                        type="button" role="tab" aria-controls="pills-mydelicash" aria-selected="false">My
                                        DeliCash</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative"
                                        id="pills-myreferrals-tab" data-bs-toggle="pill" data-bs-target="#pills-myreferrals"
                                        type="button" role="tab" aria-controls="pills-myreferrals" aria-selected="false">My
                                        Referrals</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative"
                                        id="pills-mystorecredit-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-mystorecredit" type="button" role="tab"
                                        aria-controls="pills-mystorecredit" aria-selected="false">My Store Credit</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark fw-semibold position-relative" id="pills-logout-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-logout" type="button" role="tab"
                                        aria-controls="pills-logout" aria-selected="false">Logout</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 d-flex align-items-start flex-column">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-accountdashboard" role="tabpanel"
                                    aria-labelledby="pills-accountdashboard-tab">
                                    <h2>My Dashboard</h2>
                                    <p><b>Hello Charumathi</b></p>
                                    <p>From your My Account Dashboard you have the ability to view a snapshot of your recent
                                        account activity and update your account information. Select a link below to view or
                                        edit information.</p>
                                    <h6 className="mt-4">ACCOUNT INFORMATION</h6>
                                    <div className="row mt-4">
                                        <div className="col-md-6 ">
                                            <div className="nav border-bottom" style={{ justifyContent: 'space-between' }}>
                                                <p><b>CONTACT INFORMATION</b></p>
                                                <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                    EDIT
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="nav border-bottom" style={{ justifyContent: 'space-between' }}>
                                                <p><b>NEWSLETTERS</b></p>
                                                <a href="#" className="nav-link text-dark">EDIT</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header">
                                            <div className={`container-fluid ${styles.profilenav}`}>
                                                <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">Update Profile</h5>
                                            </div>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        {/* Edit Profile Section */}
                                        <div className="offcanvas-body">
                                            <div id={styles.completeprofile} className="p-2 rounded">
                                                Complete Your Profile <span className="text-danger">86% done</span>
                                                <div class="progress mt-2" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="75" style={{ height: '4px' }}>
                                                    <div class="progress-bar bg-danger" style={{ width: '75%' }}></div>
                                                </div>
                                            </div>
                                            <div className="col-md-8 text-center mx-5 p-1">
                                                <img src={ProfilePic} className="mt-5" alt="" />
                                                <sup className="mt-0"><img src={CameraIcon} alt="" className="" /></sup>
                                            </div>
                                            <div className="mt-5">
                                                <p className="fw-bold fs-7">* All the following details are mandatory</p>
                                                <div className="col-md-12 ">
                                                    <div className="row ">
                                                        <div className={`${styles.inputcontainer} col-md-6 mt-3`}>
                                                            <input type="text" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                            <label for="nameInput" className={`${styles.placeholderlabel}`}>First Name</label>
                                                        </div>
                                                        <div className={`${styles.inputcontainer} col-md-6 mt-3`}>
                                                            <input type="text" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                            <label for="nameInput" className={`${styles.placeholderlabel}`}>Last Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="row ">
                                                        <div className={`${styles.inputcontainer} col-md-12 mt-4`}>
                                                            <input type="number" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                            <label for="nameInput" className={`${styles.placeholderlabel}`}>Phone Number</label>
                                                        </div>
                                                        <div className={`${styles.inputcontainer} col-md-12 mt-4`}>
                                                            <input type="email" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                            <label for="nameInput" className={`${styles.placeholderlabel}`}>E-mail id</label>
                                                        </div>
                                                        <div className={`col-md-12 mt-4`}>
                                                            <div className={`${styles.profilesubmit} rounded`}>
                                                                <button className={`btn btn-borderless text-center w-100 text-white`} data-bs-dismiss="offcanvas" aria-label="Close">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>charuudhaya</p>
                                            <p>9600759607</p>
                                            <p>charuudhaya@gmail.com</p>
                                            <a href="#" className="nav-link">change password</a>
                                        </div>
                                        <div className="col-md-6">
                                            <p>You are currently subscribed to 'General Subscription'.</p>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6 border-bottom">
                                            <p><b>ADDRESS BOOK</b></p>
                                        </div>
                                        <div className="col-md-6 border-bottom d-flex justify-content-end">
                                            <p><b>MANAGE ADDRESS</b></p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <p>Default Billing Address</p>
                                            <p>You have not set a default billing address.</p>
                                            <Link to='/Address.jsx' className="nav-link" href="#">Edit Address</Link>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>Default Shipping Address</p>
                                            <p>You have not set a default shipping address.</p>
                                            <a className="nav-link" href="#">Edit Address</a>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="nav border-bottom" style={{ justifyContent: 'space-between' }}>
                                                <p><b>SMS</b></p>
                                                <a href="#" className="nav-link text-dark">EDIT</a>
                                            </div>
                                            <div>
                                                <p>You are subscribed to SMS promotions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-accountinformation" role="tabpanel"
                                    aria-labelledby="pills-accountinformation-tab">
                                    <h2>Edit Account Information</h2>
                                    <p>ACCOUNT INFORMATION</p>
                                    <form action="" method="POST">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label" id="name">First Name</label>
                                                <input type="text" className="form-control" name="name" id="name" />
                                                <label className="form-label" id="phnumer">Mobile Number</label>
                                                <input type="number" className="form-control" name="phnumber" id="phnumber" />
                                                <label className="form-label" id="email">Email</label>
                                                <input type="email" className="form-control" name="email" id="email" />
                                                <div className="mt-3"> <input type="checkbox" className="form-check-input"
                                                    id="check" />
                                                    <label className="form-check-label" for="check">Check me out</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label" id="lname">Last Name</label>
                                                <input type="text" className="form-control" name="lname" id="lname" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn mt-3"
                                            style={{ backgroundColor: '#ffde59' }}>Submit</button>

                                    </form>
                                </div>
                                <div className="tab-pane fade" id="pills-addressbook" role="tabpanel"
                                    aria-labelledby="pills-addressbook-tab">
                                    <h2>Add New Address</h2>
                                    <p><b>CONTACT INFORMATION</b></p>
                                    <form action="" method="POST">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label" id="name">First Name</label>
                                                <input type="text" className="form-control" name="name" id="name" />
                                                <label className="form-label" id="phnumer">Mobile Number</label>
                                                <input type="number" className="form-control" name="phnumber" id="phnumber" />


                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label" id="name">First Name</label>
                                                <input type="text" className="form-control" name="name" id="name" />

                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p><b>ADDRESS</b></p>
                                            <label className="form-label" id="street">Street</label>
                                            <input type="text" className="form-control w-60" name="street" id="street" />
                                            <label className="form-label" id="landmark">Landmark</label>
                                            <input type="text" className="form-control w-60" name="landmark" id="landmark" />

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label" id="PostalCode">Postal Code</label>
                                                <input type="text" className="form-control" name="PostalCode" id="PostalCode" />
                                                <label className="form-label" id="AlternatePhoneNumber">Alternate Phone
                                                    Number</label>
                                                <input type="text" className="form-control" name="AlternatePhoneNumber"
                                                    id="AlternatePhoneNumber" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label" id="Locality">Locality</label>
                                                <input type="text" className="form-control" name="Locality" id="Locality" />
                                                <label className="form-label" id="city">City</label>

                                                <select name="city" id="city"
                                                    className="required-entry validate-state form-control" title="City">
                                                    <option value="Bangalore">Bangalore</option>
                                                    <option value="Anantpur">Anantpur</option>
                                                    <option value="Attibele">Attibele</option>
                                                    <option value="Bidadi">Bidadi</option>
                                                    <option value="Chikmagalur">Chikmagalur</option>
                                                    <option value="Davanagere">Davanagere</option>
                                                    <option value="Dharmavaram">Dharmavaram</option>
                                                    <option value="Guntakal">Guntakal</option>
                                                    <option value="Hassan">Hassan</option>
                                                    <option value="Hindupur">Hindupur</option>
                                                    <option value="Hosur">Hosur</option>
                                                    <option value="Kadiri">Kadiri</option>
                                                    <option value="Krishnagiri">Krishnagiri</option>
                                                    <option value="Madikeri">Madikeri</option>
                                                    <option value="Mandya">Mandya</option>
                                                    <option value="Mangalore">Mangalore</option>
                                                    <option value="Mysore">Mysore</option>
                                                    <option value="Nagamangala">Nagamangala</option>
                                                    <option value="Ramanagara">Ramanagara</option>
                                                    <option value="Sakleshpura">Sakleshpura</option>
                                                    <option value="Shivamogga">Shivamogga</option>
                                                    <option value="Tadipatri">Tadipatri</option>
                                                    <option value="Tumkur">Tumkur</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn mt-3"
                                            style={{ backgroundColor: '#ffde59' }}>Submit</button>

                                    </form>
                                </div>
                                <div className="tab-pane fade" id="pills-myorders" role="tabpanel"
                                    aria-labelledby="pills-myorders-tab">
                                    <h2>My Order</h2>
                                    <p>You have placed no orders.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-mysavedcards" role="tabpanel"
                                    aria-labelledby="pills-mysavedcards-tab">
                                    <h2>You have no saved cards</h2>
                                </div>
                                <div className="tab-pane fade" id="pills-mydelicash" role="tabpanel"
                                    aria-labelledby="pills-mydelicash-tab">
                                    <h2>DeliCash</h2>
                                    <p><b>Balance :</b> 0</p>
                                </div>
                                <div className="tab-pane fade" id="pills-mydelicash" role="tabpanel"
                                    aria-labelledby="pills-mydelicash-tab">
                                    <h2>DeliCash</h2>
                                </div>
                                <div className="tab-pane fade" id="pills-myreferrals" role="tabpanel"
                                    aria-labelledby="pills-myreferrals-tab">
                                    <h2>My Referrals</h2>
                                    <a href="#" className="text-dark">Invite more friends</a>
                                </div>
                                <div className="tab-pane fade" id="pills-mystorecredit" role="tabpanel"
                                    aria-labelledby="pills-mystorecredit-tab">
                                    <h2>Store Credit</h2>
                                    <p><b>Total Store Credit accumulated :</b> 0</p>

                                </div>
                                <div className="tab-pane fade" id="pills-logout" role="tabpanel"
                                    aria-labelledby="pills-logout-tab">
                                    <h2>You Are Now Logged Out</h2>
                                    <p>You are logged out and will be redirected to our homepage in 5 seconds</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile