/** @format */

import React from "react";
import "./style.css";

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  return (
    <div className="card" {...props}>
      {(props.headerleft || props.headerRight) && (
        <div className="cardHeader">
          {props.headerleft && <div>{props.headerleft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;
