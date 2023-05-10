import React from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom"
function Navbar() {
  return (
    <div className="navContainer">
      <header>
        <nav className="Navheader">
          <NavLink to ="/">
          <img className="logo" src="/images/logo.png" />
          </NavLink>
          <h1 className="Navtitle">Twice Database</h1>

          <span className = "NavElements">


          <NavLink to = "/songs">
            <div className = "hoverDiv">

            <div className = "hoverDivAni">
            
            <h2>Releases</h2>
          
            </div>
            </div>
        
            </NavLink>
            

          


            <NavLink to = "/" className = "NavMembers">
            <div className = "hoverDiv1">
            <div className = "hoverDivAni1">
            
            <h2>Members</h2>
           
            </div>
            </div>
            </NavLink>

            


          </span>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
