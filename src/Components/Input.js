import React from "react";
import "./Input.css";


const input = props => (
  <div >
   <label > {props.label}
    <input
      type={props.type}
      className="TextStyle"
      value={props.value}
      onChange={event => props.Changed(event)}
      onKeyPress={props.entered}
    />
    </label>
  </div>
);

export default input;