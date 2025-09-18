import React, { Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import PageNotFound from './components/PageNotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'

function App() {
  const Products = React.lazy(() => import('./pages/Products'));
  const About = React.lazy(() => import('./pages/About'));
  return (
    <>
      <Router>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <Header />
            </div>
          </div>
        </div>

        <Routes>
          <Route path='/' element={
            <>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12'>
                    <Slider />
                  </div>
                </div>

                <div className='container my-3 gap-5'>
                  <h2>Premium Anime Figurin</h2>
                  <div className='row mb-3 my-2'>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                      <Product imgSrc="/img/card5.jpeg" discription="A premium four-piece Naruto figure set featuring highly detailed poses of fan-favorite characters." />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 '>
                      <Product imgSrc="/img/card7.jpeg" discription="Dynamic Demon Slayer Tanjiro figure wielding sword in mid-battle action stance." />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 '>
                      <Product imgSrc="/img/card10.jpeg" discription="Elegant Nezuko Kamado anime figure in pink kimono with signature bamboo muzzle accessory." />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                      <Product imgSrc="/img/card9.jpg" discription="Collectible Tanjiro Kamado figurine with checkered haori and raised sword for display" />
                    </div>
                  </div>
                </div>
              </div>

            </>
          } />
          <Route path='/products' element={
            <Suspense fallback={<div>Loading Products...</div>}>
              <Products />
            </Suspense>}></Route>
          <Route path='/about' element={
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-10 mx-auto my-5'>
                      <About />
                    </div>
                  </div>
                </div>
              </Suspense>
            </>
          } />
          <Route path='/services' element={
            <>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-10 mx-auto my-5'>
                    <Services />
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path='/contact' element={
            <>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-10 mx-auto my-5'>
                    <Contact />
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <Footer />
            </div>
          </div>
        </div>


      </Router>
    </>
  )
}

export default App
