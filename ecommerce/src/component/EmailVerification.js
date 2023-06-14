import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { emailverification } from "../api/userApi";
import Navbar from "./Navbar";
import Footer from "./Footer";

const EmailVerification = () => {
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");
  let parmas = useParams();
  let token = parmas.token;
  useEffect(() => {
    emailverification(token).then((data) => {
      if (data.err) {
        setError(data.err);
      } else {
        setSuccess(data.message);
      }
    });
  }, []);
  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  };
  const showSuccess = () => {
    if (success) {
      return <div className="alert alert-success">{success}</div>;
    }
  };
  return (
    <>
      <Navbar />
      {showError()}
      {showSuccess()}
      <Link to="/signin">Go To SignIn</Link>
      <Footer />
    </>
  );
};

export default EmailVerification;
