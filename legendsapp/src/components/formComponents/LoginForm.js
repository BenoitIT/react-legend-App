import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import './Input.css';
const LoginForm = () => {
  return (
    <div className="form-container">
      <div className="form-Heading">
        <h4>sign up to your account</h4>
      </div>
      <div className="formBody">
        <Input type="text" placeholder="enter your email"  label="Email"/>
        <Input type="password" placeholder="enter your password" label="Password"/>
        <SubmitButton value="sign in"/>
        <h5>have no account! <a>sign up</a></h5>
      </div>
    </div>
  );
};
export default LoginForm;
