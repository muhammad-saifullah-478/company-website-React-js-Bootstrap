// import React from 'react'

import Footer from "./Footer";
import Navbar from "./Navbar";
import Servaces from "./Servaces";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hader-main " data-aos="flip-left">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 hreotext">
              Shaping the Future, Building Today
            </h1>
            <p className="lead" data-aos="zoom-in-up">
              SKY.PRO builders and developers are serving low-cost housing to
              their customers by conveying comforts and high-standard utilities
              to their clients. So, everyone can attain their dream house for
              themselves and turn their visions into reality with SKY.PRO.
              SKY.PRO Builders and Developers are best construction company in
              Saudi Arabia. We aim to facilitate luxurious and affordable
              housing services to our customers with comfort. So, avail this
              best opportunity to attain your dream house for yourself and turn
              your living desires into achievements with SKY.PRO Builders and
              Developers in Saudi Arabia.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
             
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
               <a href="/contect" className="nav-link  home p-0 w-2">
            Lets work
            </a>
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg hero-page">
            <img
              className="rounded-lg-3 "
              src="https://value-sa.com/wp-content/uploads/2024/03/Picture1-20.png"
              alt=""
              width="180%"
            />
          </div>

          <Servaces />
        </div>
      </div>

      <Footer />
    </>
    
  );
};
export default Hero;

 