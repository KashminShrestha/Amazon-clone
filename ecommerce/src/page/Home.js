import React from 'react'
import Navbar from '../component/Navbar'
import Main from '../component/Main'
import Footer from '../component/Footer'
import "../mystyle.css"
import Carousel from '../component/Carousel'
import Product from '../component/Product'

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Product />
      <Main />
      <Footer />
    </>
  )
}

export default Home