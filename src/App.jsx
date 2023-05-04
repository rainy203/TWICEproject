import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import data from "./Twicedatabase";
import Cards from "./Cards.jsx";
import Modal from "./Modal.jsx";
import CardContainer from "./CardContainer";
function App() {
  const cards = data.map((items) => {
    return <CardContainer items={items} key={items.img.toString()} />;
  });

  return (
    <div className="maincontainer">
      <Navbar />
      <section className="cardsec">{cards}</section>
    </div>
  );
}

export default App;
