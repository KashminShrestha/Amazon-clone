import React from 'react'
import { Link } from 'react-router-dom'

const Data = ({ p }) => {
    return (
        <>

            <div className="card p-3 w-25 " style={{ height: "400px" }}>

                <div className="d-flex justify-content-between align-items-center ">
                    <div className="mt-2">
                        <h4 className="text-uppercase">{p.category}</h4>
                        <div className="mt-5">
                            <h5 className="text-uppercase mb-0">{p.title}</h5>
                            <div className="d-flex flex-row user-ratings">
                                <div className="ratings">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <h6 className="text-muted ml-1">{p.rating.rate}/5</h6>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={p.image} height="350" width="200" alt="..." />
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <span><b>{p.price}</b></span>
                    <div className="colors">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>


                <p className='text-truncate'>{p.description}</p>

                <Link to={`/product/${p.id}`}><button className="btn btn-danger">View details</button></Link>
            </div>

        </>
    )
}

export default Data