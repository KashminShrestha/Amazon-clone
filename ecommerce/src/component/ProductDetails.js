import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom';
import "./ProductDetails.css"
import { getproductdetail } from '../api/adminApi';
import ReactStars from "react-rating-stars-component";
import { add_item_to_cart } from './Reducers/cartActions';
import swal from "sweetalert";
import { useDispatch } from 'react-redux';


const ProductDetails = () => {

    const [product, setProduct] = useState({})
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        getproductdetail(id)
            .then(data => {
                if (data.err) {
                    console.log(data.err)
                }
                else {
                    setProduct(data)
                    console.log(data)
                }
            })


    }, [])
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(add_item_to_cart(id, 1))
        swal("congratulation!!", `${product.product_name} Added TO Cart`, "success")

    }

    return (
        <>
            <Navbar />
            <section id="services" className="services section-bg">
                <div className="container-fluid">
                    <div className="col-sm-12 text-center mb-4">
                        <Link className="btn btn-primary" target="_blank" to="http://paypal.me/skd1996"> Donate Now <i className="fa fa-dollar"></i></Link>
                    </div>
                    <div className="row row-sm">
                        <div className="col-md-6 _boxzoom">
                            <div className="zoom-thumb">
                                <ul className="piclist">
                                    <li><img src="https://s.fotorama.io/1.jpg" alt="" /></li>
                                    <li><img src="https://s.fotorama.io/2.jpg" alt="" /></li>
                                    <li><img src="https://s.fotorama.io/3.jpg" alt="" /></li>
                                    <li><img src="https://ucarecdn.com/382a5139-6712-4418-b25e-cc8ba69ab07f/-/stretch/off/-/resize/760x/" alt="" /></li>
                                </ul>
                            </div>
                            <div className="_product-images">
                                <div className="picZoomer">
                                    <img className="my_img" src={`http://localhost:5000/${product.product_image}`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="_product-detail-content">
                                <p className="_p-name"> {product.product_name} </p>
                                <div className="_p-price-box">
                                    <div className="p-list">
                                        <span> M.R.P. : <i className="fa fa-inr"></i> <del> 1399  </del>   </span>
                                        <span className="price"> Rs.{product.product_price} </span>
                                    </div>
                                    <div className="_p-add-cart">
                                        <div className="_p-qty">
                                            <span>Add Quantity</span>
                                            <div className="value-button decrease_" id="" value="Decrease Value">-</div>
                                            <input type="number" name="qty" id="number" value="1" />
                                            <div className="value-button increase_" id="" value="Increase Value">+</div>
                                        </div>
                                    </div>
                                    {
                                        product.rating &&
                                        <ReactStars size={30} value={`${product.rating}`} />
                                    }
                                    <span>{product.rating}</span>
                                    <div className="_p-features">
                                        <span> Description About this product:- </span>
                                        <span>{product.product_description}</span>
                                    </div>
                                    <form action="" method="post" accept-charset="utf-8">
                                        <ul className="spe_ul"></ul>
                                        <div className="_p-qty-and-cart">
                                            <div className="_p-add-cart">
                                                <button className="btn-theme btn buy-btn" tabindex="0">
                                                    <i className="fa fa-shopping-cart"></i> Buy Now
                                                </button>
                                                <button className="btn-theme btn btn-success" tabindex="0" onClick={handleSubmit}>
                                                    <i className="fa fa-shopping-cart"></i> Add to Cart
                                                </button>
                                                <input type="hidden" name="pid" value="18" />
                                                <input type="hidden" name="price" value="850" />
                                                <input type="hidden" name="url" value="" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 title_bx">
                            <h3 className="title"> Recent Post   </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 list-slider mt-4">
                            <div className="owl-carousel common_wd  owl-theme" id="recent_post">
                                <div className="item">
                                    <div className="sq_box shadow">
                                        <div className="pdis_img">
                                            <span className="wishlist">
                                                <Link alt="Add to Wish List" title="Add to Wish List" to="javascript:void(0);"> <i className="fa fa-heart"></i></Link>
                                            </span>
                                            <Link to="#">
                                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                                            </Link>
                                        </div>
                                        <h4 className="mb-1"> <Link to="details.php"> Milton Bottle </Link> </h4>
                                        <div className="price-box mb-2">
                                            <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                            <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                        </div>
                                        <div className="btn-box text-center">
                                            <Link className="btn btn-sm" to="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sq_box shadow">
                                        <div className="pdis_img">
                                            <span className="wishlist">
                                                <Link alt="Add to Wish List" title="Add to Wish List" to="javascript:void(0);"> <i className="fa fa-heart"></i></Link>
                                            </span>
                                            <Link to="#">
                                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                                            </Link>
                                        </div>
                                        <h4 className="mb-1"> <Link to="details.php"> Milton Bottle </Link> </h4>
                                        <div className="price-box mb-2">
                                            <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                            <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                        </div>
                                        <div className="btn-box text-center">
                                            <Link className="btn btn-sm" to="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sq_box shadow">
                                        <div className="pdis_img">
                                            <span className="wishlist">
                                                <Link alt="Add to Wish List" title="Add to Wish List" to="javascript:void(0);"> <i className="fa fa-heart"></i></Link>
                                            </span>
                                            <Link to="#">
                                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                                            </Link>
                                        </div>
                                        <h4 className="mb-1"> <Link to="#"> Milton Bottle </Link> </h4>
                                        <div className="price-box mb-2">
                                            <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                            <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                        </div>
                                        <div className="btn-box text-center">
                                            <Link className="btn btn-sm" to="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sq_box shadow">
                                        <div className="pdis_img">
                                            <span className="wishlist">
                                                <Link alt="Add to Wish List" title="Add to Wish List" to="javascript:void(0);"> <i className="fa fa-heart"></i></Link>
                                            </span>
                                            <Link to="#">
                                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                                            </Link>
                                        </div>
                                        <h4 className="mb-1"> <Link to="#"> Milton Bottle </Link> </h4>
                                        <div className="price-box mb-2">
                                            <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                            <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                        </div>
                                        <div className="btn-box text-center">
                                            <Link className="btn btn-sm" to="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sq_box shadow">
                                        <div className="pdis_img">
                                            <span className="wishlist">
                                                <Link alt="Add to Wish List" title="Add to Wish List" to="javascript:void(0);"> <i className="fa fa-heart"></i></Link>
                                            </span>
                                            <Link to="#">
                                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                                            </Link>
                                        </div>
                                        <h4 className="mb-1"> <Link to="details.php"> Milton Bottle </Link> </h4>
                                        <div className="price-box mb-2">
                                            <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                            <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                        </div>
                                        <div className="btn-box text-center">
                                            <Link className="btn btn-sm" to="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sq_box shadow">
                                        <div className="pdis_img">
                                            <span className="wishlist">
                                                <Link alt="Add to Wish List" title="Add to Wish List" to="javascript:void(0);"> <i className="fa fa-heart"></i></Link>
                                            </span>
                                            <Link to="#">
                                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                                            </Link>
                                        </div>
                                        <h4 className="mb-1"> <Link to="details.php"> Milton Bottle </Link> </h4>
                                        <div className="price-box mb-2">
                                            <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                            <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                        </div>
                                        <div className="btn-box text-center">
                                            <Link className="btn btn-sm" to="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sq_box shadow">
                                        <div className="pdis_img">
                                            <span className="wishlist">
                                                <Link alt="Add to Wish List" title="Add to Wish List" to="javascript:void(0);"> <i className="fa fa-heart"></i></Link>
                                            </span>
                                            <Link to="#">
                                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                                            </Link>
                                        </div>
                                        <h4 className="mb-1"> <Link to="details.php"> Milton Bottle </Link> </h4>
                                        <div className="price-box mb-2">
                                            <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                            <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                        </div>
                                        <div className="btn-box text-center">
                                            <Link className="btn btn-sm" to="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default ProductDetails