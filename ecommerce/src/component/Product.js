import React, { useEffect, useState } from 'react'
import { getallproduct } from '../api/adminApi'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";



const Product = () => {
  const [product, setProduct] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    getallproduct()
      .then(data => {
        if (data.err) {
          setError(data.error)


        }
        else {
          setProduct(data)
          console.log(data)


        }

      })


  }, [])
  const getRandomProducts = () => {
    const shuffledProducts = [...product].sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(4, 4); // Adjust the number to change the grid size
  };

  const randomProducts = getRandomProducts();

  return (
    <>
      <hr />
      <h1 className="custom-product text-muted">Products</h1>

      <div className="col-12">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

          {
            product && product.map((p, i) => {
              return <div className="col p-3">
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


        </div>

      </div>
    </>
  )
}

export default Product