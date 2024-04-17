import React, { useState } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const ProceedPay = () => {

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
    return (
        <>
            <div className="container mt-5 border">
                <div className="row text-left">
                    <div className="d-flex align-items-start text-left">
                        <table className="table border w-25 col-md-4 p-2">
                            <tr className="nav flex-column" id="pills-tab" role="tablist">
                                <td className="nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none bg-light text-dark w-100 fw-semibold active"
                                        id="pills-accountdashboard-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-accountdashboard" type="button" role="tab"
                                        aria-controls="pills-accountdashboard" aria-selected="true" disabled >Account
                                        Dashboard</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-accountinformation-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-accountinformation" type="button" role="tab"
                                        aria-controls="pills-accountinformation" aria-selected="false">Account
                                        Information</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-addressbook-tab" data-bs-toggle="pill" data-bs-target="#pills-addressbook"
                                        type="button" role="tab" aria-controls="pills-addressbook"
                                        aria-selected="false">Address Book</button>

                                </td>
                            </tr>

                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative" id="pills-myorders-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-myorders" type="button" role="tab"
                                        aria-controls="pills-myorders" aria-selected="false">My Orders</button>

                                </td>
                            </tr>

                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-mysavedcards-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-mysavedcards" type="button" role="tab"
                                        aria-controls="pills-mysavedcards" aria-selected="false">My Saved Cards</button>

                                </td>
                            </tr>

                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-mydelicash-tab" data-bs-toggle="pill" data-bs-target="#pills-mydelicash"
                                        type="button" role="tab" aria-controls="pills-mydelicash" aria-selected="false">My
                                        DeliCash</button>

                                </td>
                            </tr>

                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-myreferrals-tab" data-bs-toggle="pill" data-bs-target="#pills-myreferrals"
                                        type="button" role="tab" aria-controls="pills-myreferrals" aria-selected="false">My
                                        Referrals</button>

                                </td>
                            </tr>

                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative"
                                        id="pills-mystorecredit-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-mystorecredit" type="button" role="tab"
                                        aria-controls="pills-mystorecredit" aria-selected="false">My Store Credit</button>

                                </td>
                            </tr>

                            <tr>
                                <td className="border nav-item" role="presentation">
                                    <button className="nav-link text-decoration-none text-dark fw-semibold position-relative" id="pills-logout-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-logout" type="button" role="tab"
                                        aria-controls="pills-logout" aria-selected="false">Logout</button>
                                </td>
                            </tr>

                        </table>
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
                                        </div>
                                </div>
                                <div className="tab-pane fade" id="pills-accountinformation" role="tabpanel"
                                    aria-labelledby="pills-accountinformation-tab">
                                    <p style={{ fontSize: '15px' }}>ACCOUNT INFORMATION</p>
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
        </>
    )
}

export default ProceedPay