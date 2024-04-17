import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faIndianRupeeSign, faPhone, faRupee, faStar, faStarHalfStroke, faMinus, faPlus, faShoppingCart, faAngleRight, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { Link } from "react-router-dom";
import Google from "./images/google.jpg"
import Register from "./Register";
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
import R1 from "./images/readytocook/r1.jpg"
import R2 from "./images/readytocook/r2.jpg"
import R3 from "./images/readytocook/r3.jpg"
import R4 from "./images/readytocook/r4.jpg"
import R5 from "./images/readytocook/r5.jpg"
import R6 from "./images/readytocook/r6.jpg"
import R7 from "./images/readytocook/r7.jpg"
import R8 from "./images/readytocook/r8.jpg"
import R9 from "./images/readytocook/r9.jpg"


const ReadyToCookCustomize = () => {

    const settings = {
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 700

    }
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [ShowRegister, setShowRegister] = useState(false);

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
            // Navigate to Address page after 5 seconds
            setShowRegister(true);
        }
    }, [countdown]);

    const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1

    // Function to handle incrementing the quantity
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to handle decrementing the quantity
    const decrementQuantity = () => {
        if (quantity > 1) { // Ensure quantity doesn't go below 1
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

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
                        <div className="col-md-2  d-inline mx-5">
                            <select id={styles.locationselect} className="text-dark rounded">
                                <option value="#">Location</option>
                                <option value="bhuvaneshwr">bhuvaneshwr</option>
                                <option value="bhuvaneshwr">orissa</option>
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
                            <Link to='/cart.jsx' className="text-decoration-none d-flex text-dark" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" href="Cart.jsx">
                                <FontAwesomeIcon icon={faShoppingCart} className="mx-1 w-50"></FontAwesomeIcon><sup className="mt-1 fw-bold">1</sup>
                                cart</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className={`offcanvas-header ${ShowRegister ? 'fade-out' : ''}`}>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className={`offcanvas-body ${ShowRegister ? 'fade-out' : ''}`}>
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
                            <input className="form-control border-1" type="text" name="phnmuner" id="phnnumber" style={{ width: '100%', margin: '2px 0' }} fdprocessedid="tgzud" />
                            <button className="btn btn w-100 mt-3 text-dark" type="button" style={{ backgroundColor: '#ffde59' }} onClick={handleSendOtp} disabled={otpSent} >{otpSent ? "OTP Sent" : "Send OTP"} </button>
                        </form>
                        <div className="container">
                            {!ShowRegister && (
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
                            {ShowRegister && <div className="modal-backdrop fade show"></div>}
                            {ShowRegister && (
                                <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" style={{ display: 'block' }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                {/* <h5 className="modal-title" id="exampleModalLabel">Register</h5> */}
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowRegister(false)}></button>
                                            </div>
                                            <div className="modal-body">
                                                <Register />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <p className="fs-6 fw-bold text-dark text-center p-2 mt-2">OR Login with Google Account</p>
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

            <div style={{ clear: 'both' }}></div>
            <div class="container">
                <div aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className="text-decoration-none text-dark mx-2" to='/'>HOME</Link></li>
                        <li class="breadcrumb-item active" aria-current="page"><Link className="text-decoration-none text-dark" to='/Prawns.jsx'>READY TO COOK</Link></li>
                        <li class="breadcrumb-item active" aria-current="page"><Link className="text-decoration-none text-dark">SAMOSA WITH TOMATO SAUCE</Link></li>
                    </ol>
                </div>
            </div>


            <div className="container" id={styles.customizeimg}>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="border rounded">
                            <a href="#">
                                <img src={R2} className="img-responsive rounded w-100" alt="Image" id={styles.cart_image} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h6 className="fw-semibold mb-1" id={styles.cart_item}>Samosa with Tomato Flavor Sauce</h6>
                        <a href="#" class="text-decoration-none text-dark mb-2" ><span id={styles.rate}>₹350 Per Pack <span style={{ textDecoration: 'line-through' }} class="px-2">₹399</span></span></a>
                        <div class="mt-2 fw-bold fs-7" id={styles.totalprice}>(Total Price:238)</div>
                        <div className="mt-2">
                            <button class="bg-warning rounded text-white fw-bolder" id={styles.inc} onClick={decrementQuantity}>-</button>
                            <input type="text" className="text-center text-dark fw-bold border-0 mx-2" value={quantity} readOnly />
                            <button class="bg-warning rounded text-white fw-bolder" id={styles.dec} onClick={incrementQuantity}>+</button>
                        </div>
                        <Link class=" btn btn-sm btn-warning text-white mt-2" id={styles.addtocart} data-bs-toggle="modal" data-bs-target="#exampleModal" >ADD TO CART</Link>


                        <p className="fw-bold mt-2">Storage Insturctions:
                            <p className="fs-7 fw-normal">Store Under Refrigeration at 4*C or below in Hygenic</p>
                        </p>

                        <div class="mt-1"><p className="fw-bold">Marketed By:
                            <p className="fs-7 mt-1 fw-normal">Deliaura Private Limited No.201, 2nd floor, Carlton
                                Towers No.1, Old airport road, Bhubaneshwar, Orrisa
                                560000
                            </p></p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal  */}
            <div className="modal fade" style={{ fontSize: '14px' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title text-center mx-5 px-4 fw-bold">
                                Accomplishments For Chicken (Optional)
                            </h6>
                            <button type="button" className="btn-close btn text-dark btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <table className="table text-center" id={styles.extra}>
                                <tr className="bg-light p-2">
                                    <td> <img src={R1} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" /> </td>
                                </tr>
                                <tr className=" p-2">
                                    <td> <img src={R2} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option2"/> </td>
                                </tr>
                                <tr className="bg-light p-2">
                                    <td> <img src={R2} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option3"/> </td>
                                </tr>
                                <tr className=" p-2">
                                    <td> <img src={R2} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option4"/> </td>
                                </tr>
                                <tr className="bg-light p-2">
                                    <td> <img src={R2} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option5"/> </td>
                                </tr>
                                <tr className="p-2">
                                    <td> <img src={R2} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option6" /> </td>
                                </tr>
                                <tr className="p-1">
                                    <td colSpan={4} className="text-center">
                                        <Link to='/ProceedPay.jsx' type="button" className="btn bg-warning text-white mt-1" id={styles.totalwextra}> PROCEED WITH PAYMENT</Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mb-5 mt-4">
                <h6 className="fw-bold">Related products</h6>
                <div className={`${styles.slickslider}`}>
                    <Slider {...settings} className="mt-4">
                        <div className={`card shadow ${styles.card} border-0`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R1} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Premium Grade | Gutted | Whole Fish</h6>
                                <p>Premium Mackerel (Bangda/Kanangeluthi/Kanakatha/Ayala) Small - Whole, Cleaned</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹199 </p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark">
                                        Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R2} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Premium grade | Whole fish | Gutted</h6>
                                <p>Mackerel (Bangda/Kanangeluthi/Kanakatha/Ayala)Medium - Whole Cleaned & Gutted</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark">
                                        Add to cart</a>
                                </div>
                            </div>
                        </div >

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R3} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Kane/Poovan | Seawater Fish | Gutted | Whole Fish</h6>
                                <p>Lady Fish (Kane/Kilangan/Poovan) Small - Whole, Cleaned</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹305</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark">Add to cart</a>
                                </div>
                            </div>
                        </div >

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R4} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Cleaned | Whole Fish
                                </h6>
                                <p>Lady Fish Small - Whole, Cleaned (Mini Pack)</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R5} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Squid </h6>
                                <p>Squid (Bandase/Kanava/Oosi Kanawa/Kanavai/ koonthal) - Rings </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R6} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Seafood | Sliced rings | Cleaned</h6>
                                <p>Indian Salmon (Rawas/Gurjali) Medium - Fry Cut</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R7} className="img-fluid w-100 rounded-top bg-light" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">With Tail | Deveined | Large Sized</h6>
                                <p>Tiger Prawns / Choodan Chemmeen Extra Large - Cleaned & Deviened, With Tail</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹355</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R8} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Surmai | Cubes | boneless</h6>
                                <p>Seer (Anjal/Vanjaram/Neyi Meen) - Boneless Cubes </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹315</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R9} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Whole | Seawater Fish | Gutted</h6>
                                <p>White Pomfret Vellai Vaaval / Machan  Extra Small - Whole, Cleaned & Gutted</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹109</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={R2} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">With Tail | Deveined | Large Sized</h6>
                                <p>Malabar Tongue Sole (Nangu/Naaku Meen/Virahi/Manthal) Medium - Whole, Cleaned With Head</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹305</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </Slider >
                </div>
            </div >
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

export default ReadyToCookCustomize;