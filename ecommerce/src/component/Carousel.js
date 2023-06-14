import React from "react";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner custom-carousel">
          <div className="carousel-item active">
            <img
              src="https://imgs.search.brave.com/1ZuVdlwT1l2wtFeTLmTBej5tri_Btup04aRV0dxWJbc/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/YnJpbGxpYW50bmV3/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDIvbGFw/dG9wLmpwZw"
              className="d-block w-100"
              alt="img"
            />
            <div className="carousel-caption d-none d-md-block w-100 h-100"></div>
          </div>
          <div className="carousel-item custom-carousel">
            <img
              src="https://imgs.search.brave.com/FGoIgv-l1mEiwCZJmtRSA2zk46YHU0WDdHxZZPu6BM0/rs:fit:1200:1125:1/g:ce/aHR0cHM6Ly90ZWNo/ZGV0ZWN0cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvdkVjRUxIZG45/OTh3UlRjQ3pxVjVt/OS5qcGc"
              className="d-block w-100"
              alt="img"
            />
            <div className="carousel-caption d-none d-md-block w-100 h-100"></div>
          </div>
          <div className="carousel-item custom-carousel">
            <img
              src="https://imgs.search.brave.com/5vgPT9rr4UiFmhkj1H3kEuyL3z0Rx3SUJboIph3_RNI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXhu/aW8uY29tL2ZyZWUt/aW1hZ2VzLzIwMTkv/MDEvMTUvMjAxOS0w/MS0xNS0xMC0yMS0y/Ni5qcGc"
              className="d-block w-100"
              alt="img"
            />
            <div className="carousel-caption d-none d-md-blockw-100 h-100"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
