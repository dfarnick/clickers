import React from "react";


function PlaneCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="clickimg" id = {props.id} src={props.image} alt=" " onClick={()=>props.handleClick(props.id)}/>
      </div>
    </div>
  );
}

export default PlaneCard;