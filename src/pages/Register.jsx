import React, { useState } from "react";

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

        // block non-numeric input for mobile
        if (name === "mobile" && !/^\d*$/.test(value)) return;

        setForms({ ...forms, [name]: value });

        if (error[name]) {
            setError({ ...error, [name]: "" });
        }

        setSuccessMessage("");
    };

    const validate = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[6-9]\d{9}$/;

        const data = {
            ...forms,
            name: forms.name.trim(),
            mobile: forms.mobile.trim(),
            email: forms.email.trim(),
            password: forms.password.trim(),
            cpassword: forms.cpassword.trim(),
        };

        if (!data.name) newErrors.name = "Name is required";

        if (!data.mobile)
            newErrors.mobile = "Mobile number is required";
        else if (!mobileRegex.test(data.mobile))
            newErrors.mobile = "Enter a valid 10-digit mobile number";

        if (!data.email)
            newErrors.email = "Email is required";
        else if (!emailRegex.test(data.email))
            newErrors.email = "Enter a valid email";

        if (!data.password)
            newErrors.password = "Password is required";
        else if (data.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!data.cpassword)
            newErrors.cpassword = "Please confirm your password";
        else if (data.password !== data.cpassword)
            newErrors.cpassword = "Passwords do not match";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            setSuccessMessage("");
            return;
        }

        setError({});
        setSuccessMessage("✅ Registration successful!");

        console.log("User Data:", forms);

        setTimeout(() => setSuccessMessage(""), 3000);
    };

    const handleClear = () => {
        setForms({
            name: "",
            mobile: "",
            email: "",
            password: "",
            cpassword: "",
        });
        setError({});
        setSuccessMessage("");
    };

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
                    <img
                        src="/img/register.jpg"
                        className="img-fluid"
                        alt="Register"
                    />
                </div>

                <div className="col-md-6">
                    <h1 className="mb-4">Register</h1>

                    {successMessage && (
                        <div className="alert alert-success">
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                        {["name", "mobile", "email", "password", "cpassword"].map(
                            (field) => (
                                <div className="mb-3" key={field}>
                                    <label className="form-label">
                                        {field === "cpassword"
                                            ? "Confirm Password"
                                            : field.charAt(0).toUpperCase() +
                                              field.slice(1)}
                                    </label>

                                    <input
                                        type={getInputType(field)}
                                        name={field}
                                        value={forms[field]}
                                        onChange={handleChange}
                                        className={`form-control ${
                                            error[field] ? "is-invalid" : ""
                                        }`}
                                        placeholder={
                                            field === "cpassword"
                                                ? "Confirm your password"
                                                : `Enter your ${field}`
                                        }
                                        autoComplete={
                                            field.includes("password")
                                                ? "new-password"
                                                : "off"
                                        }
                                        maxLength={
                                            field === "mobile" ? 10 : undefined
                                        }
                                        inputMode={
                                            field === "mobile"
                                                ? "numeric"
                                                : undefined
                                        }
                                    />

                                    {error[field] && (
                                        <div className="invalid-feedback">
                                            {error[field]}
                                        </div>
                                    )}
                                </div>
                            )
                        )}

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
