import React from "react";
import "./Movies.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-items">
          <Link to="home" className="linked-tag">
            <h1 className="header-text">
              Khali<span className="logo-colored">Fa</span>
            </h1>
          </Link>
          <h4 className="welcome-text">Welcome to my Movie Search Web App!</h4>
        </div>
        <p className="hero-text">
          <i>What would you like to watch or download? Just search for it!</i>
        </p>
      </nav>
    </div>
  );
}

export default Header;
