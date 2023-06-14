import React, { useState } from "react";
import { forgetPassword } from "../api/userApi";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Forget = () => {
  let [email, setEmail] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    forgetPassword(email).then((data) => {
      if (data.err) {
        setError(data.err);
      } else {
        setSuccess(data.msg);
      }
    });
  };
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
      <form className="w-25 my-5 m-auto shadow-sm">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-warning w-100 mt-3" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Forget;
