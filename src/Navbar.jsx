import React from "react";
import "./App.css";
function Navbar() {
  return (
    <div className="navContainer">
      <header>
        <nav className="Navheader">
          <img className="logo" src="/images/logo.png" />
          <h1 className="Navtitle">Twice Database</h1>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
