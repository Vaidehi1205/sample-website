import React from 'react'

function About() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img src="/img/about.jpg" className='img-fluid' />
        </div>
        <div className='col-md-6'>
          <div>
            <h2>About AniWay</h2>
            <p>
              At AniWay, we share your love for anime culture. Our mission is to provide fans with exclusive, licensed figures that capture every detail of their favorite characters.
            </p>
            <p>
              We work directly with trusted suppliers to ensure authenticity, quality, and competitive pricing. From classic series to the latest releases, we make your anime dreams collectible.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About