import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📰 CyberForenX Live News</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Politics</li>
        <li>Sports</li>
        <li>Tech</li>
        <li>Entertainment</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;