import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./payment.css"
import { useSelector } from "react-redux";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51NMjhIISRWS9r7YnM0lIZxyKOHjE3srvc9BoRS8EOGjmFe9nLDwM3x7B8sxaqNJRe2Cmu7NShsePRyDH2N8GpO0300f3Hzsv0d");

export default function Payment() {
    const [clientSecret, setClientSecret] = useState("");
    // const cart_amount = useSelector(state => state.cart.cart_items.product_price)
    // console.log(cart_amount)
    let cart_amount = JSON.parse(sessionStorage.getItem("order_summary"))
    console.log(cart_amount.cart_items_price)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/paymentprocess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: cart_amount.cart_items_price * 100 }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}