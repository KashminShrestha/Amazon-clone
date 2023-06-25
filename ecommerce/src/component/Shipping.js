import React, { useReducer } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { save_shipping } from "./Reducers/cartActions";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
    const info = useSelector((state) => state.cart.shipping_info);
    console.log(info);
    const dispatch = useDispatch();

    const shippingReducer = (state, event) => {
        return { ...state, [event.target.name]: event.target.value };
    };

    const [shipping_info, setShipping_info] = useReducer(shippingReducer, info);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(save_shipping(shipping_info));
    };
    const navigate = useNavigate()
    const handleShipping = (e) => {
        e.preventDefault()
        return navigate("/checkout")
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center text-primary">Shipping Details</h1>
                <div className="row">
                    <div className="col-md-9">
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="needs-validation" noValidate>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shipping_info.firstname || ""}
                                            id="firstName"
                                            name="firstname"
                                            onChange={setShipping_info}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shipping_info.lastname || ""}
                                            id="lastName"
                                            name="lastname"
                                            onChange={setShipping_info}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label">
                                            Username
                                        </label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">@</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={shipping_info.username || ""}
                                                id="username"
                                                name="username"
                                                onChange={setShipping_info}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">
                                            Email{" "}
                                            <span className="text-body-secondary">(Optional)</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={shipping_info.email || ""}
                                            id="email"
                                            name="email"
                                            onChange={setShipping_info}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shipping_info.address || ""}
                                            id="address"
                                            name="address"
                                            onChange={setShipping_info}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label">
                                            Address 2{" "}
                                            <span className="text-body-secondary">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shipping_info.alt_address || ""}
                                            id="address2"
                                            name="alt_address"
                                            onChange={setShipping_info}
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label">
                                            Zip
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={shipping_info.zip || ""}
                                            id="zip"
                                            name="zip"
                                            onChange={setShipping_info}
                                            required
                                        />
                                        <div className="invalid-feedback">Zip code required.</div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={handleSave}
                                >
                                    Save Info
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h1>Cart Details</h1>
                        <h3>
                            Cart Items:
                            {
                                JSON.parse(sessionStorage.getItem("order_summary"))
                                    .cart_items_number
                            }
                        </h3>
                        <h3>
                            Cart price:
                            {
                                JSON.parse(sessionStorage.getItem("order_summary"))
                                    .cart_items_price
                            }
                        </h3>
                        <button className="btn btn-primary form-control" onClick={handleShipping}>Proceed to checking</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Shipping;
