import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand py-2">
        Garrett Roberts
      </Link>

      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navBarToggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navBarToggler">
      <ul className="navbar-nav">
        <li className="nav-item px-3">
            <Link to="/about" className="nav-item px-3 nav-link">
              About
            </Link>
        </li>
        <li className="nav-item px-3">
            <Link to="/portfolio" className="nav-item px-3 nav-link">
              Portfolio
            </Link>
        </li>
        <li className="nav-item px-3">
          <Link to="/contact" className="nav-item px-3 nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>

  )
};

export default NavTabs;