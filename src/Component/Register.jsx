import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subscribe: false,
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        const newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email address is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        }
        if (!formData.termsAccepted) {
            newErrors.termsAccepted = 'You must accept the Terms and Conditions';
        }
        setErrors(newErrors);

        // If no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            // Submit the form data
            console.log(formData);
        }
    };

    const isValidEmail = (email) => {
        // Basic email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className="container w-75">
            <h2 className="text-center mt-1">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label"> First Name<span className="text-danger">*</span>
                    </label>
                    <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label"> Last Name<span className="text-danger">*</span>
                    </label>
                    <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"> Email Address<span className="text-danger">*</span>
                    </label>
                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" name="email" value={formData.email} onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label"> Phone Number<span className="text-danger">*</span>
                    </label>
                    <input type="tel" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="subscribe" name="subscribe" checked={formData.subscribe} onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="subscribe"> Subscribe to our newsletter
                    </label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`} id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="termsAccepted"> * By clicking the Register button you are accepting the Terms and Conditions of Freshtohome
                    </label>
                    {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
                </div>
                <div className='text-center'>
                    <Link to='/Profile.jsx' type="submit" className="btn btn-primary">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
