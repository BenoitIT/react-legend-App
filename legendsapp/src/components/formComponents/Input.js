import React from "react";
import './Input.css';
const Input = ({ type, placeholder,label ,handleInput,value,className}) => {
  return (
    <div className="input-field">
        <label>{label}</label><br/>
      <input type={type} placeholder={placeholder} className={className} onChange={handleInput} value={value}/>
    </div>
  );
};

export default Input;
