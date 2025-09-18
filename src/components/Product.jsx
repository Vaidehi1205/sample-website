import React from 'react'


function Product(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <p className="card-text">{props.discription}</p>
        </div>
      </div>

</div>
  )
}

export default Product