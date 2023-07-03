import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


const PaymentSuccess = () => {
  // const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className="alert alert-success">
        Payment Completed
        please go to  <Link to="/">HomePage</Link>
      </div>
      <Footer />
    </>

  )
}

export default PaymentSuccess