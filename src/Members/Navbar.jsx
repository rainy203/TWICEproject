import React from "react";
import "./App.css";
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="navContainer">
      <header>
        <nav className="Navheader">
          <Link to ="/">
          <img className="logo" src="/images/logo.png" />
          </Link>
          <h1 className="Navtitle">Twice Database</h1>

          <span className = "NavElements">


          <Link to = "/songs" className = "NavSong">
            <div className = "hoverDiv">

            <div className = "hoverDivAni">
            
            <h2>Releases</h2>
          
            </div>
            </div>
        
            </Link>
            

          


            <Link to = "/" className = "NavMembers">
            <div className = "hoverDiv1">
            <div className = "hoverDivAni1">
            
            <h2>Members</h2>
           
            </div>
            </div>
            </Link>

            


          </span>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
