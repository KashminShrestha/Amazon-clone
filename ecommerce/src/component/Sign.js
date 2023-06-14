import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../api/userApi";

const Sign = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password).then((data) => {
      if (error) {
        setError(data.err);
      } else {
        setSuccess(true);
        authenticate(data);
      }
    });
  };
  const showerror = () => {
    if (error) {
      return <div class="alert alert-danger">{error}</div>;
    }
  };
  const redirect = () => {
    if (success) {
      if (isAuthenticated().user.role === 0) {
        navigate("/");
      } else {
        navigate("/admin/dashboard");
      }
    }
  };

  return (
    <>
      {showerror()}
      {redirect()}
      <div class="container-fluid mt-5 mb-5 text-center custom-signin">
        <form class="form-signin w-25 m-auto border border-4 rounded-5 border-primary">
          <img
            class="mb-4 rounded-5"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Link to="/forgetpassword">Forget Password</Link>
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={handleSubmit}
          >
            Sign in
          </button>

          <button class="btn btn-lg btn-danger btn-block" type="submit">
            <Link to="/register">Dont Have account register</Link>
          </button>
          <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
      </div>
    </>
  );
};

export default Sign;
