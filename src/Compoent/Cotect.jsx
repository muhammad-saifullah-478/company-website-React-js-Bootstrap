// import React from 'react'

import Footer from "./Footer";
import Navbar from "./Navbar";

const Cotect = () => {
  return (
    <>
      <Navbar />

      <h1 className="Services  " style={{ marginRight: "904px" }}>
        <span className="border-bottom border-5  border-info">Let's chat</span>
      </h1>
      <div className="col-sm-6 mb-3 mb-sm-0 number">
        <div className="card  card-body">
          <div className="card-body">
            <h5 className="caDeveloping Land">Phone</h5>
            <p className="card-text">
              <a href="" className="saif">
                +95829829783
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0" data-aos=""></div>
      <div className="col-sm-6 mb-3 mb-sm-0 number">
        <div className="card  card-body">
          <div className="card-body">
            <h5 className="caDeveloping Land">Gmail</h5>
            <p className="card-text">
              <a href="" className="saif">
                info@skypro.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0" data-aos=""></div>
      <div className="col-sm-6 mb-3 mb-sm-0 number">
        <div className="card  card-body">
          <div className="card-body">
            <h5 className="caDeveloping Land">Address</h5>
            <p className="saif">
              <a
                href="https://www.google.com/maps/place/Saudi+Arabia/@24.222142,45.0740834,5z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                className="saif"
              >
                Madinah, one of Islam's two holiest cities
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cotect;
