import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    const [forms, setForms] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })

        if (error[name]) {
            setError({ ...error, [name]: "" })
        }
    }

    const validate = () => {
        let newErrors = {}

        if (!forms.email.trim()) {
            newErrors.email = "Email is required"
        }

        if (!forms.password.trim()) {
            newErrors.password = "Password is required"
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
            return
        }

        setError({})

        // ✅ credential check
        if (forms.email === "abc@gmail.com" && forms.password === "12345") {
            navigate('/dashboard')
        } else {
            alert("Invalid Credentials")
        }
    }

    const handleClear = () => {
        setForms({ email: "", password: "" })
        setError({})
    }

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="/img/login.jpg" className="img-fluid" alt="login" />
                </div>

                <div className="col-md-6">
                    <h1>Login</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${error.email ? "is-invalid" : ""}`}
                                placeholder="Enter Email Address"
                                value={forms.email}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {error.email && (
                                <div className="invalid-feedback">{error.email}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className={`form-control ${error.password ? "is-invalid" : ""}`}
                                placeholder="Enter your Password"
                                value={forms.password}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {error.password && (
                                <div className="invalid-feedback">{error.password}</div>
                            )}
                        </div>

                        <button type="submit" className="btn btn-success">
                            Login
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
    )
}

export default Login
