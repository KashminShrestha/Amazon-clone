import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'


const PaymentSuccess = () => {
  return (
    <>
    <Navbar/>
    <div className="alert alert-success">
        Payment Completed
    </div>
    <Footer/>
    </>
    
  )
}

export default PaymentSuccess