import React from "react";
import "./App.css";
function Navbar() {
  return (
    <div className="navContainer">
      <header>
        <nav className="Navheader">
          <a href = "index.html">
          <img className="logo" src="/images/logo.png" />
          </a>
          <h1 className="Navtitle">Twice Database</h1>

          <span className = "NavElements">


          <a href = "/src/Song/songs.html" className = "NavSong">
            <div className = "hoverDiv">

            <div className = "hoverDivAni">
            
            <h2>Releases</h2>
          
            </div>
            </div>
            </a>
            

          


            <a href = "members.html" className = "NavMembers">
            <div className = "hoverDiv1">
            <div className = "hoverDivAni1">
            
            <h2>Members</h2>
           
            </div>
            </div>
            </a>

            


          </span>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
