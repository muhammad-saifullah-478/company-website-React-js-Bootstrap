// import React from "react";
// import Navbar from "./Navbar";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* <Navbar /> */}
      <footer className="py-5 Contect Contect-footer " data-aos="flip-left" data-aos="fade-in">
        <div className="row " >
          <div className="col-2 ">
            <h5>Section</h5>
            <ul className="nav flex-column Contect-footer" style={{color:"black"}}>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 " style={{color:"black"}}>
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 " style={{color:"black"}}>
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" style={{color:"black"}}>
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 "style={{color:"black"}}>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label className="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 d-flex align-items-center " style={{marginTop:"55px"}}>
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use></use>
              </svg>
            </a>
            <span className="">© 2024 Company, Inc</span>
          </div>
          

          {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"  style={{marginTop:"55px" , color:"black"}}>
            <div className="ms-3">
              <a className="" href="#" style={{color:"red"}}>
                <svg className="bi" width="24" height="24">
                  <FaInstagram />
                </svg>
              </a>
            </div>
            <div className="ms-3" >
              <a className="" href="#" style={{color:"blue"}}>
                <svg className="bi" width="24" height="24">
                <FaFacebook />
                </svg>
              </a>
            </div>
            <div className="ms-3">
              <a className="text-black" href="#"style={{color:"blue"}} >
                <svg className="bi" width="24" height="24">
                <FaLinkedin />

                </svg>
              </a>
            </div>
          </ul> */}
        </div>

        {/* <div className="d-flex justify-content-between py-4 my-4 border-top " style={{margin:"44px"}}>
      <p>© 2021 Company, Inc. All rights reserved.</p>
      
    </div> */}
       
      </footer>
    </>
  );
};

export default Footer;
