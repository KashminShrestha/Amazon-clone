import React from "react";

const DataFetch = ({ p, key }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img
            src="https://imgs.search.brave.com/ceQErYxaonXPK0DI2EOfJfQMOk0THnBq2REOp5T4RCY/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy53/YWxscGFwZXJzMTMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzEyL05hdHVy/ZS1MYWtlLUJsZWQu/LURlc2t0b3AtYmFj/a2dyb3VuZC1pbWFn/ZS5qcGc"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <b>{p.id}</b>
            <h5 className="card-title">Nmae : {p.name}</h5>
            <p className="card-text">Email : {p.email}</p>
            <p className="card-text">Address : {p.address.street}</p>
            <p className="card-text">Company : {p.company.name}</p>
            <p className="card-text">Phone : {p.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataFetch;
