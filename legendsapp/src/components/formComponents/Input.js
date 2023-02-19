import React from "react";
import './Input.css';
const Input = ({ type, placeholder,label ,handleInput,value}) => {
  return (
    <div className="input-field">
        <label>{label}</label><br/>
      <input type={type} placeholder={placeholder} className="text-input" onChange={handleInput} value={value}/>
    </div>
  );
};

export default Input;
