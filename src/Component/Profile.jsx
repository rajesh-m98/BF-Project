import React, { useState, useEffect } from "react";
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
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';


const Profile = () => {

    const [smallImageSrc, setSmallImageSrc] = useState('ProfilePic'); // Assuming 'ProfilePic' is the initial image source

    const handleSmallImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                setSmallImageSrc(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    let setDataFName = sessionStorage.getItem('setFName');
    let setFName = JSON.parse(setDataFName);
    let setDataLName = sessionStorage.getItem('setLName');
    let setLName = JSON.parse(setDataLName);
    let setDataEmail = sessionStorage.getItem('setEmail');
    let setEmail = JSON.parse(setDataEmail);
    let setDataPhnNumber = sessionStorage.getItem('setPhnNumber');
    let setPhnNumber = JSON.parse(setDataPhnNumber);


    const [locationDetails, setLocationDetails] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`);
                        const data = await response.json();

                        // Extracting address components
                        const address = data.address;
                        const area = address.suburb || address.hamlet || address.area || address.urban;
                        const city = address.city_district || address.state_district;
                        const state = address.state || address.region;

                        // Constructing location details string
                        const locationDetails = `${area}, ${city}, ${state}`;
                        setLocationDetails(locationDetails);
                    });
                } else {
                    alert("Geolocation is not supported by this browser.");
                }
            } catch (error) {
                console.error("Error fetching location details:", error);
            }
        };

        fetchLocation();
    }, []);

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
            <section id={styles.border} className="pb-2">
                <div className="container bg-white mt-2" id={styles.logo}>
                    <div className="row">
                        <div className="col-md-2 d-inline pt-0">
                            <div className="sidebar_logo">
                                <Link to='/'>
                                    <img src={Logo} alt="img" className='img-fluid w-50' /></Link>
                            </div>
                        </div>
                        <div className="col-md-4 d-inline">
                            <select id={styles.locationselect} className="text-dark rounded" value={locationDetails || ''} disabled>
                                <option value="">{locationDetails ? locationDetails : 'Fetching location...'}</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <form action="search_product.php" method="get" className=" d-flex form-group">
                                <input type="text" className="form-control w-50 px-2" placeholder="Search" name="search_data" aria-label="Search" id={styles.searchbox} />
                                <a type="submit" className="btn btn-outline-success mx-1 p-1" name="search_data_product" value="search" id={styles.search} >Search</a>
                            </form>
                        </div>
                        <div className="col-md-2 d-flex" id={styles.profilesignin}>
                            <Link to='/Profile.html' className="text-decoration-none d-flex mx-5 text-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <FontAwesomeIcon icon={faUser} className="mx-1 w-25"></FontAwesomeIcon>
                                Profile</Link>
                            <Link to='/cart.jsx' className="text-decoration-none d-flex text-dark">
                                <FontAwesomeIcon icon={faShoppingCart} className="mx-1 w-50"></FontAwesomeIcon><sup className="mt-1 fw-bold">1</sup>
                                cart</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
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
            </div> */}
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
                                    <div class="dropdown" >
                                        <a class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            SEA FOOD
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles.underseafood}>
                                            <Link to='/SeaFood.jsx' class="dropdown-item" href="#">SEA FOOD</Link>
                                            <Link to='/Prawns.jsx' class="dropdown-item" href="#">PRAWNS AND CRABS</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Egg.jsx' className="nav-link">EGG</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Mutton.jsx'>MUTTON</Link>
                                </li>
                                <li className="nav-item menu-click3">
                                    <Link className="nav-link" to='/ColdCut.jsx'>COLD CUTS
                                    </Link>
                                </li>
                                <li className="nav-item menu-click">
                                    <Link className="nav-link" to='/ReadyToCook.jsx'>READY TO COOK
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <Link className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ALL
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to='/chicken.jsx' className="dropdown-item">CHICKEN</Link></li>
                                            <li><Link to='/SeaFood.jsx' className="dropdown-item">SEA FOOD</Link></li>
                                            <li><Link to='/Egg.jsx' className="dropdown-item">EGG</Link></li>
                                            <li><Link to='/Mutton.jsx' className="dropdown-item">MUTTON</Link></li>
                                            <li><Link to='/Prawns.jsx' className="dropdown-item">PRAWNS & CRABS</Link></li>
                                            <li><Link to='/ColdCut.jsx' className="dropdown-item">COLD CUTS</Link></li>
                                            <li><Link to='/ReadyToCook.jsx' className="dropdown-item">READY TO COOK</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id={styles.sidebarmenu}>
                <div className="row">
                    <div className="d-flex align-items-start">
                        <div className="col-md-4">

                            <ul className="nav flex-column" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold active position-relative"
                                        id="pills-accountdashboard-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-accountdashboard" type="button" role="tab"
                                        aria-controls="pills-accountdashboard" aria-selected="true">Account
                                        Dashboard</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-accountinformation-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-accountinformation" type="button" role="tab"
                                        aria-controls="pills-accountinformation" aria-selected="false">Account
                                        Information</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-addressbook-tab" data-bs-toggle="pill" data-bs-target="#pills-addressbook"
                                        type="button" role="tab" aria-controls="pills-addressbook"
                                        aria-selected="false">Address Book</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative" id="pills-myorders-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-myorders" type="button" role="tab"
                                        aria-controls="pills-myorders" aria-selected="false">My Orders</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-mysavedcards-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-mysavedcards" type="button" role="tab"
                                        aria-controls="pills-mysavedcards" aria-selected="false">My Saved Cards</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-mydelicash-tab" data-bs-toggle="pill" data-bs-target="#pills-mydelicash"
                                        type="button" role="tab" aria-controls="pills-mydelicash" aria-selected="false">My
                                        DeliCash</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-myreferrals-tab" data-bs-toggle="pill" data-bs-target="#pills-myreferrals"
                                        type="button" role="tab" aria-controls="pills-myreferrals" aria-selected="false">My
                                        Referrals</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-mystorecredit-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-mystorecredit" type="button" role="tab"
                                        aria-controls="pills-mystorecredit" aria-selected="false">My Store Credit</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative" id="pills-logout-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-logout" type="button" role="tab"
                                        aria-controls="pills-logout" aria-selected="false">Logout</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 d-flex align-items-start flex-column">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-accountdashboard" role="tabpanel"
                                    aria-labelledby="pills-accountdashboard-tab">
                                    <h2 className="fw-bold" style={{ fontSize: '13px' }}>My Dashboard</h2>
                                    <p className="fw-bold">Hello {setFName} {setLName}</p>
                                    <p>From your My Account Dashboard you have the ability to view a snapshot of your recent
                                        account activity and update your account information. Select a link below to view or
                                        edit information.</p>
                                    <h6 className="mt-4">ACCOUNT INFORMATION</h6>
                                    <div className="row mt-3">
                                        <div className="col-md-6 ">
                                            <div className="nav border-bottom" style={{ justifyContent: 'space-between' }}>
                                                <p className="fw-bold mt-1" style={{ fontSize: '12px' }}>CONTACT INFORMATION</p>
                                                <a className="btn" style={{ fontSize: '12px' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                    EDIT
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="nav border-bottom" style={{ justifyContent: 'space-between' }}>
                                                <p className="fw-bold mt-1" style={{ fontSize: '12px' }}>NEWSLETTERS</p>
                                                <a className="btn" style={{ fontSize: '12px' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                    EDIT
                                                </a>
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
                                                <input type="file" id="smallImage" style={{ display: 'none' }} onChange={handleSmallImageChange} />
                                                <img src={smallImageSrc} alt="Image" onClick={() => document.getElementById('smallImage').click()} className="mt-3 rounded-circle img-fluid" style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }} />
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
                                                                <button className={`btn btn-borderless text-center w-100 text-white`} data-bs-dismiss="offcanvas" aria-label="Close">SUBMIT</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>{setFName} {setLName}</p>
                                            <p>{setPhnNumber}</p>
                                            <p>{setEmail}</p>
                                            <Link style={{ fontSize: '12px' }} className={`nav-link ${styles.editaddress} w-50 p-2 text-center rounded`}>CHANGE PASSWORD</Link>
                                        </div>
                                        <div className="col-md-6">
                                            <p>You are currently subscribed to 'General Subscription'.</p>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6 border-bottom">
                                            <p className="fw-bold" style={{ fontSize: '12px' }}>ADDRESS BOOK</p>
                                        </div>
                                        <div className="col-md-6 border-bottom">
                                            <p className="fw-bold" style={{ fontSize: '12px' }}>MANAGE ADDRESS</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <p>Default Billing Address</p>
                                            <p>You have not set a default billing address.</p>
                                            <Link to='/Address.jsx' style={{ fontSize: '12px' }} className={`nav-link ${styles.editaddress} w-50 p-2 text-center rounded`}>EDIT ADDRESS</Link>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>Default Shipping Address</p>
                                            <p>You have not set a default shipping address.</p>
                                            <Link to='/Address.jsx' style={{ fontSize: '12px' }} className={`nav-link ${styles.editaddress} w-50 p-2 text-center rounded`}>EDIT ADDRESS</Link>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="nav border-bottom" style={{ justifyContent: 'space-between' }}>
                                                <p className="fw-bold mt-1" style={{ fontSize: '12px' }}>SMS</p>
                                                <a className="btn" style={{ fontSize: '12px' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                    EDIT
                                                </a>
                                            </div>
                                            <div>
                                                <p>You are subscribed to SMS promotions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-accountinformation" role="tabpanel"
                                    aria-labelledby="pills-accountinformation-tab">
                                    <p style={{ fontSize: '15px' }}>ACCOUNT INFORMATION</p>
                                    {/* <form action="" method="POST">
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

                                    </form> */}
                                    <div className="col-md-12 ">
                                        <div className="row ">
                                            <div className={`${styles.inputcontainer} col-md-6 mt-2`}>
                                                <input type="text" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                <label for="nameInput" className={`${styles.placeholderlabel}`}>First Name</label>
                                            </div>
                                            <div className={`${styles.inputcontainer} col-md-6 mt-2`}>
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
                                            <div className={`col-md-5 offset-md-3 text-center mt-3`}>
                                                <div className={`${styles.profilesubmit} rounded`}>
                                                    <button className={`btn btn-borderless text-center text-white`} data-bs-dismiss="offcanvas" aria-label="Close">SUBMIT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-addressbook" role="tabpanel"
                                    aria-labelledby="pills-addressbook-tab">
                                    <form action="" method="POST">
                                        <div className="">
                                            <p className="fw-bold mx-1" style={{ fontSize: '15px' }}>ADDRESS</p>
                                        </div>
                                        <div className="row ">
                                            <div className={`${styles.inputcontainer} col-md-12 mt-2`}>
                                                <input type="text" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                <label for="nameInput" className={`${styles.placeholderlabel}`}>Street</label>
                                            </div>
                                            <div className={`${styles.inputcontainer} col-md-12 mt-4`}>
                                                <input type="text" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                <label for="nameInput" className={`${styles.placeholderlabel}`}>LandMark</label>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className={`${styles.inputcontainer} col-md-6 mt-4`}>
                                                <input type="number" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                <label for="nameInput" className={`${styles.placeholderlabel}`}>Postal Code</label>
                                            </div>
                                            <div className={`${styles.inputcontainer} col-md-6 mt-4`}>
                                                <input type="email" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                <label for="nameInput" className={`${styles.placeholderlabel}`}>Alternate Mobile Number</label>
                                            </div>
                                            <div className={`${styles.inputcontainer} col-md-6 mt-4`}>
                                                <input type="email" className={`${styles.inputfield} form-control`} id="nameInput" placeholder=" " />
                                                <label for="nameInput" className={`${styles.placeholderlabel}`}>Locality</label>
                                            </div>
                                            <div className={`${styles.inputcontainer} col-md-6 mt-4`}>
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
                                            <div className={`col-md-5 offset-md-3 text-center mt-3`}>
                                                <div className={`${styles.profilesubmit} rounded`}>
                                                    <button className={`btn btn-borderless text-center text-white`} data-bs-dismiss="offcanvas" aria-label="Close">SUBMIT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="pills-myorders" role="tabpanel"
                                    aria-labelledby="pills-myorders-tab">
                                    <h2 className="fw-bold" style={{ fontSize: '15px' }}>My Order</h2>
                                    <p>You have placed no orders.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-mysavedcards" role="tabpanel"
                                    aria-labelledby="pills-mysavedcards-tab">
                                    <h2 className="fw-bold" style={{ fontSize: '15px' }}>You have no saved cards</h2>
                                </div>
                                <div className="tab-pane fade" id="pills-mydelicash" role="tabpanel"
                                    aria-labelledby="pills-mydelicash-tab">
                                    <h2 className="fw-bold" style={{ fontSize: '15px' }}>DeliCash</h2>
                                    <p style={{ fontSize: '12px' }}>Balance : 0</p>
                                </div>
                                <div className="tab-pane fade" id="pills-myreferrals" role="tabpanel"
                                    aria-labelledby="pills-myreferrals-tab">
                                    <h2 className="fw-bold" style={{ fontSize: '15px' }}>My Referrals</h2>
                                    <a href="#" className="text-dark">Invite more friends</a>
                                </div>
                                <div className="tab-pane fade" id="pills-mystorecredit" role="tabpanel"
                                    aria-labelledby="pills-mystorecredit-tab">
                                    <h2 className="fw-bold" style={{ fontSize: '15px' }}>Store Credit</h2>
                                    <p style={{ fontSize: '12px' }}>Total Store Credit accumulated : 0</p>

                                </div>
                                <div className="tab-pane fade" id="pills-logout" role="tabpanel"
                                    aria-labelledby="pills-logout-tab">
                                    <h2 className="fw-bold" style={{ fontSize: '15px' }}>You Are Now Logged Out</h2>
                                    <p>You are logged out and will be redirected to our homepage in 5 seconds</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5" id={styles.footermainwrapper}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="mx-5">
                            <div className="line">
                                <img className="w-75" src={Logo} />
                                <div className={`mt-2 mx-0`}>
                                    <a href="#"><img src={GoogleApp} className="mt-1 mx-1" alt="logo" width="80" height="30" /></a>
                                    <a href="#"><img src={AppleStore} className="mt-1 mx-1" alt="logo" width="80" height="30" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 mt-1 justify-content-center align-items-center text-left">
                        <div className={styles.widgettitle}>
                            <div className="link-page justify-content-center">

                                <ul className=" text-left mt-2">
                                    <h4 className="">Quick Links</h4>
                                    <li>
                                        <a href="#" className="text-decoration-none text-dark">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="blog-right-sidebar.html" className="text-decoration-none text-dark">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-left-sidebar.html" className="text-decoration-none text-dark">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-right-sidebar.html" className="text-decoration-none text-dark">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="privacy.html" className="text-decoration-none text-dark">Refund Policy</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1" id={styles.card}>
                        <div className="text-left" id={styles.link}>
                            <span className="fw-bold">Contact Us</span>
                            <h6 className="mt-1 text-dark">+91 63810 05442</h6>
                            <a href="mailto:customercare@deliuara.com" className="text-center text-decoration-none text-dark">customercare@deliaura.com</a>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1" id={styles.card}>
                        <div className="text-left" id={styles.link}>
                            <span className="fw-bold mt-2">Follow Us On</span>
                            <div className="d-flex flex-wrap d-inline text-left" id={styles.imgftr}>
                                <div className="">
                                    <a href="about-us.html"><IoLogoFacebook style={{ fontSize: '20px', color: 'black' }}></IoLogoFacebook></a></div>
                                <div className="mx-1">
                                    <a href="about-us.html"><IoLogoTwitter style={{ fontSize: '20px', color: 'black' }}></IoLogoTwitter></a>
                                </div>
                                <div className="mx-1">
                                    <a href="about-us.html"><IoLogoInstagram style={{ fontSize: '20px', color: 'black' }}></IoLogoInstagram></a>
                                </div>
                                <div className="mx-1">
                                    <a href="about-us.html"><IoLogoYoutube style={{ fontSize: '20px', color: 'black' }}></IoLogoYoutube></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex pt-1 align-items-center justify-content-center" id={styles.footer}>
                            <a className="text-light text-decoration-none">Copyright 2024 © </a>
                            <a href="#" className="text-decoration-none">Deliaura | Meat Shop online | All Rights Reserved</a>
                            <a className="text-light text-decoration-none">Designed By</a>
                            <a href="www.akvtechnologies.com" target="_blank" className="text-decoration-none">AKV Technologies</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
