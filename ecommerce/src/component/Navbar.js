import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"
import { isAuthenticated, signout } from './../api/userApi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let navigate = useNavigate()
  const handleSubmit = () => {
    signout()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          navigate("/signin")
        }
      })
  }
  const cart_items = useSelector(state => state.cart.cart_items.length)
  return (
    <>
      <div className="container-fluid mt-0 custon-navbar">
        <div className="row">
          <div className="col-3 ">
            <Link className="navbar-brand fs-2 fw-bold text-muted" to="/">Amazon</Link>
          </div>
          <div className="col-6 ">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
          <div className="col-3 d-flex justify-content-evenly">

            {
              isAuthenticated().user ?
                <>
                  <Link to="/cart"><i className="bi bi-cart-check fs-2 position-relative">
                    <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                      {
                        cart_items
                      }
                      <span class="visually-hidden">unread messages</span>
                    </span></i></Link>
                  <Link to="/logout"><i className="bi bi-box-arrow-in-left fs-2" onClick={handleSubmit}></i></Link>
                </>
                :
                <>
                  <Link to="/signin"><i className="bi bi-arrow-in-right fs-2"></i></Link>
                  <Link to="/register"><i className="bi bi-download fs-2"></i></Link>
                </>

            }

          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./services.html">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar