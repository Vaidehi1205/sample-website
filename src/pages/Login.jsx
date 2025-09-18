import React, { useState } from 'react'

function Login() {
    const [forms, setForms] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });
        if (error[name]) {
            setError({ ...error, [name]: "" });
        }
    }

    const validate = () => {
        let newErrors = {};
        if (!forms.email.trim()) {
            newErrors.email = "Email is required";
        }
        if (!forms.password.trim()) {
            newErrors.password = "Password is required";
        }
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const ValidateErrors = validate();
        if (Object.keys(ValidateErrors).length > 0) {
            setError(ValidateErrors);
        } else {
            setError({});
            alert("Form Submited");
        }
    }

    const handleClear = () => {
        setForms({ email: "", password: "" });
        setError({});
    }



    return (
        <div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <img src="/img/login.jpg" className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}><div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${error.email ? "is-invalid" : ""}`}
                                id="email"
                                name="email"
                                placeholder="Enter Email Address"
                                autoComplete='off'
                                value={forms.email}
                                onChange={handleChange}
                            />
                            {error.email && (<div className='invalid-feedback'>{error.email}</div>)}
                        </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${error.password ? "is-invalid" : ""}`}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    autoComplete='off'
                                    value={forms.password}
                                    onChange={handleChange}
                                />
                                {error.password && (<div className='invalid-feedback'>{error.password}</div>)}
                            </div>
                            <button type="submit" class="btn btn-success">Login</button>
                            <button type="button" class="btn btn-secondary ms-2" onClick={handleClear}>Clear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login