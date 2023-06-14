import React from 'react'
import { Link } from 'react-router-dom'

const Display = (props) => {
  let { name, location, image } = props//destructuring
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{location}</p>
          <Link href="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>

    </>
  )
}

export default Display