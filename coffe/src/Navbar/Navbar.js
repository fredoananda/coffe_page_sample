import React, { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isNavbarOpen ? "navbar-open" : ""}`} id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="/#">
          <img src="assets/img/logo.svg" alt="Logo" />
        </a>
        <button
          className={`navbar-toggler ${isNavbarOpen ? "collapsed" : ""}`}
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={toggleNavbar}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" onClick={toggleNavbar}>
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={toggleNavbar}>
                Moods
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team" onClick={toggleNavbar}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={toggleNavbar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
