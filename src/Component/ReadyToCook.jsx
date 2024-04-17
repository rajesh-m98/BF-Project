import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faIndianRupeeSign, faPhone, faRupee, faShoppingCart, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { Link } from "react-router-dom";
import Google from "./images/google.jpg"
import Register from "./Register";
import R1 from "./images/readytocook/r1.jpg"
import R2 from "./images/readytocook/r2.jpg"
import R3 from "./images/readytocook/r3.jpg"
import R4 from "./images/readytocook/r4.jpg"
import R5 from "./images/readytocook/r5.jpg"
import R6 from "./images/readytocook/r6.jpg"
import R7 from "./images/readytocook/r7.jpg"
import R8 from "./images/readytocook/r8.jpg"
import R9 from "./images/readytocook/r9.jpg"

const ReadyToCook = () => {

    // Fetching data's by id

    const products = [
        {
          id: '1',
          img: R1,
          dish: 'Mud Crab',
          description: 'Three Spotted Crabs that are consistent in size for an even cook.',
          title: 'Mud Crab',
          price: '230/-',
          dollar: '4,600$',
        },
        {
          id: '2',
          img: R2,
          dish: 'Lamb Curry Cut',
          description: 'Perfect balance of fat & meat Weight: 500g | 15-22 pieces | Serves 2-3',
          title: 'Lamb Curry Cut',
          price: '570/-',
          dollar: '4,600$',
        },
        {
          id: '3',
          img: R3,
          dish: 'Pure Goat Mince',
          description: 'Finely ground goat mince for curries, kebabs & more',
          title: 'Pure Goat Mince',
          price: '980/-',
          dollar: '4,600$',
        },
        {
          id: '4',
          img: R4,
          dish: 'Classic Chicken Salami',
          description: 'Sandwiches, salads, canapes, crackers',
          title: 'Chicken Salami',
          price: '130/-',
          dollar: '4,600$',
        },
        {
          id: '5',
          img: R5,
          dish: 'Yummy Chicken Cutlets',
          description: 'Melt in your mouth amazing Chicken Cutlets Weight: 160g | 3-5 pieces | Serves 2',
          title: 'Chicken Cutlets',
          price: '250/-',
          dollar: '4,600$',
        },
        {
          id: '6',
          img: R6,
          dish: 'Chicken Curry Cut - Pieces',
          description: 'Bone-in | Large cuts | Curry Cut Weight: 500gms | 6-7 pieces | Serves 2',
          title: 'Chicken Curry Cut',
          price: '690/-',
          dollar: '4,600$',
        },
        {
          id: '7',
          img: R7,
          dish: 'Chicken Liver',
          description: 'Offal Cuts | Cleaned | Fresh Weight: 500gms | 6-7 pieces | Serves 2',
          title: 'Chicken Liver',
          price: '560/-',
          dollar: '4,600$',
        },
        {
          id: '8',
          img: R8,
          dish: 'Mackerel Medium',
          description: 'Premium grade | Whole fish | Gutted Weight: 500gms | 6-7 pieces | Serves 2',
          title: 'Mackerel Fish',
          price: '560/-',
          dollar: '4,600$',
        },
        {
          id: '9',
          img: R9,
          dish: 'Cage Free Country Eggs - Pack of 12',
          description: 'Eggs from country hens raised outside cages - Pack of 12 Eggs',
          title: 'Country Eggs',
          price: '250/-',
          dollar: '4,600$',
        }
      ];
      
      
      
 
    let setData = {}; // Initializing-empty object
    function addCart(count) {
        for (let i = 0; i <=products.length - 1; i++) {
            if (products[i].id === count) {
                setData = products[i];
                break;
            }
        }
        // console.log(setData);
        sessionStorage.setItem('setData', JSON.stringify(setData));
        window.location.href = "./ReadyToCookAddCart.jsx";
        
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

            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <Link to='/' className="text-decoration-none text-dark">HOME  <FontAwesomeIcon icon={faAngleRight} className="mx-1" style={{ fontSize: '12px' }}></FontAwesomeIcon> </Link>
                        <Link to='/ReadyToCook.jsx' className="text-decoration-none text-dark mx-1">READY TO COOK</Link>
                    </div>
                </div>
            </div>

            <div className="container" id={styles.deliauraspecials}>
                <div className="row mt-3">
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[0].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[0].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[0].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[0].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[0].price} <strike id={styles.lowprice}> {products[0].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('1') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[1].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[1].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[1].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[1].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[1].price} <strike id={styles.lowprice}> {products[1].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('2') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[2].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[2].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[2].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[2].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[2].price} <strike id={styles.lowprice}> {products[2].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('3') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[3].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[3].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[3].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[3].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[3].price} <strike id={styles.lowprice}> {products[3].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('4') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[4].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[4].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[4].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[4].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[4].price} <strike id={styles.lowprice}> {products[4].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('5') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[5].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[5].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[5].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[5].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[5].price} <strike id={styles.lowprice}> {products[5].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('6') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[6].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[6].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[6].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[6].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[6].price} <strike id={styles.lowprice}> {products[6].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('7') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[7].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[7].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[7].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[7].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[7].price} <strike id={styles.lowprice}> {products[7].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('8') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[8].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[8].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[8].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[8].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[8].price} <strike id={styles.lowprice}> {products[8].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ReadyToCookAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('9') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <a href="#" className="btn rounded text-white px-2" id={styles.button}>View All</a>
                    </div>
                </div >
            </div>

            {/* <div className="container" id={styles.deliauraspecials}>
                <div className="row mt-3">
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={details[0].image} alt="Mud Crab" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{details[0].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{details[0].description} </p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{details[0].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{details[0].price}<strike id={styles.lowprice}>{details[0].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <button id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('1') }}>{details[0].add}</button>
                                <button id={styles.button} className="btn text-white col-md-4 mx-3" >{details[0].option}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={details[1].image} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{details[1].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{details[1].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{details[1].title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{details[1].price}<strike id={styles.lowprice}> {details[1].dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <button id={styles.button} className="btn text-white col-md-4 " onClick={() => { addCart('2') }}>{details[1].add}</button>
                                <button id={styles.button} className="btn text-white col-md-4 mx-3" >{details[0].option}</button>
                            </div>
                        </div>
                    </div> */}
                {/* </div >
            </div> */}
            {/* <div className="container" id={styles.deliauraspecials}> 
                <div className="row mt-3">
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R1} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Brown Eggs - Pack of 12</a>
                            <p className="product-text" id={styles.productdescription}>Brown Shelled Eggs | Pale Yellow Yolk Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Eggs</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>450/- <strike id={styles.lowprice}> 4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenCustomize.jsx' id={styles.button} className="btn text-white col-md-4">Customize</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R2} alt="Mud Crab" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Mud Crab</a>
                            <p className="product-text" id={styles.productdescription}>Three Spotted Crabs that are consistent in size for an even cook. </p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Mud Crab</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>230/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R3} alt="Lamb Curry Cut" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Lamb Curry Cut</a>
                            <p className="product-text" id={styles.productdescription}>Perfect balance of fat &amp; meat Weight: 500g | 15-22 pieces | Serves 2-3</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Lamb Curry Cut</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>570/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R4} alt="Pure Goat Mince" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Pure Goat Mince</a>
                            <p className="product-text" id={styles.productdescription}>Finely ground goat mince for curries,kebabs &amp; more</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Pure Goat Mince</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>980/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R5} alt="Classic Chicken Salami" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Classic Chicken Salami</a>
                            <p className="product-text" id={styles.productdescription}>dgcfvhbjnkm, fcvghbjnkml,Sandwiches, salads, canapes, crackers</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Salami</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>130/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R6} alt="Yummy Chicken Cutlets" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Yummy Chicken Cutlets</a>
                            <p className="product-text" id={styles.productdescription}>Melt in your mouth amazing Chicken Cutlets Weight: 160g | 3-5 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Cutlets</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>250/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R7} alt="Chicken Curry Cut - Large Pieces" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Chicken Curry Cut - Pieces</a>
                            <p className="product-text" id={styles.productdescription}>Bone-in | Large cuts | Curry Cut Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Curry Cut </p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>690/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R8} alt="Chicken Liver" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Chicken Liver</a>
                            <p className="product-text" id={styles.productdescription}>Offal Cuts | Cleaned | Fresh Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Liver</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>560/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R9} alt="Mackerel Medium" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Mackerel Medium</a>
                            <p className="product-text" id={styles.productdescription}>Premium grade | Whole fish | Gutted Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Mackerel Fish</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>560/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R2} alt="Cage Free Country Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Cage Free Country </a>
                            <p className="product-text" id={styles.productdescription}>Eggs from country hens raised outside cages - Pack of 12 Eggs</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Country Eggs</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>250/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R1} alt="Cage Free Country Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Cage Free Country </a>
                            <p className="product-text" id={styles.productdescription}>Eggs from country hens raised outside cages - Pack of 12 Eggs</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Country Eggs</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>250/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R3} alt="Cage Free Country Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Cage Free Country </a>
                            <p className="product-text" id={styles.productdescription}>Eggs from country hens raised outside cages - Pack of 12 Eggs</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Country Eggs</p>
                            <div className="d-grid mt-3 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>250/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4">Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="text-center mt-5 mb-5">
                        <a href="#" className="btn rounded text-white px-2" id={styles.button}>View All</a>
                    </div>
                </div >
            </div> */}
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

export default ReadyToCook


