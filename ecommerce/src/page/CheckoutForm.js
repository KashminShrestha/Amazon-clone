import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../api/userApi";
import { placeorder } from "../api/OrderApi";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    let shipping_info = useSelector(state => state.cart.shipping_info)
    let cart_item = useSelector(state => state.cart.cart_items)
    let user = isAuthenticated().user._id
    let total = JSON.parse(sessionStorage.getItem("order_summary")).cart_items_price
    console.log({ total, user, shipping_info, cart_item })


    let order_info = {
        orderItems: cart_item,
        user: user,
        shipping_address: shipping_info.address,
        total: total,
        alternative_shipping_address: shipping_info.alt_address,
        city: "kathmandu",
        zipcode: shipping_info.zip,
        country: "Nepal",
        phone: 9861339570,



    }
    // const[data,setData]=useState()
    const [error, setError] = useState("")


    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    // console.log(paymentIntent)



                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();


        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",

            confirmParams: {
                // Make sure to change this to your payment completion page
                // return_url: "http://localhost:3000/success",
                return_url: "",


            },
        });


        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (!error) {
            console.log(paymentIntent.status)
            placeorder(order_info)
                .then(data => {
                    if (data.error) {
                        swal("error", data.error, "error")

                    }
                    else {
                        localStorage.removeItem("cart_items")
                        navigate("/success")

                    }
                })


        }
        else if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }



        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <>
            <div className="container1">
                <form id="payment-form" className="form" onSubmit={handleSubmit}>
                    <LinkAuthenticationElement
                        id="link-authentication-element"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PaymentElement id="payment-element" options={paymentElementOptions} />
                    <button className="button" id="submit">
                        <span id="button-text">
                            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                        </span>
                    </button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </form>
            </div>
        </>
    );
}