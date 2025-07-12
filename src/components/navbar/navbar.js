import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
                href="/curriculum.pdf"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Curriculum
            </a>
            </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
