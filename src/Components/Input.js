import React from "react";
import "./Input.css";


const input = props => (
  <div >
    <label > {props.label}
      <input
        name={props.name}
        type={props.type}
        className="TextStyle"
        value={props.value}
        onChange={event => props.Changed(event)}
        onKeyPress={props.entered}
        restrict="/^[a-zA-Z]*$/"  
    />
    </label>
  </div>
);

export default input;