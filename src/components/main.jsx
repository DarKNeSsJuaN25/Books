import React from "react";
import { Link } from "wouter";
const Main = (props) => {
    return(
      <div className="image-container">
      <h3>{props.name}</h3>
      <Link href={props.link}> 
          <img src={require(`../images/${props.source}`)} alt="22-11-63" className="zoomable-image"/>
      </Link>
      </div>
    )
}

export default Main;