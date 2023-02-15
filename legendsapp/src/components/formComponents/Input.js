import React from "react";
import './Input.css';
const Input = ({ type, placeholder,label }) => {
  return (
    <div className="input-field">
        <label>{label}</label><br/>
      <input type={type} placeholder={placeholder} className="text-input" />
    </div>
  );
};

export default Input;
