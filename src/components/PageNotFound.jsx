import React from "react"
import { Link } from "react-router-dom"
function PageNotFound() {
  return (
    <div>
      <div className="pnf">
        <img src="/img/pnf.jpg" className="img-fluid" />
        <Link to="/" className="btnLink">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound