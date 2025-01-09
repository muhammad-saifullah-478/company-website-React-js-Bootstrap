// import Footer from "./Footer";

function Navbar() {
  const handlsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="good">
      <header
        className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom hader"
        onSubmit={handlsubmit}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use></use>
          </svg>
          <img className="image-logo" src="logo.png" />
          <span className="fs-4 logo-Text"> SKY.PRO</span>
        </a>

        <ul className="nav nav-pills Haders-page sibling-fade  ">
          <li className="nav-item Home-page">
            <a href="/" className="nav-link home ">
              Home
            </a>
          </li>
          <li className="nav-item Home-page">
            <a href="/service" className="nav-link home">
              Service
            </a>
          </li>
          <li className="nav-item Home-page">
            <a href="/project" className="nav-link  home">
              Project
            </a>
          </li>
          <li className="nav-item Home-page">
            <a href="/blog" className="nav-link  home">
              About Us
            </a>
          </li>
          <li className="nav-item Home-page">
            <a href="/contect" className="nav-link  home">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
