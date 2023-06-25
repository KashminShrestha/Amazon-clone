import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null); // Define clientSecret here

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const fetchClientSecret = async () => {
      const response = await fetch(
        "YOUR_SERVER_ENDPOINT" // Replace with your server endpoint to fetch the client secret
      );
      const data = await response.json();

      setClientSecret(data.clientSecret);
    };

    fetchClientSecret();
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      // Stripe.js hasn't yet loaded or clientSecret is not available.
      // Make sure to disable form submission until Stripe.js has loaded and clientSecret is available.
      return;
    }

    setIsLoading(true);

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent.status === "succeeded") {
        console.log("HEYYY");
      }
    });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  };

  return (
    <>
      <div className="container1">
        <form id="payment-form" className="form" onSubmit={handleSubmit}>
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PaymentElement id="payment-element" options={paymentElementOptions} />
          <button className="button" disabled={isLoading || !stripe || !elements} id="submit">
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