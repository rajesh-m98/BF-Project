import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="container text-center d-flex align-items-center justify-content-center mt-5 w-25 rounded" id={styles.login}>
                <div className="row p-3">
                <h1 className="fs-3 col-md-12">Login</h1>
                    <div className="col-lg-12 col-xl-6">
                        <form action="" method="post">
                            <div className="form-outline mt-2">
                                <label for="user_username" className="form-label">
                                    <input type="text" value="" name="user_username" id="user_username" className="form-control" placeholder="Username" autocomplete="off" required="" fdprocessedid="o6jlvk"/>
                                </label></div>
                            <div className="form-outline mt-2">
                                <label for="user_password" className="form-label">
                                    <input type="text" value="" name="user_password" id="user_password" className="form-control" placeholder="Password" autocomplete="off" required="" fdprocessedid="nc9wq"/>
                                </label></div>
                            <div className="text-center">
                                <button className="btn btn-success btn-borderless mt-3">Login</button>
                                    <p className="fs-6 mt-4">Don't have an account? <Link to='/Register.jsx' className="fs-6 text-primary text-decoration-underline fw-bold">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login