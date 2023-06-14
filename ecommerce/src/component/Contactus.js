import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="row ms-2 me-2 ">
        <div className="col-6 ">
          <div className="card">
            <div className="card-body">
              <div className="container px-2 py-5" id="icon-grid">
                <h2 className="pb-0 border-bottom">Contact Us</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                  <div className="col d-flex align-items-start">
                    <svg
                      className="bi text-muted flex-shrink-0 me-3"
                      width="1.75em"
                      height="1.75em"
                    ></svg>
                    <div>
                      <h3 className="fw-bold mb-0 fs-4">Visit us :</h3>
                      <br />
                      <p className="mb-0">
                        {" "}
                        <b>Address: </b>Jamal,Kathmandu
                      </p>
                      <p className="mb-0">
                        <b>Contact No: </b>+977-9800000000
                      </p>
                      <p className="mb-0">
                        <b>Email: </b>Jmlktm@mail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
