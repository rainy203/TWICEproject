import React from "react";




const OVERLAY_STYLES = {
  position: 'fixed',
  top:0,
  bottom:0,
  left:0,
  right:0,
  backgroundColor: 'rgba(0,0,0,0.7)'
}
export default function Modal(props) {
  if (!props.open) return null;

  return (
    <>
    <div style = {OVERLAY_STYLES} onClick={props.onClick} />
    <div className="modalDiv">
      <div className = "modalContent">
      
      <img className="imgPop" src={props.images} />
      <div className = "descPop">
      <p className="namePop">Name: {props.names}</p>
      <p className="agePop">
        <b>Age: </b>
        {props.ages}
      </p>

      <p className="rankingPop">
        <b>Ranking: </b>#{props.ranks}
      </p>
      </div>


      </div>
      <section className = "bioPop"> 
      <h1 className ="headerPop">Biography:</h1>
      <p className = "contentPop">{props.bio}</p>
      
      </section>
    </div>
    </>
  );
}
