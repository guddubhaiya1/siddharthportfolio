import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home </li>
          <li className="nav-item">About Me</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">GitHub</li>
          <li className="nav-item">Contact Me</li>
          <li className="nav-item">An hour in my life</li>
          <li style={{ color: "red", fontWeight: "bold" }} className="nav-item">
            Resume
          </li>
        </ul>
      </nav>
      <div className="moving-bar"></div> {/* First moving bar */}
    </header>
  );
};

export default Header;