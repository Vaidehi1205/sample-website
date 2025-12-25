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
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });

        // Clear the error for that field as user types
        if (error[name]) {
            setError({ ...error, [name]: "" });
        }

        // Clear success message on any change
        setSuccessMessage("");
    };

    const validate = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[6-9]\d{9}$/;

        if (!forms.name.trim()) newErrors.name = "Name is required";

        if (!forms.mobile.trim()) newErrors.mobile = "Mobile number is required";
        else if (!mobileRegex.test(forms.mobile))
            newErrors.mobile = "Enter a valid 10-digit mobile number";

        if (!forms.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(forms.email))
            newErrors.email = "Enter a valid email";

        if (!forms.password.trim()) newErrors.password = "Password is required";
        else if (forms.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!forms.cpassword.trim()) newErrors.cpassword = "Please confirm your password";
        else if (forms.password !== forms.cpassword)
            newErrors.cpassword = "Passwords do not match";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            setSuccessMessage("");
        } else {
            setError({});
            setSuccessMessage("✅ Form Submitted Successfully!");
            console.log("User Data:", forms);
        }
    };

    const handleClear = () => {
        setForms({ name: "", mobile: "", email: "", password: "", cpassword: "" });
        setError({});
        setSuccessMessage("");
    };

    // Helper function to determine input type
    const getInputType = (field) => {
        if (field.includes("password")) return "password";
        if (field === "email") return "email";
        if (field === "mobile") return "tel";
        return "text";
    };

    return (
        <div className="container mt-4">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="/img/register.jpg" className="img-fluid" alt="Register" />
                </div>
                <div className="col-md-6">
                    <h1 className="mb-4">Register</h1>

                    {/* Success Message */}
                    {successMessage && (
                        <div className="alert alert-success" role="alert">
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                        {["name", "mobile", "email", "password", "cpassword"].map((field, i) => (
                            <div className="mb-3" key={i}>
                                <label htmlFor={field} className="form-label">
                                    {field === "cpassword" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type={getInputType(field)}
                                    className={`form-control ${error[field] ? "is-invalid" : ""}`}
                                    id={field}
                                    name={field}
                                    placeholder={
                                        field === "cpassword"
                                            ? "Confirm your password"
                                            : `Enter your ${field}`
                                    }
                                    autoComplete={field.includes("password") ? "new-password" : "off"}
                                    value={forms[field]}
                                    onChange={handleChange}
                                    inputMode={field === "mobile" ? "numeric" : undefined}
                                    maxLength={field === "mobile" ? 10 : undefined}
                                    pattern={field === "mobile" ? "[6-9][0-9]{9}" : undefined}
                                    aria-describedby={error[field] ? `${field}-error` : undefined}
                                />
                                {error[field] && (
                                    <div id={`${field}-error`} className="invalid-feedback">
                                        {error[field]}
                                    </div>
                                )}
                            </div>
                        ))}

                        <button type="submit" className="btn btn-success">
                            Register
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary ms-2"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
