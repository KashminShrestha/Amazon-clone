import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end">
              <li className="ms-3">
                <Link to="#" className="link-body-emphasis">
                  <FaTwitter />
                </Link>
              </li>
              <li className="ms-3">
                <Link to="#" className="link-body-emphasis">
                  <FaInstagram />
                </Link>
              </li>
              <li className="ms-3">
                <Link to="#" className="link-body-emphasis">
                  <FaFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
