import React, { useState } from 'react';

function Register() {
    const [forms, setForms] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });
        if (error[name]) {
            setError({ ...error, [name]: "" });
        }
    };

    const validate = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[6-9]\d{9}$/; // Indian 10-digit number

        if (!forms.name.trim()) newErrors.name = "Name is required";

        if (!forms.mobile.trim()) newErrors.mobile = "Mobile no. is required";
        else if (!mobileRegex.test(forms.mobile))
            newErrors.mobile = "Enter a valid 10-digit mobile number";

        if (!forms.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(forms.email))
            newErrors.email = "Enter a valid email";

        if (!forms.password.trim()) newErrors.password = "Password is required";
        else if (forms.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!forms.cpassword.trim()) newErrors.cpassword = "Please confirm password";
        else if (forms.password !== forms.cpassword)
            newErrors.cpassword = "Passwords do not match";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setError(validateErrors);
        } else {
            setError({});
            alert("✅ Form Submitted Successfully!");
            console.log("User Data:", forms);
        }
    };

    const handleClear = () => {
        setForms({ name: "", mobile: "", email: "", password: "", cpassword: "" });
        setError({});
    };

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="/img/register.jpg" className="img-fluid" alt="Register" />
                </div>
                <div className="col-md-6">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        {["name","mobile","email","password","cpassword"].map((field, i) => (
                            <div className="mb-3" key={i}>
                                <label htmlFor={field} className="form-label">
                                    {field === "cpassword" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                                    className={`form-control ${error[field] ? "is-invalid" : ""}`}
                                    id={field}
                                    name={field}
                                    placeholder={`Enter ${field}`}
                                    autoComplete="off"
                                    value={forms[field]}
                                    onChange={handleChange}
                                />
                                {error[field] && <div className="invalid-feedback">{error[field]}</div>}
                            </div>
                        ))}

                        <button type="submit" className="btn btn-success">Register</button>
                        <button type="button" className="btn btn-secondary ms-2" onClick={handleClear}>Clear</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
