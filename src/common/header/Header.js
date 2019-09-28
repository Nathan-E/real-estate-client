import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { getSessionCookie } from "../../utils/cookie";

import "../../App.css";

const Header = ({ auth, menuLink }) => {
  const [hasScrolled, setHasScrolled] = useState({ move: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop >= 90) {
        return setHasScrolled(!hasScrolled.move);
      }

      return setHasScrolled(!hasScrolled.move);
    };

    window.addEventListener("scroll", handleScroll);
  }, [hasScrolled.move]);

  return (
    <header
      className={`${
        hasScrolled ? "header header-sticky is-sticky" : "header header-sticky"
      }`}
    >
      <div className="header-bottom menu-center">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col mt-10 mb-10">
              <div className="logo">
                <NavLink to="/">
                  <img
                    src={require("../../assets/images/logo.png")}
                    alt="company-logo"
                  />
                </NavLink>
              </div>
            </div>

            <div className="col d-none d-lg-flex">
              <nav className="main-menu">
                <ul>
                  {menuLink.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.path} activeClassName="activeLink">
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col mr-sm-50 mr-xs-50">
              <div className="header-user">
                {auth ? (
                  <NavLink to="/user/:id/profile">
                    <i className="pe-7s-user"></i>
                    <span>Account</span>
                  </NavLink>
                ) : (
                  <NavLink to="/login-signup" className="user-toggle">
                    <i className="pe-7s-user"></i>
                    <span>Login or Register</span>
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex d-lg-none">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  menuLink: [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Properties",
      path: "/properties"
    },
    {
      name: "Agent",
      path: "/agent"
    },
    {
      name: "Agencies",
      path: "/agencies"
    },
    {
      name: "Contact Us",
      path: "/contact-us"
    }
  ]
};
