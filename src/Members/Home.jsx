import "./App.css";

import data from "./Twicedatabase";
import CardContainer from "./CardContainer";
function Home() {
  const cards = data.map((items) => {
    return <CardContainer items={items} key={items.img.toString()} />;
  });

  return (
    <div className="maincontainer">
      
      <section className="cardsec">{cards}</section>
    </div>
  );
}

export default Home;
