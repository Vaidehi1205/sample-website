import React from 'react'

function Footer() {
  return (
    <div>
<footer className="bg-body-tertiary text-center">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      {/* Twitter */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
      {/* YouTube */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-youtube" /></a>
      {/* Instagram */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2020 Copyright:
    <a className="text-body" href="#">AniWayCollactables.com</a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  )
}

export default Footer