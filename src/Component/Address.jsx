import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

const Address= () => {
    return (
        <>
            <div className="container" id={styles.register}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-4 p-5 bg-light">
                            <p className="text-center fs-5 fw-bold">Point us to your Kitchen</p>
                            <form action="" method="" className="signform mt-2">
                                <div className="col-md-12 mt-2">
                                    <label id="area" className="text-dark col-md-4">Enter Your Area</label>
                                    <input type="text" name="area" id="area" className="col-md-8" />
                                </div>
                                {/* <img src="./images/sign-map.avif" className="img-fluid mt-2" /> */}
                                <div className="col-md-12 mt-2">
                                    <label id="name" className="text-dark col-md-4">Customer Name</label>
                                    <input type="text" name="name" id="name" className="col-md-8" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="flatnum" className="text-dark col-md-4">Flat No:</label>
                                    <input type="text" name="flatnum" id="flatnum" className="col-md-8" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="street" className="text-dark col-md-4">Street Name:</label>
                                    <input type="text" name="street" id="street" className="col-md-8" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="landmark" className="text-dark col-md-4">Landmark:</label>
                                    <input type="text" name="landmark" id="landmark" className="col-md-8" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="pincode" className="text-dark col-md-4">Pin Code:</label>
                                    <input type="text" name="pincode" id="pincode" className="col-md-8" />
                                </div>
                                <Link to='/Profile.jsx' className="btn btn w-100 mt-3 text-dark" type="button" style={{ backgroundColor: '#ffde59' }}>Save Address</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address