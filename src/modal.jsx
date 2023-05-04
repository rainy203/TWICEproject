import React from "react";
export default function Modal(props) {
  if (!props.open) return null;

  return (
    <div className="modalDiv" onClick={props.onClick}>
      <img className="imgPop" src={props.images} />
      <p className="namePop">Name: {props.names}</p>
      <p className="agePop">
        <b>Age: </b>
        {props.ages}
      </p>
      <p className="rankingPop">
        <b>Ranking: </b>#{props.ranks}
      </p>
    </div>
  );
}
