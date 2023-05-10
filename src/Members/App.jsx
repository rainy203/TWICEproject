import "./App.css";
import Home  from "./Home.jsx"
import Navbar from "./Navbar"
import  SongApp from "/src/Song/SongApp.jsx"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div>
    <Navbar />

    <Routes>
    <Route path = "/" element = {<Home />}></Route>
    <Route path = "/songs" element = {<SongApp />}> </Route>

    </Routes>
    
    
    
    
    </div>
   
  );
}

export default App;
