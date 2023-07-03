import React, { useEffect, useState } from "react";
import { getallproduct } from "../api/adminApi";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "../App.css"

const Myproducts = () => {
  const [product, setProduct] = useState([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [search, setSearch] = useState('')
  const [filterproduct, setFilterproduct] = useState([])


  useEffect(() => {
    getallproduct()
      .then(data => {
        if (data.err) {
          setError(data.error)


        }
        else {
          setProduct(data)
          console.log(data)
          setFilterproduct(data)


        }

      })

  }, [])

  const handlefilter = () => {
    console.log(search)
    setFilterproduct(product.filter(item => {
      return search.toLowerCase() === "" ?
        item : item.product_name.toLowerCase().includes(search.toLowerCase())
    }))
  }
  return (

    <>
      <div className="container-fluid mt-4">
        <div className="d-flex justify-content-end mb-4">
          <input type="search" className='form-control w-25' placeholder='search' onChange={e => setSearch(e.target.value)} onKeyUp={handlefilter} />
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-2">
            <h4 className="text-primary">Flash Sale</h4>
            <h4 className="text-warning">Deals of the day</h4>
            <h4 className="text-danger">New Products</h4>

            <h2 className="text-primary text-decoration-underline mt-3">Categories</h2>
            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Mobiles
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Laptops
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Dress
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Electronics
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Fitness and Gym
              </label>
            </div>
            <h2 className="text-primary text-decoration-underline mt-4">Prices</h2>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                All
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Above Nrs.1,00,000
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Nrs.70,000-Nrs.1,00,000
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Nrs.30,000-Nrs.70,0000
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Nrs.10,000-Nrs.30,000
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Below Nrs.10,000
              </label>
            </div>





          </div>
          <div className="col-10">
            <div className="row row-cols-1 row-cols-md-2 g-4">

              {
                filterproduct.length > 0 ?
                  <>{
                    filterproduct && filterproduct.map((p, i) => {
                      return <div className="col-lg-3">
                        <div className="card" key={i}>
                          <img src={`http://localhost:5000/${p.product_image}`} className="card-img-top custom-card-product" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{p.product_name}</h5>
                            {
                              p.rating &&
                              <ReactStars size={30} value={`${p.rating}`} />
                            }
                            <p className="card-text text-truncate">{p.product_description}</p>
                            <Link to={`/product/${p._id}`}><div className="btn btn-primary form-control">See More</div></Link>
                          </div>
                        </div>
                      </div>
                    })
                  }
                  </> : <div className="alert alert-danger"></div>

              }


            </div>



          </div>

        </div>
      </div>
    </>
  );
};

export default Myproducts;
