import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                {/* Brand */}
                <Link className="navbar-brand fw-bold" to="/">
                    AniWay
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    {/* Left Links */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    {/* Auth Buttons */}
                    <div className="d-flex flex-column flex-lg-row mt-2 mt-lg-0">
                        <Link
                            to="/login"
                            className="btn btn-outline-primary me-lg-2 mb-2 mb-lg-0"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="btn btn-outline-success"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
