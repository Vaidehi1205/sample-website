import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error[name]) setError({ ...error, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/; // Indian 10-digit number

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!mobileRegex.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({});
      alert("✅ Message Sent Successfully!");
      console.log("📩 User Data:", formData);

      // Clear the form after successful submit
      setFormData({ name: "", email: "", mobile: "", message: "" });
    }
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", mobile: "", message: "" });
    setError({});
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6">
          <img src="/img/contact.jpg" alt="Contact" className="img-fluid" />
        </div>

        {/* Right Form */}
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${error.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {error.name && <div className="invalid-feedback">{error.name}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${error.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && <div className="invalid-feedback">{error.email}</div>}
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile no.</label>
              <input
                type="text"
                name="mobile"
                className={`form-control ${error.mobile ? "is-invalid" : ""}`}
                id="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
              {error.mobile && <div className="invalid-feedback">{error.mobile}</div>}
            </div>

            {/* Message */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                className={`form-control ${error.message ? "is-invalid" : ""}`}
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              {error.message && <div className="invalid-feedback">{error.message}</div>}
            </div>

            {/* Buttons */}
            <button type="submit" className="btn btn-primary">Send Message</button>
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

export default Contact;
