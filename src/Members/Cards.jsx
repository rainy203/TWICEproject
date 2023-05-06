import React from "react";

function Cards(props) {
  return (
    <div className="cardiv" id="twiceCardDiv" onClick={props.onClick}>
      <div className="card">
        <img className="img" src={props.image} />
        <p className="name">Name: {props.names}</p>
        <p className="age">
          <b>Age: </b>
          {props.ages}
        </p>
        <p className="ranking">
          <b>Ranking: </b>#{props.ranks}
        </p>
      </div>
    </div>
  );
}

export default Cards;
